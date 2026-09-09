# 🎞️Embed Video for Anki

**[AnkiWeb Page](https://ankiweb.net/shared/info/1614658689) | Code : `1614658689`**

<!-- 

🎞️Embed Video for Anki (Created by Shigeඞ)


contact
https://shigeyukey.github.io/shige-addons-wiki/contact.html

https://shigeyukey.github.io/shige-addons-wiki/images/

 -->

<!-- Created -->
[![reddit](https://shigeyukey.github.io/shige-addons-wiki/images/_template/created_by_shige.webp)](https://www.reddit.com/user/Shige-yuki)

This add-on automatically embeds existing videos into Anki cards. This allows you to display a small video within the card without popping up the video player. (Video size: 240p, 426px wide).

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/embed-video/00.png)

This embedded video is for display purposes only and the add-on does not directly change the card content or templates, so if you disable the add-on the video display will revert to its original state.

## How to use

Once installed the add-on will run automatically so you don't need to configure it unless needed.

When you launch Anki, this add-on searches your media folder for .mp4 video files and automatically generates small embedded videos. The generated videos are saved locally in the add-on folder, and these videos will not put a strain on your AnkiWeb server (deck sync).

```
[sound:Example.mp4] -> Example.webm (display only)
```

If video conversion is too slow or fails, please install ffmpeg on your PC. If ffmpeg is already installed and available on your PC the add-on will auto use ffmpeg to convert the video as quickly as possible.

If you don't know how to install FFmpeg please use this my add-on.
* addon: [FFmpeg Downloader for Anki (by Shigeඞ)](https://ankiweb.net/shared/info/1652323034)


If there are multiple videos or audio tracks, the embedded video will not autoplay because the audio tracks would overlap.

The embedded video will not be displayed while the video is still being generated, instead the MPV video player will pop up as usual. In this case please check the progress using the "Convert Video" option.

The video quality has been intentionally set to low for faster conversion. You can select high quality using the options, but in that case conversion may take 10 minutes or more. (depending on the video's length.)


## Options

### Menu Actions

* **Convert Videos**
  * Opens a window that displays the video conversion status. You can check conversions running in the background or start a conversion manually.
* **Options**
  * Opens the Options window.
* **Enable add-on**
  * Quickly enable or disable the add-on’s features. Turning it OFF returns you to the mode where the standard MPV player pops up.


### Option tab

* **Auto Convert**
  * The add-on automatically converts videos in the background.
* **Video Position**
  * You can choose to place the embedded video at the top or bottom of the card.
* **Video Size**
  * Change the size of the video displayed on Anki cards.

### Video Convert tab (Advanced)

You can configure advanced settings for video conversion. If not necessary, you do not need to adjust these settings.

* **Convert mode**
  * Select the tool for converting videos.
  * **auto:** Selects automatically.
  * **mpv:** Converts videos using the mpv player used by Anki. This method is slightly slower.
  * **ffmpeg:** Uses ffmpeg if it is installed on your PC. This is the fastest option.
* **Codec**
  * Select a method for converting .webm files.
  * **av1:** High compression but slow.
  * **vp9:** Middle
  * **vp8:** Fast but the file size is a little large.
* **Scale** Select a video size.
* **CRF:** Select quality.
* **Frame rate:** Select the video smoothness.

If you want to regenerate videos that have already been generated, please manually delete the generated video files located in the user_files folder within the add-on folder. 



<br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  1. <a href="https://ankiweb.net/shared/review/1614658689" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development.
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/simple-fix-of-broken-add-ons-for-the-latest-anki-by-shige/41650" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.


<br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on I'm Shigeඞ!
1. \[ 🛠️Fix add-ons ] So far I fixed and customized 80+ broken add-ons for free and developed over 30 add-ons as a hobby ([all add-ons](https://ankiweb.net/shared/addons?search=Please%20Support%20Shige%27s%20Anki%20add-ons%20development&sort=rating)). If you have requests to fix broken add-ons feel free to contact me. [Fix broken addons (Free)](https://new.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/)
2. \[ 💖Donation ] I'm looking for supporters for my add-ons development because I like Anki!👍️ If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month).

[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>

<!-- 🟢 template_patreon_100.md -->
**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 754 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">LetoPath <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">— <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/178158467.png">Terence Bartenbach <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162534376.png">Hoang Hung <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/97140314.png">Vivian Cao <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42811030.png">Pansanity <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/174231223.png">Will S. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41862266.png">Anh-Tai Nguyen <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/173469460.png">Devon Williams <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160278267.png">Kmyungc <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176596314.png">Meeyah Davis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11577204.png">Eric Allen <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176573965.png">Andrew Yick <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176726523.png">Robert Remedios <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/181866190.png">Seth Stidham <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123413490.png">Miguel Dittrich <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45359542.png">Kyle Anthony <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/168190678.png">Zarina Balde <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126441127.png">Ali Abid <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/13924062.png">Katherine Geromini <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/29064954.png">Looptime IsAble <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22355573.png">Hussain Almoumen <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/188420041.png">Subhash Gutti <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84058134.png">lionheart3003 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP & Chamin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/167783263.png">Joseph Howell <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/189901825.png">Niiick <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72136503.png">Lelia Belle Houbé <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/190064239.png">尘 北冥 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">Kevin M <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/125050487.png">Nabeel Elhaj <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/15802862.png">Jack  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/188730045.png">ivy tian <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/189829818.png">Zuhair <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/190683938.png">Brandon Anamah <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11293797.png">Yashar Hadi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/189317087.png">Justin Magda <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/46000818.png">Celeste Achatz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20700889.png">Jolene Galbreath <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/104941271.png">Franz Enkerlin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/193338429.png">Walter Rusin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/180508798.png">Marlee Davis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/50927470.png">Kurtresha Worden <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/194988590.png">Anjali Nallaveettil <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/184379839.png">Samuel Habib <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/101409002.png">Audreylyn Shannon <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11326532.png">sarah <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/56125567.png">Efrain Garcia Fonseca <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/81473257.png">Daniel del Risco <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164502265.png">Eddie Le <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/59869739.png">Muneeb Khan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/567467.png">Brett Sanders <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10124363.png">Sameer Al <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/185531551.png">Lisa Kirby <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/176822997.png">Pneumaniac 1  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)



<br>

## 📥 How do I install this add-on?

1. This add-on works with Anki for desktop (it does not work on mobile). Download Anki from the [official website](https://apps.ankiweb.net/) if you haven't already.
2. Copy and paste the add-on code ( `1614658689` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
3. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
4. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/1614658689)

