# 🌐Local Anki Server
Use self-hosted server with Wifi

<!-- 🌐Local Anki Server - Use self-hosted server with Wifi (Created by Shigeඞ) -->


<!-- **[AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`** -->


<!-- Created -->
[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

### What is this Add-on?

This is an add-on to use a local server instead of AnkiWeb server. The latest version of Anki for desktop has a built-in self-hosted server for advanced Anki users, this add-on makes that server easier to use for beginner Anki users, you can easily use the local server by just logging in with very little setup.

- [🌐Local Anki Server](#local-anki-server)
    - [What is this Add-on?](#what-is-this-add-on)
  - [Introduction](#introduction)
    - [How the add-on basically works](#how-the-add-on-basically-works)
    - [Advantages](#advantages)
    - [Disadvantages](#disadvantages)
    - [Notes](#notes)
    - [How to terminate the server](#how-to-terminate-the-server)
  - [How to use](#how-to-use)
    - [Settings](#settings)
    - [Local tab](#local-tab)
      - [User Setting](#user-setting)
      - [Local Server URL](#local-server-url)
      - [OR code](#or-code)
      - [User Self-hosted server](#user-self-hosted-server)
    - [Custom tab](#custom-tab)
      - [Custom Anki Path](#custom-anki-path)
      - [Custom Sync Base Path](#custom-sync-base-path)
      - [Max Sync Payload](#max-sync-payload)
      - [Sync Port](#sync-port)
      - [Sync Host (Local)](#sync-host-local)
    - [Users tab](#users-tab)
    - [Online Tab](#online-tab)
  - [](#)
  - [Access local servers from the Internet](#access-local-servers-from-the-internet)
  - [🚨Report](#report)

## Introduction

### How the add-on basically works

When you start Anki the local server is auto started. The default username and password is `username`, `password1234` (You can optionally change them.) On the desktop it auto sets the self-hosted server to Preferences when you log in from the add-on settings. In AnkiMobile and AnkiDroid you can connect from the same wifi after entering the self-hosted server in the mobile app option. When you close Anki the local server is auto closed.

### Advantages

1. Synchronization is fast because it is local wifi, so even if you have a lot of audio and images, synchronization will be completed almost instantly. (Syncing all decks for the first time takes a little longer.) You can optionally remove the deck size limit. Forced synchronization is also relatively fast, so changing fields is easy.

2. Laptop and mobile syncing is easy when AnkiWeb is not available for some reason. (e.g. Communication is too slow because the deck is too large. Cannot sync because the limit is exceeded. There is a temporary communication problem. Unable to connect to the Internet.)

3. Basically it works with local wifi, but with additional settings you can connect to your home wifi from outside and sync.

### Disadvantages

1. Since the data is stored locally there is no way to recover it if the decks are lost due to some problem (Official AnkiWeb they may be able to recover the data from their server), so if you are worried about it please back up your decks regularly by yourself.

2. To access the server Anki and your laptop must be running at all times. If Anki closes for some reason or if your laptop closes the server will also close.

3. You will need storage for the decks. This means that storing sync data on a laptop doubles the file size. (e.g. decks for review + decks for sync)

4. Basically the self-hosted server is a feature for advanced Anki users so there is no official Anki support.


### Notes

1. Anki 2.1.57+ is required. Older Anki cannot be used because they do not have a server built in.

1. When you log in to a new account on the local server, you are automatically logged out of the current AnkiWeb account. If you have forgotten your AnkiWeb email and password you may not be able to log in again, so please be careful. Your current AnkiWeb username can be found in Preferences. (Tools -> Preferences -> Syncing -> AnkiWeb Account)

1. If you do not log in for about 6 months, your AnkiWeb account will be deleted by the official Anki. So if you want to keep your AnkiWeb account, I recommend you to sync with AnkiWeb from time to time to back up your decks.

2. The local server depends on the server built into Anki. So major changes to the official Anki server may cause problems.


### How to terminate the server

The local sync server will continue to run automatically in the background. If for some reason the server does not close automatically, you will need to close it from the Task Manager. (Or restart your laptop.) e.g.

1. Windows: Task Manager
2. Mac: Activity Monitor
3. Linux: System Monitor

Also if the server freezes for some reason, it may prevent Anki from starting. In such a case, exit Anki and the server as described above, and start Anki with Shift key pressed to disable the add-ons.


## How to use

### Settings

When you press Save, or when you log in a new user, the server will exit and restart.




### Local tab

Wifiでのみ使用する場合はこのタブだけで働くはずです.

![alt text](images/local-anki-server/01.png)



#### User Setting

"Login User 1"のボタンを押してログインすると, ユーザー名, パスワード, ローカルサーバーが自動的に設定されます.
AnkiのSyncボタンを押して同期できれば成功です.


#### Local Server URL

このURLをAnkiMobileまたはAnkiDroidのオプションへ入力するとモバイルからローカルのサーバーへアクセスできます.
同じWifiにアクセスしている必要があります.
サーバーはオプションを反映するために再起動されます.

#### OR code

URLをモバイルへ手入力するかわりに, QRコードでURLを表示してコピーできます.
同じWifiにアクセスしている必要があります.

![alt text](images/local-anki-server/05.png)

#### User Self-hosted server

有効にすると新しいローカルサーバーのURLを自動的にこのAnki for desktopに設定します.
オフにするとこのAnki for desktopに設定されたセルフホストサーバーを無効化しAnkiWebに戻します.
ただしオフにしてもローカルのサーバーは実行され続けます.



### Custom tab
これらのオプションは自動的に設定される, なので基本的に必要がなければ変更する必要はありません.

![alt text](images/local-anki-server/03.png)

#### Custom Anki Path
Ankiの実行ファイルのパスを指定できます.
e.g. `C:\Users\UserName\AppData\Local\Programs\Anki\anki.exe`

自動検出がうまく機能しない場合に正しいパスを設定できます.
現在実行しているAnkiとは別のAnkiの実行ファイルを使用するとAnkiのバージョンを固定できます.

#### Custom Sync Base Path

The default path is `~.syncserver`. (e.g. `C:\Users\UserName\.syncserver`)

ボタンを押すとパスの場所を開いて

#### Max Sync Payload
MBで設定してください.
初期設定は100MBです.

#### Sync Port

ローカルで使用するサーバーのPort番号を変更できます.
e.g.
他のアプリケーションが同じ8080の番号を使用している場合重複するのでエラーが起きる, なので別の番号に変更する必要があります.

#### Sync Host (Local)

ローカルで使用するサーバーのホストの番号を変更できます.
自動検出されたIPアドレスが間違っているときに正しいIPアドレスを入力するために必要です.



### Users tab

このタブではサーバーで使用するユーザーを追加することができます.
サーバーに複数のプロファイルやアカウントがある場合に使用できます.
いまのところ最大で7ユーザーまで設定できます.

![alt text](images/local-anki-server/04.png)


### Online Tab

![alt text](images/local-anki-server/02.png)




##

<!--
e.g.
自動検出がうまく働かない場合.
Ankiが更新されても問題が起きないようにするために古いAnkiのバージョンに固定したい. -->



## Access local servers from the Internet







<br><br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  <!-- 1. <a href="https://ankiweb.net/shared/review/🟢" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development. -->
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/simple-fix-of-broken-add-ons-for-the-latest-anki-by-shige/41650" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.



<br><br><br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on, I'm Shigeඞ! I'm looking for supporters for my add-ons development, because I like Anki! So far I fixed and customized 60+ discontinued add-ons and created 30+ new add-ons. If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month). If you have any ideas or requests feel free to send them to me, thanks! :D


[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>

**\[ Special Thanks ]** <br>
 So far I received donations from 354 patrons and without their support I never could develop this and release for free, thank you very much!🙏<br><br>
  **Patrons:** *Arthur Bookstein, Haruka, Luis Alberto, Letona Quispe, 07951350313540, Lily, Ernest Chan, Daniel Kohl-Fink, GP O'Byrne, Tim, Kyle Mondlak, Jesse Asiedu, Tobias Klös, NamelessGO, ElAnki, Jake Stucki, KM, Abhi S, Kurt Grabow, Jonathan Contreras, Keeler Kime, ellie, Matthew Hartford, Fahim Shaik, Augusto Stein, Tae Lee, Ashok Rajpurohit, NoirHassassin, Morgan Torres, Isabel Guan, tarek, adam Katz, K, iuventius, Patrick ellis, Gabriel Vinicio Guedes, findus161, Douglas Beeman, Ketan Pal, mootcourt, Tyler Schulte, Aurora Dzurko, Juan Salgado, sab hoque, Haley Schwarz, Jk, Cole Krueger, K, Robert Malone, Wei, Sean Voiers, Stellate ggl, Aayush Bhatawadekar, Jeanna, J P, qiting zeng, Temi Jide, Azfar Hussain, Ansel Ng, Victor Evangelista, Adrine, Oleksandr Pashchenko, Lis Y., Ythalo Vlogs, Alba Grecia Suárez Recuay, 龍星 武田, Alex D, oiuhroiehg, Aaron Buckley, Osasere Osula, Izz Aryan, Elisabeth Barber, Yaeerrrrrr, Christopher Lam, Steven Banner, Kaitlyn Bowler, Alex Kaiser, Svel1989, Jordan Brown, Lincoln Jacobs, Heidi, Gabriel Farrugia, Matheus Chagas, Renoaldo Costa Silva Junior, Felipe Dias, Simeon, Tina Weingarten, Benjamin Tarnowski, Stephen Ankoma, David C, Jordan Garnier, Tarek Bouamoud, Robert Wiebalck, Raffaele Russo, Corentin, Yitzhak Bar Geva, Muneeb Khan, Jason Liu, Hikori, Lê Hoàng Phúc, anonymous* [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)


<!-- ## 📥 How do I install this add-on?
1. Copy and paste the add-on code ( `🟢` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
2. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
3. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/🟢) -->

