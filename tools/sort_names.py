import csv
from datetime import datetime
import sys
import webbrowser
from PyQt6.QtWidgets import QApplication,QMessageBox, QFileDialog, QMainWindow, QVBoxLayout, QPushButton, QTextEdit, QWidget
from PyQt6.QtCore import QTimer
from PyQt6.QtCore import Qt
# app = QApplication([])
sys.stdout.reconfigure(encoding='utf-8')

class SortNameWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.names = ""
        self.button4 = QPushButton("all patrons list")
        self.setWindowFlag(Qt.WindowType.WindowStaysOnTopHint)
        self.setup_ui()
        self.run_sort_name()


    def run_name_dialog(self, filename):
        # CSVﾌｧｲﾙを読み込む
        with open(filename, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            data = list(reader)

        # 'Lifetime Amount'が0の行を除外
        data = [row for row in data if float(row['Lifetime Amount']) > 0]

        # 'Lifetime Amount'と'Patronage Since Date'に基づいて並べ替え
        data.sort(key=lambda row: (-float(row['Lifetime Amount']), datetime.strptime(row['Patronage Since Date'], '%Y-%m-%d %H:%M:%S')))

        # 並べ替えた結果から名前を取得
        self.names = [row['Name'].rstrip().replace('@', '＠') for row in data]

        names_with_comma = ", ".join(self.names)
        names_count = names_with_comma.count(',') + 1
        self.button4.setText(f"all patrons list ({names_count})")

        self.textEdit.setText(", ".join(self.names))
        self.show()
        self.raise_()

    # def copy_names_with_newline(self):
    #     clipboard = QApplication.clipboard()
    #     clipboard.setText("\n".join(self.names))
    #     # main_window.close()

    def copy_names_with_comma(self):
        clipboard = QApplication.clipboard()
        names_with_comma = ", ".join(self.names)
        # print(f"Names count: {names_with_comma.count(',') + 1}")
        names_count = names_with_comma.count(',') + 1
        print("")
        print(names_count)

        limit_100 = True
        if limit_100:
            limited_names = ", ".join(self.names[:100])
            clipboard.setText(limited_names)
        else:
            clipboard.setText(names_with_comma)

    def all_names_with_comma(self):
        clipboard = QApplication.clipboard()
        names_with_comma = ", ".join(self.names)
        # print(f"Names count: {names_with_comma.count(',') + 1}")
        names_count = names_with_comma.count(',') + 1
        limit_100 = False
        if limit_100:
            limited_names = ", ".join(self.names[:100])
            clipboard.setText(limited_names)
        else:
            clipboard.setText(names_with_comma)


    def setup_ui(self):
        central_widget = QWidget()
        layout = QVBoxLayout(central_widget)
        self.textEdit = QTextEdit("\n".join(self.names))
        layout.addWidget(self.textEdit)

        # button1 = QPushButton("改行")
        button2 = QPushButton("limit 100")
        
        button3 = QPushButton("Reload")
        # layout.addWidget(button1)
        layout.addWidget(button2)
        layout.addWidget(self.button4)
        layout.addWidget(button3)

        self.setCentralWidget(central_widget)
        self.setLayout(layout)

        # button1.clicked.connect(self.copy_names_with_newline)
        button2.clicked.connect(self.copy_names_with_comma)
        button3.clicked.connect(self.run_sort_name)
        self.button4.clicked.connect(self.all_names_with_comma)

        self.show()


    def run_sort_name(self):
        # https://www.patreon.com/api/members.csv?filter[campaign_id]=10114392&json-api-version=1.0&json-api-use-default-includes=false&include=[]
        csv_url = "https://www.patreon.com/api/members.csv?filter[campaign_id]=10114392&json-api-version=1.0&json-api-use-default-includes=false&include=[]"

        webbrowser.open(csv_url)

        self.msg_box = None
        self.msg_box = QMessageBox()
        self.msg_box.setText("Please download the CSV file. When the download is complete, click OK.")
        self.msg_box.setWindowFlag(Qt.WindowType.WindowStaysOnTopHint)
        self.msg_box.exec()

        # ﾌｧｲﾙ選択ﾀﾞｲｱﾛｸﾞを作成
        self.dialog = None
        self.dialog = QFileDialog()
        self.dialog.setFileMode(QFileDialog.FileMode.ExistingFile)
        self.dialog.setNameFilter("CSV (*.csv)")
        self.dialog.setDirectory('G:\Download')

        if self.dialog.exec() == QFileDialog.DialogCode.Accepted:
            filename = self.dialog.selectedFiles()[0]
            self.run_name_dialog(filename)



# run_sort_name()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = SortNameWindow()
    window.show()
    sys.exit(app.exec())



