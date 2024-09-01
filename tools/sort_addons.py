import sys
import sqlite3
from PyQt6.QtWidgets import QApplication, QMainWindow, QTextEdit, QVBoxLayout, QWidget, QPushButton
from PyQt6.QtWebEngineWidgets import QWebEngineView
from PyQt6.QtCore import QUrl, QTimer
from bs4 import BeautifulSoup
import requests
import csv
import os

# AnkiWebのﾛｸﾞｲﾝ情報
LOGIN_URL = "https://ankiweb.net/account/login"
ADDONS_URL = "https://ankiweb.net/shared/mine"

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("HTML Content Fetcher")
        self.setGeometry(100, 100, 800, 600)

        self.web_view = QWebEngineView(self)
        self.web_view.setUrl(QUrl(LOGIN_URL))
        self.setCentralWidget(self.web_view)

        self.fetch_button = QPushButton("Fetch Data", self)
        self.fetch_button.clicked.connect(self.fetch_html_content)
        self.fetch_button.setGeometry(10, 10, 100, 30)

    def fetch_html_content(self):
        self.web_view.setUrl(QUrl(ADDONS_URL))
        self.web_view.loadFinished.connect(self.delay_process_html_content)

    def delay_process_html_content(self):
        QTimer.singleShot(5000, self.process_html_content)  # 5秒待機
        print("start qtimer")

    def process_html_content(self):
        print("start process html")
        try:
            self.web_view.page().runJavaScript("document.documentElement.outerHTML", self.save_html_content_csv)
            print("runjavascript done")
        except Exception as e:
            print(f"Error during JavaScript execution: {e}")




    def save_html_content_csv(self, html_content):
        print("save_html_content")
        # BeautifulSoupを使用してHTMLを解析

        # HTMLｺﾝﾃﾝﾂのｻｲｽﾞを確認
        print(f"HTML content size: {len(html_content)} characters")
        
        # HTMLｺﾝﾃﾝﾂの一部を抽出
        start_index = html_content.find('<table')
        print("start_index")
        end_index = html_content.find('</table>') + len('</table>')
        print("end_index")
        
        if start_index == -1 or end_index == -1:
            print("Table not found in the HTML content.")
            return
        print("partial_html_content")
        partial_html_content = html_content[start_index:end_index]

        print("partial_html_content done")
        soup = BeautifulSoup(partial_html_content, 'html.parser')
        print("soup")
        table = soup.find('table')
        print("table")

        if table is None:
            print("Table not found in the HTML content.")
            return

        # CSVﾌｧｲﾙにﾃﾞｰﾀを保存
        csv_file = 'addons.csv'
        file_exists = os.path.isfile(csv_file)

        with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            
            # ﾌｧｲﾙが存在しない場合はﾍｯﾀﾞｰを書き込む
            if not file_exists:
                writer.writerow(['title', 'thumbs_up', 'modified', 'downloads', 'anki_version'])

            # ﾃｰﾌﾞﾙからﾃﾞｰﾀを抽出してCSVに書き込む
            for row in table.find_all('tr')[1:]:
                cols = row.find_all('td')
                if len(cols) > 1:
                    title = cols[1].text.strip()
                    thumbs_up = cols[2].text.strip()
                    modified = cols[3].text.strip()
                    downloads = int(cols[4].text.strip())
                    anki_version = cols[5].text.strip()

                    # 重複ﾁｪｯｸ
                    with open(csv_file, mode='r', newline='', encoding='utf-8') as read_file:
                        reader = csv.reader(read_file)
                        if any(row[0] == title for row in reader):
                            continue

                    writer.writerow([title, thumbs_up, modified, downloads, anki_version])

        print("Data has been saved to the CSV file.")





    def save_html_content_database(self, html_content):
        print("save_html_content")
        # BeautifulSoupを使用してHTMLを解析

        # HTMLｺﾝﾃﾝﾂのｻｲｽﾞを確認
        print(f"HTML content size: {len(html_content)} characters")
        
        # HTMLｺﾝﾃﾝﾂの一部を抽出
        start_index = html_content.find('<table')
        print("start_index")
        end_index = html_content.find('</table>') + len('</table>')
        print("end_index")
        
        if start_index == -1 or end_index == -1:
            print("Table not found in the HTML content.")
            return
        print("partial_html_content")
        partial_html_content = html_content[start_index:end_index]
    
        print("partial_html_content done")
        soup = BeautifulSoup(partial_html_content, 'html.parser')
        print("soup")
        table = soup.find('table')
        print("table")



        if table is None:
            print("Table not found in the HTML content.")
            return

        # SQLiteﾃﾞｰﾀﾍﾞｰｽに接続
        conn = sqlite3.connect('addons.db')
        cursor = conn.cursor()

        # ﾃｰﾌﾞﾙを作成
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS addons (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            thumbs_up TEXT,
            modified DATE,
            downloads INTEGER,
            anki_version TEXT
        )
        ''')

        # ﾃｰﾌﾞﾙからﾃﾞｰﾀを抽出してﾃﾞｰﾀﾍﾞｰｽに挿入
        for row in table.find_all('tr')[1:]:
            cols = row.find_all('td')
            if len(cols) > 1:
                title = cols[1].text.strip()
                thumbs_up = cols[2].text.strip()
                modified = cols[3].text.strip()
                downloads = int(cols[4].text.strip())
                anki_version = cols[5].text.strip()

                # 重複ﾁｪｯｸ
                cursor.execute('SELECT COUNT(*) FROM addons WHERE title = ?', (title,))
                if cursor.fetchone()[0] == 0:
                    cursor.execute('''
                    INSERT INTO addons (title, thumbs_up, modified, downloads, anki_version)
                    VALUES (?, ?, ?, ?, ?)
                    ''', (title, thumbs_up, modified, downloads, anki_version))


        # 変更をｺﾐｯﾄしてﾃﾞｰﾀﾍﾞｰｽ接続を閉じる
        conn.commit()
        conn.close()

        print("Data has been saved to the database.")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    main_window = MainWindow()
    main_window.show()
    sys.exit(app.exec())