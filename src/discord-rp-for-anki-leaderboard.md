# 📱Discord RP for Anki Leaderboard


**[AnkiWeb Page](https://ankiweb.net/shared/info/978245457) | Code : `978245457`** 


<!--
📱Discord RP for Anki Leaderboard (Created by Shigeඞ)
978245457
-->

<!-- Created -->
[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

Use RP (Rich Presence, activity status) in Discord for desktop to display your [Anki leaderboard](https://ankiweb.net/shared/info/175794613) scores in Discord in real time (score display only, no direct communication with the leaderboard). The status updates every 15 seconds and the icon display changes based on reviews, time, etc. This add-on is not related to the official Discord or the official Anki.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/05.png)


# How to use

1. Need [Discord for desktop.](https://discord.com/download) (website and mobile are not supported by discord RP.)
2. Activity sharing needs to be enabled in [Discord's activity privacy settings.](https://support.discord.com/hc/en-us/articles/7931156448919-Activity-Sharing-on-Discord-FAQ#h_01HTJA8QV5H72HKXSNDXME2NAS) (also it will not be displayed when your Discord status is set to invisible.)
3. Auto launches when the add-on is installed. You can customize the icon type and behavior with options.
4. If you are using the add-on leaderboard, the league name will be displayed, and a button to open the User Info page on the website leaderboard will display. (this button can be disabled optionally.)

<br>

## Options

Click the Discord icon in the top toolbar to open the add-on options (or the tool's add-on menu). This icon will be colored when connected successfully and gray when not connected.


![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/01.png)


## Connect tab

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/02.png)


You can check whether the connection was successful on this tab. The total connection time and the time taken to send data are displayed.

The options window continues to run in the background even when closed to communicate with Discord, to completely close it please press the shutdown button.

If an error occurs information will be displayed in the box below. (Even if an error is displayed, there is no problem if communication is successful.)


## Option tab

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/03.png)

After changing the settings, please press the SAVE button. It may take a bit of time for the changes to display on Discord.


### Large Icon

You can change the type of large images displayed on Discord. The values displayed on the icon are images, so they show approximate values for each threshold, they are not exact values.


* **today_review:** Displays the number of cards studied today.


![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/07.png)<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/12.png)


* **study_time:** Today's study time is displayed. This time represents the time spent reviewing cards, the same as in Anki and the leaderboard, not the time Anki was open.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/06.png)<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/13.png)


* **streaks:** Streaks displays trees and the number of days.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/08.png)<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/14.png)

* **review_31days:** Displays the average number of cards reviewed in the last 31 days.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/09.png)<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/15.png)


* **review_31days:** Displays the percentage of today's reviewed cards out of the past 31 days' reviews. (e.g. today 341cards ÷ 31day 672cards /day = 50%)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/10.png)<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/16.png)


* **League:** The icons change to 4 different types depending on the league. To use this feature, you need to be already syncing using the add-on [Anki leaderboard](https://ankiweb.net/shared/info/175794613). (There is no function to identify the exact league rank.)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/11.png)<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/17.png)


This add-on does not have the function to communicate directly with the leaderboard so it does not affect your leaderboard score. (you can use it even if you are not registered on the leaderboard.)



* **Others:** You can change the icon to other Anki icons. These do not have the feature to change based on score.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/18.png)



#### Small Icon

You can change or hide the type of small image displayed in the lower-right corner of the icon. (study_time, today_review, League)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/19.png)


#### Auto Start Up

This add-on automatically runs when Anki launches and connects to Discord. You can disable it using this option.

#### Show last review time

Rich Presence status auto calculate and display the time since the card was last reviewed. You can hide this using this option.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/20.png)


#### Update rate limit

Rich Presence can update at a minimum of every 15 seconds. If you update at a faster rate your own RP display will update, but it will not be communicated so other users won't see it. (this limit by Discord)

Communication takes a bit of time, so the set seconds and actual seconds won't match exactly.

#### Show top toolbar icon

You can hide the Discord icon in the top toolbar. This option requires restarting Anki after changing it.


#### Show User Info button


