# 📖Searching PDF Reading and Note-Taking in Add Dialog

**[AnkiWeb Page](https://ankiweb.net/shared/info/1250212877) | Code : `1250212877`**


<!-- Customized -->
[![banner_shigeyuki_2](https://github.com/shigeyukey/Pokemanki-Gold/assets/124401518/8408c164-e95c-4e40-98c1-393b03e04bcb)](https://www.reddit.com/user/Shige-yuki)

*This add-on adds a second pane to the Add dialog, which provides a lot of handy functionality.*

### Credit

This add-on is fixed and customized version for Anki25.04+ of the addon <a href="https://github.com/fonol/anki-search-inside-add-card" target="_blank">"Searching PDF Reading and Note-Taking in Add Dialog"</a>, originally created by <a href="https://github.com/fonol" target="_blank">Tom Z (fonol)</a> and credit goes to them and contributors. (AGPL License)

*Switching (when the Add window is small, shortcut is CTRL-F):*<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/00.png)

### How to use

*Note: Most of these descriptions and images are re-uploaded with partial edits by me from the descriptions and images by Tom Z on the original add-on page. (The original add-on and add-on pages have already been deleted so they are no longer there.)*

This add-on adds a second pane to the Add dialog, which provides a lot of handy functionality. My main uses for it are:

 * Having a managed priority queue for stuff I want to read/watch and which supports me in adding notes from this material.
 * Searching through my collection while adding notes to find related information

<!-- **Some of the following information might be out-dated. At some point, there will be a documentation page hosted on Github or something similar, but as the add-on features and UI are subject to frequent changes at the moment, I prefer to postpone the documentation part until the feature-set/UI is "stable". My advice to learn how stuff works would be to just slowly try things out, you don't have to use all the features, just pick what is useful to you.** -->

**Some of the following information might be out-dated. My advice to learn how stuff works would be to just slowly try things out, you don't have to use all the features, just pick what is useful to you.**

Features atm include:

- Selecting text inside a field or inside a displayed note allows to search for it
- Automated searching if you type, or if you input tags
- Edit another note (e.g. from the search results) in the add window
- Timeline to see how productive you have been in the current year (CTRL + hovering will show you the cards added on that day)
- Predefined searches (e.g. last added, lowest pass rate, ...)
- Info dialog for displayed notes (Note properties + stats)
- Browser search mask that works exactly like the search you know from the browser window
- Defining synonyms/related terms to include when searching
- Defining stopwords to ignore when searching
- Defining fields to ignore when searching or to hide in the results
- Unsuspending found cards/notes
- Browsing/searching for tags
- Browsing related tags and their notes by hovering over a tag
- Toggling between normal add dialog view and the add-on (by default CTRL-F)
- Notetaking with taggable and searchable notes
- Watching Youtube videos 
- Reading PDFs inside the add window, with
    - progress tracking, i.e. marking pages as read
    - extracting images
    - finding related notes on select
    - scheduling notes to read in a priority queue
    - defining special scheduling dates for notes in the priority queue
    - highlighting text and adding comments
    - creating extracts (e.g. chapters) from pdf notes, to have them as independent items in the queue
- Importing PDF notes from Zotero CSV exports or directly from folders

What the search part of the add-on does is to build a search index out of your decks, which can then be queried. When you type, it tries to find the note whose text is the most similar to what you have typed or selected. Because naturally, many common words are present in a lot of notes, there is a list of words that should be ignored (so called stop words). Examples in english would be "the", "a", "I", "for", etc. I cannot know what languages you write your notes in, so you have to build it by yourself. The default configuration contains an english stop word list for starters.

**The stop word list is defined in the config file, and you should fit it to your language(s) before using this add-on. Your searching will take longer and be less precise if you don't use stop words.**

All UI concerning the search is displayed on the right side of the dialog (it is only displayed above a certain window width and height, so don't be confused if it may not be there when you start). The index is built everytime you start Anki, and by default uses your whole collection.
At the moment, notes you delete are not deleted from the search index until you restart. Same goes for notes you edit during review or in the browser.
Notes you edit through the edit button in the Add Card dialog are updated immediately.

**Please note that some of the following screenshots might be outdated (UI often changes)**


Editing:  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/01.png)

"Timeline" (CTRL + hover to see the info):  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/02.png)


Tag info (a little wonky atm):  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/03.png)
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/04.png)

