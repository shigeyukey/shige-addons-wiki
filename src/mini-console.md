# Mini Console

🔧Mini Console - for quick add-on debug (Created by Shigeඞ)

<!-- **[AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`** -->

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

  <!-- 1. <a href="https://ankiweb.net/shared/review/🟢" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development. -->
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/simple-fix-of-broken-add-ons-for-the-latest-anki-by-shige/41650" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.



<br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on, I'm Shigeඞ! I'm looking for supporters for my add-ons development, because I like Anki! So far I fixed and customized 60+ discontinued add-ons and created 30+ new add-ons. If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month). If you have any ideas or requests feel free to send them to me, thanks! :D


[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>

<!-- 🟢 template_patreon_100.md -->


<br>

<!--
<br>

## 📥 How do I install this add-on?

1. This add-on works with Anki for desktop (it does not work on mobile). Download Anki from the [official website](https://apps.ankiweb.net/) if you haven't already.
2. Copy and paste the add-on code ( `🟢` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
3. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
4. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/🟢)
 -->





