# 🌐Local Anki Server
Use self-hosted server with Wifi

<!-- 🌐Local Anki Server - Use self-hosted server with Wifi (Created by Shigeඞ) -->

**[AnkiWeb Page](https://ankiweb.net/shared/info/49665391) | Code : `49665391`**

<!-- Created -->
[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

<br>

Edit 2025-08-10: I added a new mode to display the console. You can use it by selecting it when you start it up for the first time. (it will not start if the local server is already running.)


### What is this Add-on?

This is an add-on to use a local server instead of AnkiWeb server. The latest version of Anki for desktop has a built-in <a href="https://docs.ankiweb.net/sync-server.html">Self-Hosted Sync Server</a></a> for advanced Anki users, this add-on makes that server easier to use for beginner Anki users, so you can easily use the local server by just logging in with very little setup.

## Introduction

### How the add-on basically works

When you start Anki the local server is auto started. The default username and password is `username`, `password1234` (You can optionally change them.) On the desktop it auto sets the self-hosted server to Preferences when you log in from the add-on settings. In AnkiMobile and AnkiDroid you can connect from the same wifi after entering the self-hosted server in the mobile app option. When you close Anki the local server is auto closed.

### Why use a local server instead of AnkiWeb?

1. Synchronization is fast because it is local wifi, so even if you have a lot of audio and images, synchronization will be completed almost instantly. (Syncing all decks for the first time takes a little longer.) You can optionally remove the deck size limit. Forced synchronization is also relatively fast, so changing fields is easy.

2. Laptop and mobile syncing is easy when AnkiWeb is not available for some reason. (e.g. Communication is too slow because the deck is too large. Cannot sync because the limit is exceeded. There is a temporary communication problem. Unable to connect to the Internet.)

3. Basically it works with local wifi, but with additional settings you can connect to your home wifi from outside and sync.

### What are the disadvantages and risks of a local server?

1. Since the data is stored locally there is no way to recover it if the decks are lost due to some problem (Official AnkiWeb they may be able to recover the data from their server), so if you are worried about it please back up your decks regularly by yourself.

2. To access the server Anki and your laptop must be running at all times. If Anki closes for some reason or if your laptop closes the server will also close.

3. You will need storage for the decks. This means that storing sync data on a laptop doubles the file size. (e.g. decks for review + decks for sync)

4. The server built into Anki is intended for personal use so it is simple. It's not possible to review only with a browser like AnkiWeb.

4. Basically the self-hosted server is a feature for advanced Anki users so there is no official Anki support. This add-on is developed by me and is not related to the official Anki, and there is no warranty for any problems or damages that may occur (because this Free add-on is developed by me as a personal hobby volunteer, not for work or business).

#### Notes

1. Anki 2.1.57+ is required. Older Anki cannot be used because they do not have a server built in.

1. When you log in to a new account on the local server, you are automatically logged out of the current AnkiWeb account. If you have forgotten your AnkiWeb email and password you may not be able to log in again, so please be careful. Your current AnkiWeb username can be found in Preferences. (Tools -> Preferences -> Syncing -> AnkiWeb Account)

1. If you do not log in for about 6 months, your AnkiWeb account will be deleted by the official Anki. So if you want to keep your AnkiWeb account, I recommend you to sync with AnkiWeb from time to time to back up your decks.

1. The local server depends on the server built into Anki. In other words this add-on does not create a server it only controls the server built into Anki. So a major update to the latest Anki may cause errors and problems just like normal add-ons. (Or if the official Anki no longer supports the server.)

5. The server communicates via wifi, so if your antivirus software or firewall blocks access to the server and Anki, you may not be able to connect even if you setup this add-on correctly (of, Wifi at school or company prohibits access). If so, the solution is different for each device and software so I cannot support it.



### How to terminate the server?

The local sync server will continue to run automatically in the background, and basically the server will automatically terminate when Anki is closed. If for some reason the server does not close automatically, you will need to close it from the Task Manager. (Or restart your laptop.)

1. Windows: Task Manager
2. Mac: Activity Monitor
3. Linux: System Monitor

Also if the server freezes for some reason, it may prevent Anki from starting. In such a case, exit Anki and the server as described above, and start Anki with Shift key pressed to disable the add-ons.


## How to use

## Addon menu

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/06.png)


1. Option
     * Open the Settings window. Change the settings then auto restart server.
2. Run Local Sync Server
     * Run the server. If the server is already running do nothing.
3. Close Server
     * Close the server. If it cannot be closed please close it manually from Task Manager or restart your laptop.
4. Check Server
     * Exists Check whether the server exists or not.



### Settings

When you press Save, or when you log in a new user, the server will exit and restart.


### Local tab

You can open this add-on option from Tools. If you want to use the server only with local Wifi then the options in this tab should work well enough. (Just login and use the server URL.)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/01.png)


#### User Setting

