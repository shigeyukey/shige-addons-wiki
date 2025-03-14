# Rewrite text of study cards in anki home

[![banner_shigeyuki_2](https://github.com/shigeyukey/Pokemanki-Gold/assets/124401518/8408c164-e95c-4e40-98c1-393b03e04bcb)](https://www.reddit.com/user/Shige-yuki)

<!-- ### [AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢` -->

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