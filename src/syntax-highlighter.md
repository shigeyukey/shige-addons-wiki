# ⚡️Syntax Highlighter

<!-- **[AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`** -->

- [⚡️Syntax Highlighter](#️syntax-highlighter)
    - [Credit](#credit)
  - [How to use](#how-to-use)
  - [Option](#option)
    - [Line number](#line-number)
    - [Center code fragments](#center-code-fragments)
    - [default to last language used per deck](#default-to-last-language-used-per-deck)
    - [Font Size](#font-size)
    - [Hotkey](#hotkey)
    - [Enable CSS classes](#enable-css-classes)
    - [Language](#language)
    - [StyleSample](#stylesample)
    - [Enable CSS Note Type](#enable-css-note-type)
  - [🚨Report](#report)




<!-- Customized -->
[![banner_shigeyuki_2](https://github.com/shigeyukey/Pokemanki-Gold/assets/124401518/8408c164-e95c-4e40-98c1-393b03e04bcb)](https://www.reddit.com/user/Shige-yuki)


For quick syntax highlighting of code in Anki's Editor. Select the code and press the ⚡️electric button to auto add highlighting. (or paste from the clipboard)

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/00.png)

### Credit<br>
This add-on is a fixed and Custmized version for Anki25+ of the addon <a href="https://ankiweb.net/shared/info/566351439" target="_blank">"Syntax Highlighting (NG)"</a> and <a href="https://ankiweb.net/shared/info/1463041493" target="_blank">"Syntax Highlighting for Code"</a>, originally created by <a href="https://github.com/tmbb" target="_blank">Tiago Barroso</a>, <a href="https://github.com/timrae" target="_blank">Tim Rae</a>, <a href="https://github.com/glutanimate" target="_blank">Aristotelis P. Glutanimate</a>, <a href="https://github.com/cav71" target="_blank">C A. Cavallo</a>, and credit goes to them (AGPL). Syntax highlighting is executed by bundling  <a href="https://github.com/pygments/pygments" target="_blank">pygments</a> (BSD).



## How to use

This customized version includes support for the latest Anki 25.04+, user interface enhancements, code updates and optimizations. Added functions to auto add CSS, select line numbers, etc.<br>
<br>
Select the code or paste from the clipboard.<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/07.png)
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/05.png)


## Option

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/01.png)


### Line number

* Show line numbers
  * Show numbers at the beginning of each line of code.
* Always input start line number
  * If this option is enabled, you can input the start line number in the dialog that pops up when you run the syntax.
* Default line number
  * Sets the default line start number.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/06.png)


### Center code fragments
  * Change whether code is left-aligned or centered.
### default to last language used per deck
  * Auto save and use the last used programming language for each deck.
### Font Size
  * Change the font size of the code. You can also change it by editing the HTML directly.
### Hotkey
  * Sets a shortcut key to run a highlight.


### Enable CSS classes

Enable this option to highlight using CSS instead of inline highlighting.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/08.png)

* CSS mode can be easily changed with the theme option, and can be auto change in night mode and light mode. Inline mode is not possible.
* CSS is auto added to the notetype style when syntax is added.
* CSS mode does not show highlight colors in the editor, but in the reviewer or previewer. Default inline highlighting can show color in the editor.
* Default inline highlighting has colors embedded in HTML, so you cannot change the theme like in CSS mode.
* The auto-generated CSS files are auto saved in the media folder.


### Language

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/02.png)

 * You can select which languages to display in the drop box in the editor, and rearrange them by dragging and dropping.


### StyleSample

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/03.png)

* You can view a sample of syntax highlighting and change the default theme.
* Inline mode is the default highlighting. The highlight is embedded and cannot be changed later.
* If CSS mode is enabled, you can set light mode and night mode themes respectively. All highlighting will be changed when the theme is changed.

### Enable CSS Note Type

CSS mode automatically adds CSS to the card. This option allows you to batch remove or add CSS added to the note type style. If you are not using the CSS mode option this option does nothing.

![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/syntax-highlighter/04.png)

* All-ON, All OFF button
  * Batch select or deselect note types.
* Batch Update Notetypes button
  * Press this button to batch add or remove CSS.
  * Note that the optional Save button does not save NoteType changes.
  * Note type changes cannot be canceled with the optional Cancel button, but can be undone in a batch with Anki's Undo.
  * This option edits all note types at once, so if you are concerned I recommend making backups of your decks before running this option.
  *  CSS can be added or removed manually, only this one line is needed. -> `@import url("_shigeSyntax.css");`




<br><br><br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on, I'm Shigeඞ! I'm looking for supporters for my add-ons development, because I like Anki! So far I fixed and customized 60+ discontinued add-ons and created 30+ new add-ons. If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month). If you have any ideas or requests feel free to send them to me, thanks! :D


[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>


**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 432 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49440163.png">Jeanna <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79973078.png">J P <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/136301102.png">K <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/118400646.png">Cole Krueger <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/9986622.png">Wei <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/109655478.png">Sean Voiers <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11209375.png">Robert Malone <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/135355652.png">Jk <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/157766503.png">Andrew Yang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42357230.png">CunningPotato <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/162786071.png">Mia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144288699.png">Aayush Bhatawadekar <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143557848.png">Stellate ggl <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166334352.png">Cubli <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/93806908.png">Tina Weingarten <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/132329777.png">Victor Evangelista <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142510183.png">Adrine <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/102120950.png">Oleksandr Pashchenko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141043766.png">Osasere Osula <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/159172027.png">Kylie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126299046.png">Alex D <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/17007980.png">Aaron Buckley <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79818714.png">oiuhroiehg <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160429145.png">Sebastian Bellotti <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/96852031.png">Nandani Patel  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)



<br><br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  <!-- 1. <a href="https://ankiweb.net/shared/review/🟢" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development. -->
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/simple-fix-of-broken-add-ons-for-the-latest-anki-by-shige/41650" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.







<!-- ## 📥 How do I install this add-on?

1. This add-on works with Anki for desktop (it does not work on mobile). Download Anki from the [official website](https://apps.ankiweb.net/) if you haven't already.
2. Copy and paste the add-on code ( `🟢` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
3. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
4. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/🟢) -->


