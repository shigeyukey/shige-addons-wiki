# Rewrite text of study cards in anki home

[![banner_shigeyuki_2](https://github.com/shigeyukey/Pokemanki-Gold/assets/124401518/8408c164-e95c-4e40-98c1-393b03e04bcb)](https://www.reddit.com/user/Shige-yuki)

### [AnkiWeb Page](https://ankiweb.net/shared/info/428359194) | Code : `428359194`

This is a small add-on to rewrite the text of Anki's Home. You can use HTML.

![rerite-text](https://github.com/shigeyukey/shige-addons-wiki/raw/main/src/images/rerite-text-of-study-cards/01.png)


## How to use
Click on the text to display the options.

![click](https://github.com/shigeyukey/shige-addons-wiki/raw/main/src/images/rerite-text-of-study-cards/02.png)

### Rewrite text

Default: `Studied {card_text} cards in {time_text} today. ({avg_text}s/card)`

1. `{card_text}`  Replaced by the number of reviewed cards today.
2. `{time_text}` Replaced by the reviewed time today.
3. `{avg_text}` Replaced by the average seconds of the card.

### HTML

If you use HTML you can make the text larger and change the colors. (If you don't know how to write HTML you can use AI like ChatGPT to generate it.) e.g.

![alt text](https://github.com/shigeyukey/shige-addons-wiki/raw/main/src/images/rerite-text-of-study-cards/03.png)

```html
<span style="font-size: 24px; color: blue;">📝Studied <b>{card_text} cards</span></b> in <b>⏰️{time_text}</b> today. (<b>⏱️{avg_text}s</b>/card)
```

###  Use Distinct count

If enabled it will count cards without duplicates. Anki's default is to show 100 cards after reviewing 50 cards twice each, this option will show it as 50 cards. (This add-on uses the add-on Humble pie, so the same feature is built in.)

### Credit

This add-on uses <a href="https://ankiweb.net/shared/info/2133933791" target="_blank">HUMBLE PIE</a> code, originally created by <a href="https://github.com/Joseph-Y" target="_blank">Joseph Yasmeh</a> and credit goes to them.



#### Related Add-ons (for GUI)
 1.  <a href="https://ankiweb.net/shared/info/1959668791" target="_blank">🎨Anki Redesign - Make Anki Cool Design (Fixed by Shigeඞ)</a>
 2.  <a href="https://ankiweb.net/shared/info/1797615099" target="_blank">📌Rearrange home addons(Created by Shigeඞ)</a>
 3.  <a href="https://ankiweb.net/shared/info/906950015" target="_blank">🐻TidyAnkiBear - Select and hide Anki menu bar items</a>
 4.  <a href="https://ankiweb.net/shared/info/1370336700" target="_blank">🖥️No Distractions Full Screen (Fixed by Shigeඞ)</a>
 5.  <a href="https://ankiweb.net/shared/info/1923741581" target="_blank">🔍️Zoom for Anki24 - Keep zoom level after reboot (Fixed by Shigeඞ)</a>
 6.  <a href="https://shigeyukey.github.io/shige-addons-wiki/enhance-main-window.html" target="_blank">📊Enhance main window (Fork by Shigeඞ)</a>
 8.  <a href="https://ankiweb.net/shared/info/1845966780" target="_blank">👻Remove tooltip for Answer buttons (Fork by Shigeඞ)</a>
 7.  <a href="https://shigeyukey.github.io/shige-addons-wiki/hide-leech_notification.html" target="_blank">🩸Hide Leech Notification (Created by Shigeඞ)</a>


<br><br><br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hello thank you for using this add-on, I'm Shigeඞ! I development of Anki add-ons for [Gamification of learning](https://www.youtube.com/@shigeyuki5397/videos) and so far [I fixed 50+ broken add-ons (Free).]((https://new.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/)) If you support my volunteer development on Patreon you can download all Patrons only add-ons. ($5/month)

[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>


**\[ Special Thanks ]** <br>
 So far I received donations from 320 patrons and without their support I never could develop this and release for free, thank you very much!🙏<br><br>
  **Patrons:** *Arthur Bookstein, Haruka, Luis Alberto, Letona Quispe, 07951350313540, GP O'Byrne, Lily, Ernest Chan, Daniel Kohl-Fink, Tobias Klös, Tim, Kyle Mondlak, NamelessGO, Jesse Asiedu, ElAnki, Kurt Grabow, Jake Stucki, KM, Fahim Shaik, Tae Lee, Ashok Rajpurohit, NoirHassassin, Abhi S, Jonathan Contreras, Morgan Torres, Gabriel Vinicio Guedes, ellie, Matthew Hartford, Douglas Beeman, Ketan Pal, Tyler Schulte, Keeler Kime, Isabel Guan, Aurora Dzurko, tarek, adam Katz, K, iuventius, Patrick ellis, findus161, Augusto Stein, Haley Schwarz, Jk, Cole Krueger, mootcourt, K, Robert Malone, Wei, Sean Voiers, Stellate ggl, Aayush Bhatawadekar, Jeanna, J P, Juan Salgado, Victor Evangelista, Adrine, Oleksandr Pashchenko, Alba Grecia Suárez Recuay, 龍星 武田, Alex D, oiuhroiehg, Aaron Buckley, Osasere Osula, Izz Aryan, qiting zeng, Renoaldo Costa Silva Junior, Felipe Dias, Ansel Ng, Temi Jide, Stephen Ankoma, Azfar Hussain, Jordan Garnier, sab hoque, Tarek Bouamoud, Robert Wiebalck, Raffaele Russo, Corentin, Ythalo Vlogs, Yitzhak Bar Geva, Muneeb Khan, Jason Liu, Hikori, Lê Hoàng Phúc, anonymous, Tobias Günther, Michael Pekala, Sneed100, Elisabeth Barber, Yaeerrrrrr, Christopher Lam, Steven Banner, Alex Kaiser, Svel1989, Matheus Chagas, Tina Weingarten, Benjamin Tarnowski, David C, Moritz Bluhm, Maik C., Matt LeRoux, Lis Y.* [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)


<br>

## 📥 How do I install this add-on?
1. Copy and paste the add-on code ( `428359194` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
2. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
3. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/428359194)


### [AnkiWeb Page](https://ankiweb.net/shared/info/428359194) | Code : `428359194`