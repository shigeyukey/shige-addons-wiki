# 🔍️Review Lookup
Search and Popup cards by selected text (Customized by Shigeඞ)

<!-- **[AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`** -->

<!-- Customized -->
[![banner_shigeyuki_2](https://github.com/shigeyukey/Pokemanki-Gold/assets/124401518/8408c164-e95c-4e40-98c1-393b03e04bcb)](https://www.reddit.com/user/Shige-yuki)



This add-on is a customized version of the discontinued add-on <a href="https://ankiweb.net/shared/info/1745211643" target="_blank">"Review Lookup"</a>, originally created by <a href="https://github.com/fonol" target="_blank">fonol</a> and credit goes to them.

<!-- https://github.com/fonol/anki-review-lookup -->

## 📖How to use
*(These descriptions and images are edited and re-uploaded from the original add-on.)*

![alt text](<images/Review lookup/03.png>)

This provides a functionality similar to the [original Pop-up dictionary add-on](https://web.archive.org/web/20220617015222/https://ankiweb.net/shared/info/153625306).
All credit for the idea goes to the original author.

Basic principle is you select some text during the review, and a little popup appears, that shows you notes from your collection that contain the selected text.

Because Anki's codebase is going through a lot of changes these days, I try to decouple this add-on to a large extent from Anki's code, to ideally keep it working for a long time.

This only uses some hooks of Anki's add-on hook system (which has been there in its current form for quite some time) and uses no external libraries at all.

The add-on creates an in-memory search index at Anki's startup to be able to better rank the search results by their relevancy, which takes about 600ms for 10k notes on my machine. So please keep in mind that while using this add-on, your Anki might start a little slower.

### configuration options

1. `should_highlight`: disable/enable highlighting in search results
1. `blur_nested_tooltips`: disables the blurring effect if you nest multiple tooltips
1. `query.max_length`: if your selected text is longer than this value, no search will be triggered
1. `results.font_size`: sets the font size for the tooltip
1. `results.limit`: determines how many results (sorted by relevancy) are shown
1. `excluded_decks`: if you don't want notes from some decks to show up in the search results, add these decks here. Accepts a comma-separated list of deck names (case-sensitive!). E.g. `["deck 1", "parent deck::child deck"]`

### current caveats
1. might not work super well for chinese, japanese and similar languages 
1. highlighting won't work in all cases
1. if you add a note, it won't appear in the search results until you restart Anki



<br><br><br>

<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on, I'm Shigeඞ! I'm looking for supporters for my add-ons development, because I like Anki! So far I fixed and customized 60+ discontinued add-ons and created 30+ new add-ons. If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month). If you have any ideas or requests feel free to send them to me, thanks! :D


[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>

**\[ Special Thanks ]** <br>
 So far I received donations from 354 patrons and without their support I never could develop this and release for free, thank you very much!🙏<br><br>
  **Patrons:** *Arthur Bookstein, Haruka, Luis Alberto, Letona Quispe, 07951350313540, Lily, Ernest Chan, Daniel Kohl-Fink, GP O'Byrne, Tim, Kyle Mondlak, Jesse Asiedu, Tobias Klös, NamelessGO, ElAnki, Jake Stucki, KM, Abhi S, Kurt Grabow, Jonathan Contreras, Keeler Kime, ellie, Matthew Hartford, Fahim Shaik, Augusto Stein, Tae Lee, Ashok Rajpurohit, NoirHassassin, Morgan Torres, Isabel Guan, tarek, adam Katz, K, iuventius, Patrick ellis, Gabriel Vinicio Guedes, findus161, Douglas Beeman, Ketan Pal, mootcourt, Tyler Schulte, Aurora Dzurko, Juan Salgado, sab hoque, Haley Schwarz, Jk, Cole Krueger, K, Robert Malone, Wei, Sean Voiers, Stellate ggl, Aayush Bhatawadekar, Jeanna, J P, qiting zeng, Temi Jide, Azfar Hussain, Ansel Ng, Victor Evangelista, Adrine, Oleksandr Pashchenko, Lis Y., Ythalo Vlogs, Alba Grecia Suárez Recuay, 龍星 武田, Alex D, oiuhroiehg, Aaron Buckley, Osasere Osula, Izz Aryan, Elisabeth Barber, Yaeerrrrrr, Christopher Lam, Steven Banner, Kaitlyn Bowler, Alex Kaiser, Svel1989, Jordan Brown, Lincoln Jacobs, Heidi, Gabriel Farrugia, Matheus Chagas, Renoaldo Costa Silva Junior, Felipe Dias, Simeon, Tina Weingarten, Benjamin Tarnowski, Stephen Ankoma, David C, Jordan Garnier, Tarek Bouamoud, Robert Wiebalck, Raffaele Russo, Corentin, Yitzhak Bar Geva, Muneeb Khan, Jason Liu, Hikori, Lê Hoàng Phúc, anonymous* [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)