Night mode styling:  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/08.png)

Reader in night mode styling:  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/06.png)

Making Clozes:  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/09.gif)

Tomato Timer:  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/10.png)

"Full Screen"  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/11.gif)

"Pages Read"  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/12.png)

"Stats"  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/13.png)

"Review before continuing to read"  
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/14.png)
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/15.gif)


The search results are updated when a field on the left is changed, if a query is entered through the bottom search mask, or if text is selected on the left. Results are notes, not cards, where fields are separated by a | character. Clicking on a note will show some (very basic) evaluation on how you performed on card(s) of the note. 
Clicking on a tag of the note will add the tag to the currently edited note. Results can be pinned / removed (this will only remove the displayed result, NOT delete anything!).

Support for synonyms / query expansion (24-03-19) 

If you enter "What is Anki?" on the left side of the dialog, your search results will only contain notes with "anki" in them. But you might want to retrieve related notes too, that do not contain the term "anki", but maybe something like "spaced repetition". Another use case would be word inflection, because currently, stemming is not activated in the index (that would be language dependent), which means searching for "space" and "spacing" will get different results.
If you click on Settings & Info -> Synonyms, you will see a dialog that allows for the input of synonym sets. These are used when searching, but only for the searches done through the add-on, not for the browser search (when the bottom search bar is in Mode: Browser).

Old image, but you get the idea:<br>
![alt text](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/16.png)

Terms are separated by ",". If you click inside a set, you can edit it and confirm by pressing enter.
If you use synonyms, searching works like follows:
- Suppose you typed "What is Anki?"
- Your stopword list contains "what" and "is", so these are removed
- One of your synonym sets contains "anki", so the query gets expanded by all the terms in the set
- End query: "anki srs spaced repetition"

You should maybe use this conservatively, since you might see too many results for simple queries otherwise.

IR / Notetaking / PDF reading

The idea is that you can create notes that are independent of Anki's notes, which are saved in a sqlite database in a folder you can specify. You can create/edit/delete these notes in the add note dialog. If you type or select text, these notes are included in the search results. They can be tagged, and that way, one can access them over the tag dropdown.
The dialog for creating these notes allows them to be put in a "queue", the idea behind that is to have something like a reading list, so you can simply take the first (or a random) item from the queue, read a part, and create (regular Anki) notes while reading. When you are done, you can move the item to the end of the queue (or somewhere else).
I currently use the feature for reading my uni textbooks and slides, pasting articles from the web to read later, to quickly create notes containing links or questions, e.g. for anything that could be converted to Anki notes later.

Update (09-03-20):
The queue system now works by assigning priorities to items (1-100, where 100 is the highest). I am testing around with scheduling the notes according to their priority in a smart way. 
A note is placed higher in the queue the higher its priority is and the longer it has been since it was last done.

That means items with a high priority will land at the end of the queue initially just like low prio items, but climb the queue faster in the following hours/days. Because the prio is capped at 100, but the time difference grows infinitely, it is guaranteed to see low priority items eventually.
I am quite sure there are smarter ways to schedule and maybe testing will prove the current system to be flawed, so I am totally open to improvement suggestions.

There is also the possiblity to schedule notes to be shown at certain times. At the moment, this happens mainly in the Create/Update note dialog. When a note is scheduled for a given day, it will be placed in front of the queue on that day. If multiple notes are scheduled on that day, they are all placed in front, and internally sorted by their priority and time last seen just like normal.

