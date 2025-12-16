# 🎂Yearly Heatmap Generator

<!--

(Not Free)🎂Yearly Heatmap Generator (Created by Shigeඞ)

 -->

<!-- Created -->
[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

<!-- 🟢 not free yet -->

Hi I'm Shigeඞ! This add-on was developed as a special thanks for the support from my patrons [($5/month)](https://www.patreon.com/Shigeyuki) so it is not yet available for free.

<!-- If you want it for free, download [this empty add-on](https://ankiweb.net/shared/info/🟡) (`🟡`) and please wait, when it becomes free I will notify you and you can install it.

<!-- Patreon: [🟡](🟡) -->

<!-- 🟢 not free yet -->

![alt text](images/yearly_heatmap_generator/00_animation.webp)

Generate all heatmaps as an image (default: 800px PNG). Colors and designs can be customized as options. You can use it when you want to share yearly learning progress or when you want to share Streeck achievements.

* **Notes:** This add-on is only for generating the heatmap image so does not have a feature to display the heatmap on Anki's Home screen. The Anki icons are used only to refer to the [official Anki](https://apps.ankiweb.net/) ([Anki License](https://github.com/ankitects/anki/blob/main/LICENSE)), so this add-on is not related to the official Anki.



# How to use

You can generate and preview images from the Tools add-on menu.
* AnkiMenu -> Tools ->  Yearly Heatmap Generator -> Show Heatmap Image


## Heatmap Viewer

![alt text](images/yearly_heatmap_generator/11.png)

1. **Reload**
    * Recalculate reviews and options and regenerate images.
2. **Open Image Folder**
    * Open the user folder where generated images are saved. When you regenerate new images, old images are automatically deleted.
3. **Option**
    * Open the add-on's options window.
4. **Copy Image to Clipboard**
    * Copy the previewed image to the clipboard. This copied image supports only the PNG file format.
    * You can also copy the image by right click.
5. **Copy Path**
    * Copies the file path of the saved image to the clipboard.



## Review Data Text

 * **Title Text**
    * Displays the total review count, time, and streak for all periods.
    * Display the Anki icon on the left. This icon can be changed in the options.
* **Year Text**
    * Display the total reviews, time, and days studied per year below the heatmap.




## Option

Pressing the Save button will save options and then quickly generate or regenerate the image.

### theme tab

![alt text](images/yearly_heatmap_generator/12.png)


* **Now Color**
    * Change the current heatmap color theme.
    * Themes: limeGreen, iceBlue, magenta, flameRed, oliveGreen, lavenderPurple, grapePurple, sakuraPink, amberOrange, rainbow
        * Themes: <span style="color:limegreen;">limeGreen</span>, <span style="color:#b3e6ff;">iceBlue</span>, <span style="color:magenta;">magenta</span>, <span style="color:#ff4500;">flameRed</span>, <span style="color:olivedrab;">oliveGreen</span>, <span style="color:#b57edc;">lavenderPurple</span>, <span style="color:#6f2da8;">grapePurple</span>, <span style="color:#ffb7c5;">sakuraPink</span>, <span style="color:orange;">amberOrange</span>, <span style="background:linear-gradient(90deg,red,orange,yellow,green,blue,indigo,violet);-webkit-background-clip:text;color:transparent;">rainbow</span>

* **Dark Mode**
    * Switch between dark mode and light mode for generated heatmaps and text.
    * Auto_mode uses the current Anki settings.
* **Anki Icon**
    * Change the displayed Anki icon.
    * Icons: Anki for desktop, AnkiMobile, AnkiDroid, Anki-tan
    * ![alt text](images/yearly_heatmap_generator/15.png)
    * These icons are used only for the purpose of referring to Anki (except Anki-tan★) and this add-on is not related to the official Anki. (URL: [Official Anki](https://apps.ankiweb.net/), [AnkiMobile](https://itunes.apple.com/us/app/ankimobile-flashcards/id373493387), [AnkiDroid](https://play.google.com/store/apps/details?id=com.ichi2.anki))

* **Font Name**
    * Change the font type of the text.
    * Font type: Arial, Alpha54, Squares, Young_Serif, m6x11plus
    * These fonts are included in the add-on. (except Arial)
    * ![alt text](images/yearly_heatmap_generator/17.png)
* **Background Image**
    * Change the background image of the heatmap.
    * None hides the image. (Dark-mode: Gray, Light-mode: White)

### Date tab

The options on this tab are for date calculations.

![alt text](images/yearly_heatmap_generator/13.png)

* **Max Heatmapo (display)**
    * Maximum number of heatmaps to display. e.g.
    * ![alt text](images/yearly_heatmap_generator/16.png)
    * auto_mode: Show all heatmaps. (default)
    * This option only hides the heatmap, so reviews for hidden heatmaps are still calculated and included in the total score calculation.

* **Paint Start Year (display)**
    * Specify the year to start displaying the heatmap.
    * This option only hides the heatmap so hidden heatmaps are still calculated.
* **Next day Start at**
    * Change the time the day begins. This auto fetches Anki settings so basically you don't need to change it.
* **Enable Limit Start Date (calculate)**
    * Specify the date to start calculating heatmaps and scores. Data prior to this date will not be fully calculated.

### Size tab

![alt text](images/yearly_heatmap_generator/14.png)

* **Save image format**
  * Change the format of the image to be saved.
  1. **Png** (default) : A common image format. It has large file sizes but high quality.
  2. **Jpg** : A common image format. It has smaller file sizes but is prone to quality degradation.
  3. **Webp** : A relatively new image format. It's very lightweight with high quality, but sometimes it may not be supported by apps or websites. Cannot be saved to the clipboard.

* **Image Width (px)**
  * Specify the image width in pixels.
  * The default is 800px.
  * Occasionally there may be slight variations in the value.

* **Image Aspect**
    * Change the image aspect ratio. e.g.
    * ![alt text](images/yearly_heatmap_generator/18.png)
    1. auto_mode
        * Auto mode combines all heatmaps into a single image.
        * A single heatmap results in a shorter image.
        * If there are many heatmaps, the image will become very long.
    * Other
      * Other sizes will fix the image aspect ratio.
      * If there are too many heatmaps to fit into a single image, a second or third image will be generated.
      2. square_1_1
      3. portrait_4_5
      4. vertical_9_16
      5. wide_1_91_1
      6. landscape_16_9
      7. portrait_2_3



## Credit

* The code for this add-on was newly written to optimize image generation and to study Anki's database mechanisms, so there are almost no direct code references. But inspired by [Thore Tyborski's](https://github.com/ThoreBor) [Anki Leaderboard](https://github.com/ThoreBor/Anki_Leaderboard) and [Glutanimate's](https://glutanimate.com/support-my-work/) [Review heatmap](https://ankiweb.net/shared/info/1771074083).
* The icons used are the official Anki icons. ([Anki License](https://github.com/ankitects/anki/blob/main/LICENSE)) (Me and my add-on are not related to the official Anki.)
* The background images use images licensed under the [Unsplash License.](https://unsplash.com/license)
* [Anki-tan](https://shigeyukey.github.io/shige-addons-wiki/Anki-tan.html) is an unofficial mascot character I drew (CC4, not related to the official Anki).




## Notes

* This add-on is only for generating the heatmap image so does not have a feature to display the heatmap on Anki's Home screen.
* Only year display is supported, month display is not supported.
* Since it is an image, there is no tooltip function to display the review scores from the heatmap.



<!-- ## Change log -->








<br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on I'm Shigeඞ!
1. \[ 🛠️Fix add-ons ] So far I fixed and customized 80+ broken add-ons for free and developed over 30 add-ons as a hobby ([all add-ons](https://ankiweb.net/shared/addons?search=Please%20Support%20Shige%27s%20Anki%20add-ons%20development&sort=rating)). If you have requests to fix broken add-ons feel free to contact me. [Fix broken addons (Free)](https://new.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/)
2. \[ 💖Donation ] I'm looking for supporters for my add-ons development because I like Anki!👍️ If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month).

[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>



**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 574 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162534376.png">Hoang Hung <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/59869739.png">Muneeb Khan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/168190678.png">Zarina Balde <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10124363.png">Sameer Al <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/97140314.png">Vivian Cao <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42811030.png">Pansanity <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/178158467.png">Terence Bartenbach <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/177444844.png">R Rebecca <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14264429.png">alpha male, shredded af <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/172695991.png">Dennis Obis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/174231223.png">Will S. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41862266.png">Anh-Tai Nguyen <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/173469460.png">Devon Williams <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42281625.png">alex han <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/167783263.png">Joseph Howell <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160198617.png">Simeon <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78520348.png">only <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176883675.png">Kevin Galvez <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160278267.png">Kmyungc <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176596314.png">Meeyah Davis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11577204.png">Eric Allen <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176573965.png">Andrew Yick <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176726523.png">Robert Remedios <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54558577.png">Marley Easterbrook <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)