This add-on displays the User Info from the [Anki leaderboard](https://ankiweb.net/shared/info/175794613) and shows the time of your last review. If you dislike these features you can disable them optionally. (this button won't display for you but only for other users)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/21.png)


#### Show cards and time in the title

The Discord username activity app title displays the number of cards and time in small text.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/22.png)


#### Hide all stats

Hide all status(stats) and display only large other icons. (Review and time icons are not displayed.) 

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/discord-rp-for-anki-leaderboard/04.png)

<br>




## Credit

1. The code for calculate scores is customized from <a href="https://github.com/ThoreBor" target="_blank">Thore Tyborski's</a> <a href="https://github.com/ThoreBor/Anki_Leaderboard" target="_blank">Anki LeaderBoard</a> code. Communication with Discord uses <a href="https://github.com/qwertyquerty/pypresence" target="_blank">pypresene</a>.
2. The idea for rich presence was inspired by the add-on <a href="https://github.com/STadas/Ankicord/" target="_blank">Ankicord </a> by <a href="https://github.com/STadas" target="_blank">STadas </a> and the add-on <a href="https://ankiweb.net/shared/info/1133851639" target="_blank">AnkiDiscord</a> by <a href="https://github.com/Monacraft" target="_blank">Monacraft</a>.
3. The illustrations for orbs, ranks, and other elements are game assets created by these creators, which I have modified and edited for use. Rank icon : <a href="https://x.com/rhosgfx" target="_blank">Rhos @RhosGFX</a>, Star icon : <a icon : a href="https://commons.wikimedia.org/wiki/File:Star_icon_stylized.svg" target="_blank">Clip Art Library</a>, ProgressBars : <a href="https://bdragon1727.itch.io/" target="_blank">BDragon1727</a>, TimeRank :<a href="https://warstellar.itch.io/fictional-military-ranks-icons-set" target="_blank"> Warstellar Interactive</a>, Tree :<a href="http://yms.main.jp" target="_blank"> Pixel Art  World</a>, Orb and Crystal : Nanamiyuki atelier.<!-- * WeatherIcons : illust-AC<br> not used yet -->
4. Some icons include <a href="https://apps.ankiweb.net" target="_blank">official Anki</a> icons.
(<a href="https://github.com/ankitects/anki/blob/main/LICENSE" target="_blank">Anki License</a>) This add-on is not related to the official Anki.
5. <a href="https://shigeyukey.github.io/shige-addons-wiki/Anki-tan.html" target="_blank">Anki-tan</a> is an unofficial meme character I created on my own and I draw the illustrations myself. (CC4, not related to the official Anki.)

## Related Add-ons

 1.  add-on : <a href="https://ankiweb.net/shared/info/933207442" target="_blank">📱AnkiCord - Discord Rich Presence (Customized by Shigeඞ)</a>
     * This add-on uses RP as well as this add-on. Since the original add-on's development has been discontinued I am maintaining it.


<br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  1. <a href="https://ankiweb.net/shared/review/978245457" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development.
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


**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 549 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/59869739.png">Muneeb Khan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162534376.png">Hoang Hung <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10124363.png">Sameer Al <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/168190678.png">Zarina Balde <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/97140314.png">Vivian Cao <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42811030.png">Pansanity <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/178158467.png">Terence Bartenbach <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/177444844.png">R Rebecca <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78520348.png">only <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14264429.png">usmc veteran, alpha male, shredded af <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/172695991.png">Dennis Obis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/174231223.png">Will S. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41862266.png">Anh-Tai Nguyen <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/173469460.png">Devon Williams <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42281625.png">alex han <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/167783263.png">Joseph Howell <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54558577.png">Marley Easterbrook <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160198617.png">Simeon <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49440163.png">Jeanna <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176883675.png">Kevin Galvez <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79973078.png">J P <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/136301102.png">K <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/118400646.png">Cole Krueger <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/9986622.png">Wei  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)


<br>



## 📥 How do I install this add-on?

1. This add-on works with Anki for desktop (it does not work on mobile). Download Anki from the [official website](https://apps.ankiweb.net/) if you haven't already.
2. Copy and paste the add-on code ( `978245457` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
3. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
4. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/978245457)