![](https://shigeyukey.github.io/shige-addons-wiki/images/pdf-search/17.png)



My current workflow goes like this: 
1. Add my textbooks, lecture slides etc. as PDF notes
2. At the start of a session, I open the queue with the book icon, or by clicking Notes > Read Next, read the first item in the queue for some time (I use 30 min pomodoro slices or or if I feel my workload is high, 15 mins to see more different items), make notes, mark difficult pages or pages I need to revisit again
3. Click Done or if I feel I want to see the item more/less often, adjust the priority.
4. 5/15 min break, then read the next item which has now been moved at the top of the queue.

If you just want to open pdfs without the queue, you could use the sidebar and organize your PDFs by tags, or simply use the "In Progress" search.
This is not very practicable if you are the pdf viewer (e.g. would require closing the current pdf first), so from there, you currently have three options to quickly open another PDF:
1. Ctrl+O hotkey.
2. Queue Manager (from the icon on the pdf viewer bottom bar)
3. Click 'Browse' or 'PDFs' on the bottom of the fields area

Highlighting and Comments

Just a short explanation how they currently work: 
You can select one of the buttons on the pdf's left side, either a color or the Text ("A") symbol. If you then select text while holding down CTRL, it will be highlighted in the currently selected color. 
The comment ("A") button works a bit differently, here you click somewhere, with CTRL pressed. A comment text area should appear at the given location. 
Highlights can be deleted by simply clicking on them, comments by clicking on them with CTRL pressed.


Some notes: 

1. Cards edited through the browser or deleted in the current session are not in the index/removed from the index until you restart the program.

2. The background color in the pdf viewer is the same as the background color from the built-in nightmode (requires Anki >= 2.1.20), so in my opinion, it looks best with night mode enabled

3. No warranties about compatibility with other add-ons. I personally don't use that many, and it would be exhausting to test all possible combinations, so you have to find out by yourself. 


<!-- BUGS: I can't respond to bug reports here, so either post an issue here: https://github.com/fonol/anki-search-inside-add-card or, in case you have a reddit account, please send me a message (or comment in this thread: https://www.reddit.com/r/Anki/comments/axpvjf/search_collection_inside_add_cards_dialog/). Username is Brunzus.
I will try to look after all bugs as soon as I have time. -->

FAQ

Does the add-on need an internet connection?
-> It works completely offline, with the small exception that Youtube videos can be opened only with a working internet connection.

My screen is too small for the add-on
-> There are some settings you could try out: First, you could increase the right column's size by modifying Left Side Width,
if that's not enough, you could modify the Zoom setting to some value < 1.0, which will simply scale everything on the right side down a bit.

When I open the add dialog for the first time, index creation takes too long. 
-> There is not much I can do about that, performance depends on your machine and the size of your collection. You can always exclude decks in the config file to reduce the index size.

My searches take too long
-> As stated elsewhere, search time depends on lots of factors, but the most determining one's are: Collection size, type of index used.  
I always get the fastest results with SQLite FTS version 5. You can check your version in the Info dialog. If you are using FTS 3, queries are much slower. I suggest trying to update your system's SQLite installation with one that comes compiled with FTS 5 support if possible. As for collection size, you can choose to limit the decks that go into the index, see the decks config option. And make sure you use a stopwords list for your language, as explained in the second paragraph.

A note in the results seems to be displayed incorrectly (text flows out of the card).
-> Some notes might contain html that breaks the container into which they are rendered. I try to catch these cases, but if you stumble upon such a note, please open an issue in the github repo with the note text.

Sometimes a search is not triggered when selecting
-> The search is triggered when the mouse up happens inside (!) the note (or field input). So if you mark some text, and leave the note area before 
releasing the mouse, nothing happens.

Some part of the add-on layout is cut-off
-> The layout tries to make everything visible on every screen size, but if you have problems (typical ex. would be that the add-on UI covers some part of the editor buttons), it could be that its another add-on modifying the editor UI, e.g. an add-on adding an additional row below the editor buttons or stuff like that.

I have a note with lots of text, and typing seems to lag at some point
-> Typing typically lags when the results are rendered. My advice would be to either increase the delayWhileTyping config value, which determines how long to wait after the user has stopped typing (I am a slow typer and have mine set to 1500ms atm), so searches aren't triggered too soon while typing, or to uncheck search while typing and use only the FIELDS button to search for your current input. 

What is this Performance stat?
-> I wanted to have a stat that includes not only the pass rate of a note's cards, but also how long I took on average to answer these cards.
So I simply came up with a crude formula that calculates a score (1-100) out of the pass rate and avg. time taken. I am open to suggestions about better stats to display there instead, so if you have any ideas, let me know.

How are the keywords determined?
-> The keywords are not really determined in a sophisticated way, it's just the words that appear most often in the top n results (n = 20 atm) , minus any stopwords.

How do I add a PDF?
-> Click on Notes -> Create -> PDF. Or use Ctrl+Shift+N. In general, all notes are treated as PDF if their Source is a path to a file ending with .pdf.

How do I add a Youtube video?
Open the Create Note dialog and paste the URL of the video into the source field. It will be opened as an embedded video then. Please note that not all Youtube uploaders allow embedding their videos on other sites, so in some cases, it might not work.

What if I move a PDF file while a note is linked to it?
-> If you moved the file, nothing really should happen except you cannot open the PDF anymore (because the path in source is now incorrect).
Reading progress and marks are linked with the ID of the note, so if you change the source of the note to again contain the correct path, everything should be fine.

What is the "Queue"?
-> The queue can be used to kind of schedule your reading, by taking the first item out of it (typically a pdf note or a note containing some pasted article from the web), reading some part, creating notes while doing so, then moving it somewhere back in the queue. This might not be fitting for everyone's workflow, but I am quite happy with it.

Pasted Text from a PDF looks weird
-> Since some of the latest versions, Anki keeps formatting in pasted text. So your pasted text might contain the dark background of the PDF viewer and similar stuff. I don't exactly know about Mac/Linux, but on Windows, you can paste with Ctrl+Shift+V, which pastes the plain text.

Can I port the add-on data to another PC?
-> The relevant data is in the file siac-notes.db, whose location you can find under Info & Settings -> Info > Path to Notes DB. My advice would be to copy the add-on's folder (1250212877) to your new Anki installation's add-on folder, copy siac-notes.db to some safe location and set Path to Note DB to that location.

*(The explanation of the original add-on page ends here)*

### Change log

2025-07-04: First Release (Fixed by Shige, Fork)

1. Support for Anki25.04+
    - Fixed a problem with the add-on not working with the latest Anki security update. (content security policies)
    - Fixed all inline javascript in Python code.
    - Fixed all inline javascript in HTML.
    - Isolate all dynamically generated JavaScript.

2. Added support for Anki25.02+
   - Added PyQt6 support.
   - Updated deprecated old code.

3.  Partial support for future Anki
    - Added support for future Editors under development by Anki.
    - (Not released yet so it is in progress.)

4. Bug fixes, etc
   - Added progress bar to avoid Anki freezing during loading.
   - Added a solution for a bug that causes Anki to freeze.
   - Fixed a bug that the editor does not show up on startup.
   - Fixed a bug that the window width is not auto adjusted.
   - Fixed a bug that the dropbox in window mode is not displayed.
   - Fixed a bug that an error occurs when closing the editor.
   - Fixed a bug that Anki crashes when rebuilding indexes.
   - Added workaround for Anki freezing.
   - Checked and repaired the PDF viewer.
   - Tidied up a lot of code.
   - Updated license info. (AGPL)

5. New Features
   - Added function to display random quotes at startup.
   - Added a function to save the selected deck automatically.

6. Note
   - Fixes for the latest Anki are largely complete, but all buttons and functions have not yet been tested due to their large number. If you find any buttons or functions that do not work properly please contact me.
   - The original add-on has been reported to occasionally freeze Anki. So far the cause of the freeze I found has already been fixed, but if Anki freezes or runs too slowly please contact me.



<h4><a href="http://patreon.com/Shigeyuki">💖Please Support Shige's Anki add-ons development!</a></h4>

Hi thank you for using this add-on, I'm Shigeඞ! I'm looking for supporters for my add-ons development, because I like Anki! So far I fixed and customized 60+ discontinued add-ons and created 30+ new add-ons. If you support my volunteer development you will get 14 add-ons for patrons only and 15 game themes included in AnkiArcade ($5/month). If you have any ideas or requests feel free to send them to me, thanks! :D

[![patrons_banner](https://shigeyukey.github.io/shige-addons-wiki/images/_promotion/promotion_00.gif)](http://patreon.com/Shigeyuki)<br>
[Get Patrons only addons](https://www.patreon.com/Shigeyuki) | [Patrons Q and A](https://shigeyukey.github.io/shige-addons-wiki/patrons_q_and_a.html) | [Contact](https://shigeyukey.github.io/shige-addons-wiki/contact.html) <br>


**[[ Special Thanks ]](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patrons)** <br>
 So far I received donations from 428 patrons and without their support I never could develop this, thank you very much!🙏<br><br>
  **Patrons:** <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95201671.png">Arthur Bookstein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/4189493.png">Haruka  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/39049205.png">Luis Alberto, Letona Quispe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3015355.png">07951350313540  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131367142.png">Lily <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/123514506.png">Daniel Kohl-Fink <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130988514.png">Tim <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/21640709.png">Kyle Mondlak <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/130863731.png">NamelessGO <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/112593636.png">ElAnki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/78715897.png">Ernest Chan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/72892241.png">GP O'Byrne <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/137001490.png">KM <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/140244563.png">Jonathan Contreras <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/139233949.png">Abhi S <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/131879614.png">Jesse Asiedu <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/90408011.png">Tobias Klös <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142758041.png">Isabel Guan <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86498562.png">ellie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143150902.png">Matthew Hartford <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49035952.png">tarek <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/32002936.png">Jake Stucki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/3977614.png">K  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/146804612.png">Juan Salgado <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/20456974.png">Peasant of Anki <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/45458777.png">iuventius <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/147535833.png">findus161 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95408482.png">Patrick ellis <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/22537707.png">Keeler Kime <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95296012.png">Kurt Grabow <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/71291734.png">Fahim Shaik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108245110.png">Augusto Stein <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/124387188.png">Ashok Rajpurohit <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/24926793.png">mootcourt <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153319957.png">Yaeerrrrrr <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/16653393.png">Christopher Lam <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/107757731.png">NoirHassassin <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/149705924.png">qiting zeng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141054047.png">Morgan Torres <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126129884.png">Kaitlyn Bowler <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/53817814.png">Elisabeth Barber <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/5645766.png">Tae Lee <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/95639188.png">Steven Banner <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/65244351.png">Gabriel Vinicio Guedes <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/33839343.png">sab hoque <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18365874.png">Lis Y. <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/119890284.png">Ythalo Vlogs <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/153136646.png">Matheus Chagas <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/51031644.png">Ketan Pal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/27209515.png">Svel1989 <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144275858.png">Aurora Dzurko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/14557801.png">Kolorophyll  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/86501477.png">Tyler Schulte <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/41793356.png">Mac <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/84577944.png">Douglas Beeman <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/2342247.png">Heidi  <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/18272512.png">Leonora Lomoki Akporyoe <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66659056.png">Gabriel Farrugia <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/54830120.png">Bryn Price <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/155979761.png">Temi Jide <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/66955168.png">Ansel Ng <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152892568.png">David C <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/108021106.png">Haley Schwarz <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160349862.png">Woody <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/145047142.png">Ujwal Chadha <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/30780459.png">pie_is_good <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/49440163.png">Jeanna <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79973078.png">J P <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/136301102.png">K <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/118400646.png">Cole Krueger <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/9986622.png">Wei <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/109655478.png">Sean Voiers <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/11209375.png">Robert Malone <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/135355652.png">Jk <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10827293.png">gus forester <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/157766503.png">Andrew Yang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/144288699.png">Aayush Bhatawadekar <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/143557848.png">Stellate ggl <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166334352.png">Cubli <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/93806908.png">Tina Weingarten <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/165591251.png">Aydin Herik <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163514236.png">Xiuxuan Wang <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/152256816.png">Azfar Hussain <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/132329777.png">Victor Evangelista <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/142510183.png">Adrine <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/102120950.png">Oleksandr Pashchenko <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/23439273.png">Orlando Frey <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/166415416.png">kenken <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/10045900.png">Take Root <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/141043766.png">Osasere Osula <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/159172027.png">Kylie <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/163711094.png">Iggi <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/126299046.png">Alex D <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/164671636.png">Carly Burdorf <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/28473334.png">Austin Regal <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/17007980.png">Aaron Buckley <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/79818714.png">oiuhroiehg <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/160429145.png">Sebastian Bellotti <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/42357230.png">CunningPotato <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/87246902.png">Alex Kaiser <img src="https://shigeyukey.github.io/shige-addons-wiki/images/patreon_images/60761851.png">Alba Grecia Suárez Recuay  [...full list](https://shigeyukey.github.io/shige-addons-wiki/patrons_credit.html#patron)


## 📥 How do I install this add-on?

1. This add-on works with Anki for desktop (it does not work on mobile). Download Anki from the [official website](https://apps.ankiweb.net/) if you haven't already.
2. Copy and paste the add-on code ( `1250212877` )  into Anki and you can install it. ( *Menu -> Tools -> Add-ons -> Get Add-ons -> Code \[ add-on code ]* )
3. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
4. Add-ons will be broken when the official Anki gets a major update, so if you like this add-on please support my volunteer development by rating, sharing, and donating. Thank you!

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/1250212877)






**[AnkiWeb Page](https://ankiweb.net/shared/info/1250212877) | Code : `1250212877`**