# Chinese Support V4

🐼Chinese Support V4 - auto fill Chinese cards (Fixed by Shigeඞ)

<!-- **[AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`** -->


<!-- Customized -->
[![banner_shigeyuki_2](https://github.com/shigeyukey/Pokemanki-Gold/assets/124401518/8408c164-e95c-4e40-98c1-393b03e04bcb)](https://www.reddit.com/user/Shige-yuki)

Auto fill fields from Chinese.

This add-on is a fixed version for Anki25.07+ of the addon <a href="https://ankiweb.net/shared/info/1752008591" target="_blank">"Chinese Support 3"</a>, originally created by <a href="https://github.com/Gustaf-C" target="_blank">Gustaf Carefall</a> and credit goes to them. *Credit: [Other Copyright and Contributors (AGPL)](#credit)*


![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/chinese-support-v4/chineseSupportV4.gif)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/chinese-support-v4/03.png)
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/chinese-support-v4/04.png)
*(These images are edited and re-uploaded from the original add-on images.)*

## How to use


To use this add-on you need to use Chinese note types. When you download the add-on a new note type will be added to Manage Note Types (Ctrl+Shift+N), so please add it by clicking on the Add button.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/chinese-support-v4/02.png)

After adding a note type select the note type in the editor and activate it with the button in the editor.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/chinese-support-v4/05.png)


## Features

*(These are edited and re-uploaded from the original add-on page.)*

- The templates can be found under 'Choose Note Type' -> 'Manage' -> 'Add'
- If you find that a field is not filling at all, please check [config.json](https://github.com/luoliyan/chinese-support-redux/blob/master/chinese/config.json) for the complete list of valid field names.


- Automatic field filling
  - Translation (from built-in dictionary; supports English, German and French)
  - Romanisation (supports [Pīnyīn (拼音)](https://en.wikipedia.org/wiki/Pinyin) and Cantonese [Jyutping (粵拼)](https://en.wikipedia.org/wiki/Jyutping))
  - Mandarin Audio (fetched from Google or Baidu)
  - Traditional (繁體字) and simplified (簡體字) characters
  - [Bopomofo (ㄅㄆㄇㄈ)](https://en.wikipedia.org/wiki/Bopomofo), also known as Zhuyin (注音)
  - [Rubies](https://www.w3schools.com/tags/tag_ruby.asp) (small-print transcription placed above characters)
  - Frequency (from “very basic” to “obscure”) - based on [anki-chinese-word-frequency](https://github.com/ernop/anki-chinese-word-frequency)
  - Usage Sentence Examples - Chinese/English sentence pairs from [Tatoeba](https://tatoeba.org/)
- Automatic tone change of auto filled pinyin (hanzi field must be populated)
  - E.g. fen1kai1 -> *Tab* -> fēnkāi (won't replace existing tones)
- Tone colours (applied to characters, romanisation and Bopomofo)
- Built-in note types (Basic and Advanced)


## Usage

The core feature of the add-on is the automatic field filling. To take advantage of this, you need to have an Anki note type with the appropriate fields (e.g., `Hanzi`, `English`, `Pinyin`, `Sound`). See `config.json` for a list of valid field names.

If you don't already have such a note type, the easiest approach is to use one of the built-in models. Two types are installed automatically: Basic and Advanced. The only important difference is that the Advanced model shows more information.

To use the field-filling features:

1. Add a new note to Anki (press *a*)
2. Create (manage -> add) and select `Chinese (Basic)` or `Chinese (Advanced)` as the note type
3. Enable Chinese Support 3 for this note type (click `汉字`)
4. Enter a word (e.g., 電話) into the `Hanzi` field (sentences will also work)
5. Press *Tab*
6. The remaining fields should then be populated automatically


For other uses, older versions of the wiki may be helpful: [(OLD) Chinese Support Wiki](https://github.com/ttempe/chinese-support-addon/wiki)



<br>

## Credit

Copyright and Contributors:

* 2012-2015 Thomas TEMPÉ <thomas.tempe@alysse.org>
* 2012 Roland Sieker <ospalh@gmail.com>
* 2013 Chris Hatch <foonugget@gmail.com>
* 2014 Alex Griffin <alex@alexjgriffin.com>
* 2017-2021 Joseph Lorimer <joseph@lorimer.me>
* 2020 Joe Minicucci <https://joeminicucci.com>
* 2023-2024 Gustaf Carefall <https://github.com/Gustaf-C>
* 2023-2025 Kieran Black <https://github.com/kieranlblack>
* 2025 fetsorn <https://github.com/fetsorn>
* 2025 Shigeyuki <http://patreon.com/Shigeyuki>

other contributors, see: [chinese-support-3/contributors](https://github.com/Gustaf-C/anki-chinese-support-3/graphs/contributors)


## Other Chinese Support Addons

* V1. [chinese-support-addon (maybe original)](https://github.com/ttempe/chinese-support-addon)
  * Author: [Thomas TEMPÉ](https://github.com/ttempe)
  * Wiki: [Chinese Support Wiki](https://github.com/ttempe/chinese-support-addon/wiki)
* V2. [Chinese Support Redux v0.14.2](https://github.com/luoliyan/chinese-support-redux)
  * AnkiWeb: [AddonPage](https://ankiweb.net/shared/info/1128979221)
  * Author: [JD Lorimer](https://github.com/jdlorimer)
* V3. [Chinese Support 3](https://github.com/jdlorimer/chinese-support-redux)
  * AnkiWeb: [AddonPage](https://ankiweb.net/shared/info/1752008591)
  * Author: [Gustaf-C](https://github.com/Gustaf-C)
  * Contributors: [Kieran Black](ttps://github.com/kieranlblack)


## Related addon
  *  [Korean Support](https://github.com/scottgigante/korean-support)
     * AnkiWeb: [AddonPage](https://ankiweb.net/shared/info/1336389630)
     * Author: [Scott Gigante](https://github.com/scottgigante)


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


**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 447 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/59869739.png">Muneeb Khan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162534376.png">Hoang Hung <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78520348.png">only <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10124363.png">Sameer Al <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49440163.png">Jeanna <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79973078.png">J P <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/136301102.png">K <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/118400646.png">Cole Krueger <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/9986622.png">Wei <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/109655478.png">Sean Voiers <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11209375.png">Robert Malone <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/135355652.png">Jk <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/157766503.png">Andrew Yang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42357230.png">CunningPotato <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144288699.png">Aayush Bhatawadekar <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143557848.png">Stellate ggl <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166334352.png">Cubli <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/93806908.png">Tina Weingarten <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/132329777.png">Victor Evangelista <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142510183.png">Adrine <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/102120950.png">Oleksandr Pashchenko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/97140314.png">Vivian Cao <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141043766.png">Osasere Osula <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/159172027.png">Kylie  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)


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