When you press the “Login User 1” button, the username, password, and local server will be set automatically. If you can synchronize by pressing the “Sync” button on Anki it is successful. The default settings are `username` and `password1234`.


#### Local Server URL

Enter this URL into the AnkiMobile or AnkiDroid options to access the local server from your mobile. Laptop and mobile must be connected to the same Wifi. The server will be restarted to reflect the latest options.

#### QR code

Instead of manually typing the URL into your mobile device, you can use the QR code to display and copy the URL. Laptop and mobile must be connected to the same Wifi. If you want to use an online server URL additional setup is required (VPN).

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/05.png)

#### User Self-hosted server

Enabling this will automatically set the URL of the new local server to your Anki for desktop. If turned off, it will disable the self-hosted server setup for this Anki for desktop and return it to AnkiWeb. (But the local server will continue to run even if it is turned off.)

Or if you want to enter manually instead of automatically:
 1. Disable this option
 1. Tools -> Preferences -> Sync -> Self hosted Sync Server


### Custom tab

The options on this tab are set automatically, so basically you don't need to change them unless you want to.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/03.png)

#### Custom Anki Path
You can specify the path to the Anki executable. If the auto-detected path is wrong, you can set the correct path. e.g. `C:\Users\UserName\AppData\Local\Programs\Anki\anki.exe`

Or if you have downloaded multiple versions of Anki, you can use the Anki executable to fix the version of Anki to use on the server.

#### Custom Sync Base Path

This is the path to the folder where the server data is stored. The default path is `~.syncserver`. (e.g. `C:\Users\UserName\.syncserver`) You can change the path where decks are stored by setting a new path. This path cannot be the same as the path where Anki's decks are stored. (In other words, the server data must be stored in a different location from where Anki and your decks are stored.)

If you press the button it will open the location of the path where you have saved the decks on the server. If you want to delete the server data, delete those folders, anb be careful not to delete the account you need by mistake.

##### How to change username and password?
The username is used to name the folder. So if you want to change your username, you can open this path and change the folder name directly. Changing the name while the server is running may cause some problems, so I recommend that you close Anki and then change the name. (The server will run automatically until you close Anki.)

To change the password, simply change the password in this add-on option. If you change the username in the add-on option a new user folder will be created in this path.

#### Max Sync Payload

AnkiWeb and the built-in server limit the maximum size of uploads by default, you can change that limit with this option. Please set it in MB, the default setting is 100MB. If your upload limit is not reached you do not need to set this option.


#### Sync Port

You can change the Port number of the server you use locally. Port is like a local wifi room number, e.g. If other applications use the same 8080 number, you cannot use it because it is duplicated, so you need to change it to another number.

#### Sync Host (Local)

You can change the number of the server host to be used locally. This is needed to enter the correct IP address if the auto-detected IP address is wrong. If you set the wrong IP address, you will not be able to access the server, so do not enter anything unless you want to. (Do NOT enter the Tailscale host here.)


### Console mode

I developed a new console mode for local Anki server. <br>

This mode can be used by selecting Console mode in the window that pops up when you launch the add-on. (it will not start if the local server is already running.)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/08.png)


1. The server is displayed and closed using the console. A black window will be displayed, like the Anki launcher.
2. The server will continue to run until the console window is closed. To close the server please press Ctrl+C or use addon menu action. (closing the window with the X button will force close, not recommended.)
3. If Cancel, start the server without the console (as before).
 This old mode has a bit of a bug, so server may not be closed from add-on. (if so please close it from Task Manager or restart your laptop.)

Q. Why console mode? <br>

* Anki's built-in server is designed to be launched from the console by developers, so using the console is closer to the intended use.
* It seems that the console must be displayed in order to close using Ctrl+C, if it is hidden keys will no longer be entered. (Forced termination is probably possible but not recommended.)

<br>

Others <br>

* You can check whether the server is closed or not by displaying the console, if the path is displayed it is closed. Like this:

* ![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/09.png)

* If startup fails it will start up without a console.
* If you are not synchronizing you can probably close the console directly with the X button without any problems, but I think it is safer to close it with Ctrl+C or the add-on menu action.
* If the console cannot be closed by pressing Ctrl+C, close it by clicking the X button when it is not sync. (e.g. Close Anki for desktop and AnkiMobile so that they cannot sync, then close the console.)


 <br>

Q. What are the disadvantages of console mode? <br>

* Users may be startled when the black console is displayed.
* It can be a little dangerous if users accidentally press the X button during sync.
* Depending on the PC, it may not be possible to start the console.

 <br>


Q. Are there any problems with using it without a console?<br>

* There is a high possibility that the server will fail to close.
* The server should start up and be usable even if you run it without a console. If you don't have a console, it's just inconvenient to reflect changes in Settings.
* e.g. even if you change your username or password, the changes won't be reflected until you close the server in Task Manager or restart your laptop.
* If you don't use Settings at all I think it's fine not to have a console, the local server will continue to run in the background until you shut down your laptop.



### Custom 02

