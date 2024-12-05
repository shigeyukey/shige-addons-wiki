# 🔓️Kanji Unlock Addon

[![banner_shigeyuki_2](https://github.com/shigeyukey/Pokemanki-Gold/assets/124401518/8408c164-e95c-4e40-98c1-393b03e04bcb)](https://www.reddit.com/user/Shige-yuki)   <br>
### [AnkiWeb Page](https://ankiweb.net/shared/info/817904532) | Code : `817904532`


<!-- This add-on is a fixed version of the "Kanji Unlock Addon" for Anki24+. -->
This add-on is a fixed version for Anki24+ of the broken addon <a href="https://github.com/pons-deluxe/kanji-unlock-addon" target="_blank">"Kanji Unlock Addon"</a>, originally created by <a href="https://github.com/pons-deluxe" target="_blank">nico</a> and credit goes to them.



## 📖How to use

*(These descriptions are from the original add-on and partially edited.)*

- [🔓️Kanji Unlock Addon](#️kanji-unlock-addon)
    - [AnkiWeb Page | Code : `817904532`](#ankiweb-page--code--817904532)
  - [📖How to use](#how-to-use)
  - [Use](#use)
  - [Setting up](#setting-up)
    - [Suspend kanji cards](#suspend-kanji-cards)
    - [Setting deck/field names](#setting-deckfield-names)
      - [Components field](#components-field)
  - [🚨Report](#report)
      - [\[ 📥 How do I install this add-on? \]](#--how-do-i-install-this-add-on-)


This Anki add-on automatically unsuspends cards from a **kanji deck** according to what words have already been seen in a Japanese **vocabulary deck**, with the goal of matching progress between knowledge of vocabulary and knowledge of kanji.

![alt text](images/kanji_unlock/01.png)


This is only useful for people who prefer to simultaneously study vocabulary **and** kanji.

The order that kanji appear in a kanji deck typically differs from the order in which they are first seen in a vocabulary deck. As an example, you may see the word 日曜日 (Sunday) in the first 50 words of a vocabulary deck, but the middle kanji 曜 may be placed much farther in a kanji deck. Not fun having to learn 600 other kanji before getting to see what 曜 means!

Only useful kanji seen in actual words will be unsuspended and studied, easying up the workload.


## Use

Two menu items are added to the Tools menu.

![alt text](images/kanji_unlock/02.png)

Selecting **KanjiUnlockAddon: Unsuspend new kanji** will take the newly learned vocabulary cards and check what kanji they contain. Those kanji will be unsuspended in the kanji deck. The tag '**kanjiunsuspended**' will be added to those vocabulary cards.  
That's it!


## Setting up

### Suspend kanji cards

Since this add-on works by unsuspending kanji cards, they must be suspended for it to do anything. Cards can be suspended in the Anki card browser. Typically all kanji cards would be suspended before letting the add-on unsuspend the useful ones.

### Setting deck/field names

Before the add-on can work, it needs to know which deck is the **Vocabulary deck** and which is the **Kanji deck**.  
These can be set with **Tools > KanjiUnlockAddon: Set vocabulary/kanji decks**.

![alt text](images/kanji_unlock/03.png)

* Sample decks:
    1. Kanji deck: [All in One Kanji Deck](https://ankiweb.net/shared/info/798002504)
    2. Vocab deck: [Japanese Core 2k/6k](https://ankiweb.net/shared/info/1880390099)

The **Kanji field** should be set to the field that contains *just* the Kanji.

The **Word field** should contain just the Japanese word.


#### Components field

The kanji deck should ideally contain a field with the kanji's radicals, so that they are unlocked as well.  
As an example, the kanji deck that was tested has a field called *Components*.

The kanji note for 時 has in its *Components* field

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日: day; sun; Japan; counter for days  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;寺: Buddhist temple

And 寺 itself has in its *Components*:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;土: soil; earth; ground; Turkey  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;寸: measurement; foot/10

As such, if there is a proper field selected for **Kanji radicals/components field**, the vocabulary word 時 would unlock not only the kanji card 時 but also the cards for 日, 寺, 土, and 寸.


<br><br>

## 🚨Report

If you have any problems or requests feel free to send them to me.

  1. <a href="https://ankiweb.net/shared/review/817904532" target="_blank">👍️Rate Comment</a> : You can contact me anonymously, and AnkiWeb will send you an email when I reply, a high rating increases priority of development.
  2. <a href="https://www.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/" target="_blank">👩‍🚀Reddit</a> : You can request me to repair broken Add-ons.
  2. <a href="https://forums.ankiweb.net/t/simple-fix-of-broken-add-ons-for-the-latest-anki-by-shige/41650" target="_blank">🌟AnkiForums</a> : You can request me to repair broken Add-ons, and it is ideal for open discussions.
  3. <a href="https://github.com/shigeyukey/my_addons/issues" target="_blank">🐙Github </a> : Makes it easier to track problems.
  4. <a href="https://www.patreon.com/Shigeyuki" target="_blank">💖Patreon DM</a> : Response will be prioritized.


<br><br><br>


#### \[ 📥 How do I install this add-on? ]
1. Copy and paste the add-on code ( `817904532` )  into Anki and you can install it.<br>
    ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
2. When I develop bug fixes, create new features, or compatibility for New Anki,<br>
 I will notify you and you can install it.
3. If you rate and recommend it, I will receive a notice and my tedious and sleepy<br>
 add-ons volunteer work will become more enjoyable and exciting. <br>
 (This add-on is developed by free volunteer work!👍️)

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/817904532)


