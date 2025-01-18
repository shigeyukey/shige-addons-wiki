# 📥Addon Bug Detector - Save and Load Enable Add-ons

[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

<!-- ### [AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`
**[AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`** -->



This add-on saves and restores currently enabled add-ons (Enable or Disabled). And it has a feature to semi-automatically detect an add-on that is causing the problem. This add-on saves only Enable and Disable, so it does not save the settings (config) of each add-ons.


![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/01.png)


- [📥Addon Bug Detector - Save and Load Enable Add-ons](#addon-bug-detector---save-and-load-enable-add-ons)
  - [How to use](#how-to-use)
    - [📥Save and Load](#save-and-load)
    - [Addon Bug Detector Mode](#addon-bug-detector-mode)
    - [Exception add-ons](#exception-add-ons)
      - [⛔Add Except](#add-except)
    - [Bottom buttons](#bottom-buttons)
    - [🚨Report](#report)



## How to use

You can use it from Tools.
* Tools -> 📥Save and Load Enable Add-ons


### 📥Save and Load

You can save and load currently enabled add-ons.

![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/08.png)

1. **📤Load:** Load a saved data. Restart is required to activate add-ons.
2. **📥Save:** Save the currently enabled add-ons.
3. **🖌️Rename:** Rename the saved data. The default name is date + number of enabled add-ons.
4. **📝EditData:** You can manually edit the saved data. Checked add-ons are saved add-ons. After editing, press the Save button.
     ![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/07.png)
5. **🗑️Delete:** Delete selected saved data.

<br>

### Addon Bug Detector Mode

It has a feature to semi-automatically detect an add-on that is causing the problem.

This feature can be used for these purposes:

1. Identify an add-on that is causing a bug
1. Identify an add-on that is causing Anki delays
1. Identify an add-on of unknown name

![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/05.png)


Here's the procedure

1. Half of the Add-ons will be automatically disabled.
1. Restart Anki.
1. Check if the problem is reproduced.
1. Press the button on the pop-up that shows up automatically (Reproducible or Not Reproducible)
1. Half of the remaining add-ons will be automatically disabled. Restart Anki.
1. Repeat these steps until the problem add-on is identified. (about 6-8 times)


Click on "Addon Bug Detector Mode" to start.

![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/02.png)

Press Yes to disable half of the add-ons and restart Anki. A popup will show up automatically, check if you can reproduce the problem. If you can reproduce the problem, press Reproducible. If you cannot reproduce the problem, press Not Reproducible.

![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/03.png)

Press the button to disable half of the add-ons again and restart Anki.

If AnkiRestart is installed, a popup will be shown for restarting Anki automatically. (If not, restart Anki manually)  Add-on: [🔂AnkiRestart](https://ankiweb.net/shared/info/237169833)


![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/04.png)

Repeat this 6-8 times to detect the add-on that is causing the problem. When detection is complete the name of the add-on is displayed.




Finally, restarting Anki will restore the add-ons pre-detection state.

If Cancel is pressed during the process, the detection is terminated and add-ons is restored to the state below.

**🚨Note:** In these cases the problem may not be detected.
1. The reproducible button is pressed incorrectly.
2. There are two or more add-ons causing the problem.
3. The problem is caused by the interference of multiple add-ons.

<br>

### Exception add-ons

Add-ons needed for debugging are excluded from the save list and always enabled. (Otherwise it would be impossible to restart, restore the add-ons state, or identify the problem.)

![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/06.png)

 By default these add-ons are included (Even if these are not installed the add-on will work.):

1. This add-on (Addon Bug Detector)
2. [🔂AnkiRestart](https://ankiweb.net/shared/info/237169833)
3. [🐞Custom Debug Info](https://ankiweb.net/shared/info/1616945135)
4. [⚙️Meta json Formatter](https://ankiweb.net/shared/info/1984416286)
5. [AnkiWebView Inspector](https://ankiweb.net/shared/info/31746032)
6. [add-on dialog search/filter bar](https://ankiweb.net/shared/info/561945101)


#### ⛔Add Except

This exception list can be edited manually. After editing, press the Save button.

![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/10.png)

### Bottom buttons

![alt text](https://raw.githubusercontent.com/shigeyukey/shige-addons-wiki/refs/heads/main/src/images/save_and_enable/09.png)

1. **⚙️Add-ons:** Open the native Anki Add-ons dialog. (Tools -> Add-ons)
2. **🔁Restart:** If AnkiRestart is installed, restart Anki.
3. **❌️Close:** Close the window.

<br>

### 🚨Report

If you have any problems or requests feel free to send them to me.

  <!-- 1. <a href="https://ankiweb.net/shared/review/🟢" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development. -->
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/simple-fix-of-broken-add-ons-for-the-latest-anki-by-shige/41650" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.


<br><br><br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hello thank you for using this add-on, I'm Shigeඞ! I development of Anki add-ons for [Gamification of learning](https://www.youtube.com/@shigeyuki5397/videos) and so far [I fixed 50+ broken add-ons (Free).]((https://new.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/)) If you support my volunteer development on Patreon you can download all Patrons only add-ons. ($5/month)

[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>


**\[ Special Thanks ]** <br>
 So far I received donations from 266 patrons and without their support I never could develop this and release for free, thank you very much!🙏<br><br>
  **Patrons:** *Arthur Bookstein, Haruka, Luis Alberto, Letona Quispe, GP O'Byrne, Tobias Klös, 07951350313540, Lily, Ernest Chan, Daniel Kohl-Fink, Tim, Kurt Grabow, Kyle Mondlak, Jesse Asiedu, NamelessGO, Fahim Shaik, ElAnki, Tae Lee, Ashok Rajpurohit, Jake Stucki, Gabriel Vinicio Guedes, Douglas Beeman, Ketan Pal, NoirHassassin, KM, Haley Schwarz, Jk, Cole Krueger, K, Abhi S, Robert Malone, Wei, Tyler Schulte, Jonathan Contreras, Morgan Torres, Keeler Kime, Sean Voiers, Adrine, Oleksandr Pashchenko, Matthew Hartford, ellie, Augusto Stein, Alba Grecia Suárez Recuay, 龍星 武田, Alex D, oiuhroiehg, Aaron Buckley, Osasere Osula, Isabel Guan, Stellate ggl, Aurora Dzurko, Aayush Bhatawadekar, tarek, adam Katz, K, iuventius, Renoaldo Costa Silva Junior, Felipe Dias, Patrick ellis, thunderdunk, Victor Evangelista, Tarek Bouamoud, Robert Wiebalck, Klara Spring, Raffaele Russo, Corentin, Yitzhak Bar Geva, Muneeb Khan, Jason Liu, Hikori, Lê Hoàng Phúc, anonymous, Tobias Günther, mootcourt, Michael Pekala, Sneed100, Izz Aryan, Jeanna, J P, Juan Salgado, Ansel Ng, Azfar Hussain, Moritz Bluhm, Maik C., sab hoque, Jordan Garnier, Matt LeRoux, Ricardo Escobar, Daniel Valcárcel Málaga, Lerner Alcala, Divyang Golani, Blake, J, Chanho Youne, Foxy_null, Rogelio Rojas, Bunion Bandit, ifjymk, Melchior Schilling, Адріан Недбайло, 철수 박* [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)




<!-- ## 📥 How do I install this add-on?
1. Copy and paste the add-on code ( `🟢` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
2. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
3. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/🟢) -->