I added some new options.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/07.png)


1. Enable Auto Close
    * try close server when Anki close. This option is disabled by default in the latest version of the add-on.
1. Try auto restart Server after change settigs
    * By default, the server will auto restart when Settings are changed. Disabling this will skip that action.
1. Auto startup Server
    * Auto start server when Anki is launched. If the server is already running, do nothing.




### Users tab

You can add users to be used on the server.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/04.png)

 It is needed if you want to use multiple profiles and accounts, at the moment up to 7 users can be added. When you add a user, a new folder will be created in the Sync Base Path. To change the username and password, please read [Custom Sync Base Path](#custom-sync-base-path).


### Online Tab

This option is for accessing your home wifi from outsid, if you want to use it only with local Wifi you don't need to setup it. If the server is not working locally yet this option will not work so please make sure the server is working with your local wifi first. I recommend Tailscale because it is very easy to get a host.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/local-anki-server/02.png)


#### Why Tailscale?

Basically to access your home wifi from outside safely and securely you need to configure various advanced settings (VPN, Virtual Private Network). Because if you simply open your wifi to the public as it is there is a risk of unauthorized access.

Tailscale is a popular service that automatically sets up almost all of these configurations and makes it easy to securely connect to your home wifi (Free). This service is mentioned briefly in the AnkiManual and occasionally in the Anki subreddit. If you want to know more about how it works and how secure it is please search for it on Google.

#### How to set up a VPN online with Tailscale?
   1. Sign up for a <a href="https://tailscale.com/pricing/">free Tailscale plan</a>. (Personal $0 Free forever)
   2. Download the Tailscale app to your laptop and mobile and authenticate each.
   3. Copy the address of your laptop from the <a href="https://login.tailscale.com/admin/">Tailscale admin page.</a>
       (e.g. 100.x.x.x, or laptop-user123, or laptop-user123.tailnet-name.ts.net, etc.)
   4. Enter the address in the Sync Host option of this add-on.

#### Notes

1. I cannot provide support on how to use Tailscale. Please contact them directly or search the Tailscale community and ask them.
1. This option is there to make the server URL easier to read, so if you already know the exact URL you can use the server without entering this option, because the laptop already has access to the local wifi.
1. Tailscale uses the free and open source WireGuard, so maybe advanced users can connect using WireGuard instead of Tailscale.
1. Tailscale's cheapest free plan (free forever) is sufficient for individuals so be careful not to sign up for a paid plan for groups by mistake. (it's on the leftmost side of the page)


### Documents

AnkiManual explains how to use the server built into Anki. If you want to use the server without this add-on, or if you want to know more about it and what to expect when using it, please read them.

1. <a href="https://docs.ankiweb.net/sync-server.html">(AnkiManual)  Self-Hosted Sync Server</a></a>
1. <a href="https://faqs.ankiweb.net/are-there-limits-on-file-sizes-on-ankiweb.html">
    (Anki FAQ) Are there limits on file sizes on AnkiWeb?</a>
2. <a href="https://github.com/ankitects/anki/tree/main/docs/syncserver">(For Developers) Building and running Anki sync server in Docker</a>


#### Info for developer

If you want to read the debug info of the server please display the console when you start Anki. e.g. Windows -> [anki-console.bat](https://docs.ankiweb.net/platform/windows/startup-issues.html?highlight=console#debugging)

<br><br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  1. <a href="https://ankiweb.net/shared/review/49665391" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development.
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/add-on-support-local-anki-server-use-self-hosted-server-with-wifi-by-shige/61424" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.



<br><br><br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on, I'm Shigeඞ! I'm looking for supporters for my add-ons development, because I like Anki! So far I fixed and customized 60+ discontinued add-ons and created 30+ new add-ons. If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month). If you have any ideas or requests feel free to send them to me, thanks! :D


[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>


**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 453 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/59869739.png">Muneeb Khan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162534376.png">Hoang Hung <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78520348.png">only <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10124363.png">Sameer Al <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49440163.png">Jeanna <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79973078.png">J P <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/136301102.png">K <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/118400646.png">Cole Krueger <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/9986622.png">Wei <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/109655478.png">Sean Voiers <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11209375.png">Robert Malone <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/135355652.png">Jk <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/157766503.png">Andrew Yang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42357230.png">CunningPotato <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144288699.png">Aayush Bhatawadekar <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143557848.png">Stellate ggl <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166334352.png">Cubli <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146713512.png">a x07 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/93806908.png">Tina Weingarten <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/132329777.png">Victor Evangelista <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142510183.png">Adrine <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/102120950.png">Oleksandr Pashchenko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/97140314.png">Vivian Cao <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141043766.png">Osasere Osula  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)

<br><br>

## 📥 How do I install this add-on?
1. Copy and paste the add-on code ( `49665391` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
2. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
3. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/49665391)


**[AnkiWeb Page](https://ankiweb.net/shared/info/49665391) | Code : `49665391`**