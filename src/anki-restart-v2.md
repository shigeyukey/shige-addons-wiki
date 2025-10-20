# 🔂AnkiRestart V2


🔂AnkiRestart V2 - Quick Anki Rebooter (Created by Shigeඞ)

**[AnkiWeb Page](https://ankiweb.net/shared/info/1766024579) | Code : `1766024579`**

<!-- Created -->
[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

Quick Restart Anki. This is an improved beta version of the old AnkiRestart, it use only the add-on to restart, not external files.

This V2 is a new prototype developed for some users who are not able to restart, so if old V1 is already working fine on your device you can use either add-on.

## How to use

These features are available:

1. Added Restart button and Menu (Shortcut: `Ctrl+Shift+R`)
2. Pop up restart dialog when updating add-ons

Installing the add-on will add an icon to the Anki menu bar. Clicking on this icon will quickly restart Anki. MacOS cannot display the icon here, so it will be displayed in the system tray instead. Blue is a normal restart, and red is an optional safe mode restart (default disabled).

* Anki Home -> Restart icon (Blue)
* Anki Home -> tools -> AnkiRestartV2 -> Restart Anki now


![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/ankiRestartV2/03.png)

## Settings


Settings can be accessed from the Add-on menu or the add-ons dialog.

* Anki Home -> tools -> AnkiRestartV2 -> Swttings
* Anki Home -> tools -> Add-ons -> AnkiRestartV2 -> Confing


![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/ankiRestartV2/00.png)


### Custom Anki Path

If the restart has already succeeded there is no need to change this option. To restart Anki the path to the Anki executable file is required (win:anki.exe, Mac:anki.app, Linux:anki). If the auto detected Anki path is incorrect you will need to set it manually.



## Options


### Trigger restart when add-ons are updated

When add-ons are updated Anki needs to be restarted. This option displays a pop-up window to restart Anki when add-ons are updated (it is enabled by default). e.g.
1. When Anki is launched and add-ons are updated.
2. When add-ons are updated from the Add-ons dialog.


### Show restart button in menu bar

Show or hide the buttons displayed on Anki's Home menu bar.

### Sound Effect

Enable or disable a sound when restarting.

### Disable auto sync when restarting

Anki's auto sync takes a little time. When restarting frequently sync is not needed, so this add-on disabled and restore Anki's auto sync option only when restarting. This option disabled this feature.

* ON: Save auto sync option -> Disabled auto sync -> Restart Anki -> Restore auto sync otion
* OFF: Nothing


### Short cut key

You can change the shortcut key for restarting Anki. The shortcut key will not work if it conflicts with other add-ons or Anki shortcut keys, so if the key does not work try changing it. default short cut key: `Ctrl+Shift+R`.



## Advanced tab

These are options for advanced users, there is no need to change them unless you need to.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/ankiRestartV2/01.png)

### Custom Base

Anki allows you to specify the path to the file containing the user profile when it starts up. If you restart Anki as is, this path will not be used. If you set a path for this option, you can use that path to start up when you restart.
 For more info please read the Anki Manual:

* AnkiManual: [Startup Options](https://docs.ankiweb.net/files.html#startup-options)

### Safe mode

This new safe mode disables all add-ons except AnkiRestart and then restart. Disabled add-ons will be enabled after restarting, so restarting again will restore the original state. This option is disabled by default.

* Action: Trigger Safe Mode Restart -> Save All addons data -> disables all add-ons except AnkiRestart -> Run Restart (Close Anki) -> Open new Anki -> Enable all save add-ons


### Show safe mode restart button

Enabling this will display a menu and button to restart in safe mode. (Red icon)

### Use real safe mode

This mode manually disables add-ons, so it is not [Anki's default safe mode](https://docs.ankiweb.net/troubleshooting.html#2-check-add-ons). Enabling this option will restart Anki in its native safe mode. In this case, AnkiRestart will also be disabled.

* Action: Trigger Real Safe Mode Restart -> Run Restart (Close Anki) -> Open new Anki + safe mode (as holding down the Shift key while starting Anki)

### Delay Restart Second

* This add-on waits a few seconds when restarting Anki. It probably works even with 0 seconds, but I set it to 3 seconds just to be safe.

* 🚨NOTE: This timer uses subprocess.Popen's shell=True (Win: timeout /T, MacOS/Linux: sleep). If you are concerned about security setting it to 0 seconds will disable it.
  * time 1+ sec : `subprocess.Popen(cmd, shell=True)`
  * time 0 sec : `subprocess.Popen(popen_args)`
  * If there are unknown characters in the path used in cmd, or if the path does not exist, the timer and shell will be automatically disabled.


## V3 tab

### Anki Restart V3

This is a new restart option for the prototype. AnkiRestart V2 sometimes fails, this V3 restarts Anki more reliably. To use this feature you need Anki's new launcher (Anki 25.07+).

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/ankiRestartV2/05.png)

#### Mechanism

Launch Python using the Anki launcher then start the mini app (window). This mini app communicates with Anki and waits until Anki closes, once Anki has completely closed launch a new instance of Anki then the mini app will auto close. (this mechanism is an improved version of AnkiRestart V1.)


#### Note

It may not launch properly on some devices, if so please contact me.


## FAQ

#### Q. Why use such an add-on just to restart?

* Anki will forcefully terminate the new Anki for data safety when it tries to start up duplicately, so if you have a lot of add-ons or large decks it may take time for Anki to terminate and may loop. This add-on restarts after Anki terminates so you can restart in once.
* ![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/ankiRestartV2/04.png)

* e.g.: Close Anki01 and Open Anki02 -> Anki02:"Ank01 is still open please try again" -> Close Anki02 and open Anki03 -> Anki03: "Anki02 is still open please try again" -> Close Anki03 and open Anki04 -> Anki04: "Anki03 is still open please try again" -> ...


#### Q. What is the difference between V1 and V2?

 * This version restarts Anki using only the add-on without using external files, so there is no problem with misdetection by antivirus software. I also fixed some bugs, enhanced features, and optimized the code.

#### Q. What is Safe Mode used for?

* When a bug occurs checking whether the cause is an add-on or native Anki.
* Sometimes you want to use native Anki.

#### Q. Why is an add-on needed to restart?

* Some add-ons require a restart after changing the config.
* In my add-on development Anki is restarted frequently.

#### Q. Why does the timer use “shell=True”?
* The timer to delay restarting needs to be executed after Anki closes. But if we use a timer within Anki’s program, Anki won’t close until the timer ends. Shell timers can be executed after Anki closes.
* The latest Anki launcher may have another workaround, but it’s still under development.


<br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  1. <a href="https://ankiweb.net/shared/review/1766024579" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development.
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/simple-fix-of-broken-add-ons-for-the-latest-anki-by-shige/41650" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.


<br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on, I'm Shigeඞ! I'm looking for supporters for my add-ons development, because I like Anki! So far I fixed and customized 60+ discontinued add-ons and created 30+ new add-ons. If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month). If you have any ideas or requests feel free to send them to me, thanks! :D


[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>


**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 444 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/59869739.png">Muneeb Khan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162534376.png">Hoang Hung <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78520348.png">only <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10124363.png">Sameer Al <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49440163.png">Jeanna <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79973078.png">J P <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/136301102.png">K <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/118400646.png">Cole Krueger <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/9986622.png">Wei <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/109655478.png">Sean Voiers <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11209375.png">Robert Malone <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/135355652.png">Jk <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/157766503.png">Andrew Yang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42357230.png">CunningPotato <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144288699.png">Aayush Bhatawadekar <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143557848.png">Stellate ggl <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166334352.png">Cubli <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/93806908.png">Tina Weingarten <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/132329777.png">Victor Evangelista <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142510183.png">Adrine <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/102120950.png">Oleksandr Pashchenko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/97140314.png">Vivian Cao <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141043766.png">Osasere Osula <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/159172027.png">Kylie  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)



<br>

## 📥 How do I install this add-on?

1. This add-on works with Anki for desktop (it does not work on mobile). Download Anki from the [official website](https://apps.ankiweb.net/) if you haven't already.
2. Copy and paste the add-on code ( `1766024579` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
3. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
4. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/1766024579)
