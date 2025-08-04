# Mini Console

🔧Mini Console - for quick add-on debug (Created by Shigeඞ)

**[AnkiWeb Page](https://ankiweb.net/shared/info/35455926) | Code : `35455926`**

<!-- Created -->
[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

Pops up a mini console for displaying debug info. It's for add-ons development so not for general learners. It includes a prototype feature that utilizes part of Anki's new launcher (uv).

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/mini-console/00.png)


## How to use

Install the add-on and restart Anki to auto display the console.

## Top Toolbar

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/mini-console/03.png)

1. In Python mode displays the Python version.
1. Changes the font.
1. Enable the checkbox to keep it always on top.
1. Change the font size with the minus and plus buttons.
1. Close the window to exit.
1. Press Anki to open Anki.


## Mini Mode

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/mini-console/02.png)

You can reduce the size by dragging the bottom right corner of the window. Size and Position are auto saved and restored.

## Option1

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/mini-console/01.png)

### Option

1. Run at Start up
    * Automatically starts the console when Anki is started.
1. Disable word wrap
    * Disables word wrap for console text.
1. Open shortcut
    * Change shortcut key to open console.
1. Maximum number of lines
    * limits the text displayed in the console.
1. Reset size and position
    * Reset console position and size.


## Option2

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/mini-console/04.png)


## Python mode

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/mini-console/05.png)

This console has 2 modes, one for running within Anki and one for using Python with Anki's new launcher, this option can be switched.

### Anki Mode

* The window is displayed by Anki in the same way as normal Add-ons.
* When Anki closes, close it.
* If an error occurs in Python Mode, it will automatically change to this mode.

### Python Mode

This mode uses Anki's new uv launcher to launch Python and run the console through Python. (in short it is almost the same as running a new app.)

This feature has these advantages.

* The console will continue to run without closing even after closing Anki.
* If Anki's UI freezes while loading, the display can be refreshed.

The disadvantages are these.

* It increases the load on the PC when running. (about +70MB)
* If an unexpected error occurs, the console may not be able to be closed (since closing Anki will not close it). If so, use the task manager or activity monitor to force Python to close (or reboot the PC).

### Reconnect

* The mini console uses a socket to communicate with Anki. If communication is completely lost, a reconnect button will be displayed. Press it to reconnect to Anki.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/mini-console/06.png)


### use custom python path

* The mini console runs using the Python path from the uv that Anki launcher uses. If you are a developer and already have Python installed on your PC, you can run the mini-console by specifying the Python path instead. (this requires PyQt6.)

### Anki button

* This button launches Anki. If the auto-detected Anki path is wrong, or if you want to use a different path from the default Anki, you can specify the Anki path with this option.


## Notes

* I only checked it on Windows, not on MacOS and Linux yet.
* The output of the console can be read only after the add-ons are loaded, so info before this add-on is loaded cannot be displayed. Also info before Anki is closed cannot be displayed.
* It communicates via sockets, so it may not work if there is a communication problem. So far it works fine on my device.


## FAQ

### Q. What is a console?
* It is a tool used by developers to read feedback from Anki and add-ons. e.g. Check that the function is working properly. Look into the detailed cause of an error.
*  The console can only be displayed with the default Anki. *Writing Anki Add-ons: [Console Output](https://addon-docs.ankiweb.net/console-output.html)*


### Q. Why use this instead of the default console?

* In Add-ons development I often don't need too much detail (e.g. just one line of print to make sure it works).
* Previously I used to show or hide the console in the AnkiRetart options.
But this does not work well with the new launcher, so this is a simple workaround.
* If possible I will use this same mechanism in another add-ons, so this is a prototype.

<br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  1. <a href="https://ankiweb.net/shared/review/35455926" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development.
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
 So far I received donations from 447 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/59869739.png">Muneeb Khan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162534376.png">Hoang Hung <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78520348.png">only <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10124363.png">Sameer Al <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49440163.png">Jeanna <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79973078.png">J P <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/136301102.png">K <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/118400646.png">Cole Krueger <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/9986622.png">Wei <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/109655478.png">Sean Voiers <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11209375.png">Robert Malone <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/135355652.png">Jk <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/157766503.png">Andrew Yang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42357230.png">CunningPotato <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144288699.png">Aayush Bhatawadekar <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143557848.png">Stellate ggl <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166334352.png">Cubli <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/93806908.png">Tina Weingarten <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/132329777.png">Victor Evangelista <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142510183.png">Adrine <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/102120950.png">Oleksandr Pashchenko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/97140314.png">Vivian Cao <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141043766.png">Osasere Osula <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/159172027.png">Kylie  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)

<br>


## 📥 How do I install this add-on?

1. This add-on works with Anki for desktop (it does not work on mobile). Download Anki from the [official website](https://apps.ankiweb.net/) if you haven't already.
2. Copy and paste the add-on code ( `35455926` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
3. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
4. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/35455926)






