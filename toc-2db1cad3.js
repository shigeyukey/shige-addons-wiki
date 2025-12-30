// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><li class="part-title">Shige Add-ons Wiki</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="intro.html"><strong aria-hidden="true">1.</strong> 📖Introduction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="patrons_q_and_a.html"><strong aria-hidden="true">2.</strong> ❓️Patrons Q and A</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="patrons_credit.html"><strong aria-hidden="true">3.</strong> 💖Special Thanks</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="contact.html"><strong aria-hidden="true">4.</strong> 📨Report and Request</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Anki-tan.html"><strong aria-hidden="true">5.</strong> ⭐️Anki-tan</a></span></li><li class="chapter-item "><li class="part-title">AnkiArcade</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/Home.html"><strong aria-hidden="true">6.</strong> ⚔️️Anki Arcade</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/01-anki-knights--doragons.html"><strong aria-hidden="true">7.</strong> ⚔️Anki Knights &amp; Doragons</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/02-little-ankimares.html"><strong aria-hidden="true">8.</strong> 💎Little Ankimares</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/03-catgirl--sushi.html"><strong aria-hidden="true">9.</strong> 🐈CatGirl &amp; Sushi</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/04-ambiebt-music.html"><strong aria-hidden="true">10.</strong> ⭐Ambient Music</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/05-study-with-zombie.html"><strong aria-hidden="true">11.</strong> 🧟‍♀Study with Zombie</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/06-resident-anki.html"><strong aria-hidden="true">12.</strong> 🧟‍♀Resident Anki</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/07-️cat-gathering-in-anki.html"><strong aria-hidden="true">13.</strong> 🐈️Cat Gathering in Anki</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/08-️zen-mode.html"><strong aria-hidden="true">14.</strong> 🧘‍♀️Zen Mode</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/09-ankiterminator-sr-800.html"><strong aria-hidden="true">15.</strong> 🤖AnkiTerminator SR-800</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/11-mozartanki.html"><strong aria-hidden="true">16.</strong> 🎵Mozartanki</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/12-warriorwoman.html"><strong aria-hidden="true">17.</strong> ⚔️WarriorWoman and ArmorKnight</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/13-meowknight.html"><strong aria-hidden="true">18.</strong> 🐈MeowKnight</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/themes/14-redwitch.html"><strong aria-hidden="true">19.</strong> 🪄RedWitch and DarkWitch</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/how-to-use.html"><strong aria-hidden="true">20.</strong> ⚙️AnkiArcade How to use</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/02.-Change-Theme.html"><strong aria-hidden="true">20.1.</strong> 🎨Change Theme</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/03.-Card-status.html"><strong aria-hidden="true">20.2.</strong> 📊Card Status</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/04.-Progress-Bars.html"><strong aria-hidden="true">20.3.</strong> ⌛️Progress Bars</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/05.-Pomodoro-&-Break-Timer.html"><strong aria-hidden="true">20.4.</strong> ⏱️Pomodoro &amp; Break Timer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/06.-Sound.html"><strong aria-hidden="true">20.5.</strong> 🎵Sound</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/08.-Other.html"><strong aria-hidden="true">20.6.</strong> 📂Other</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/09.-Changelog.html"><strong aria-hidden="true">20.7.</strong> 📝Changelog</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/98.-Credit.html"><strong aria-hidden="true">20.8.</strong> 💖Credit</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiArcade/99.-Bug-Report.html"><strong aria-hidden="true">20.9.</strong> 🚨Bug Report</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Patreon add-ons</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="live-wallpaper.html"><strong aria-hidden="true">21.</strong> 🎞️Live Wallpaper (new)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="yearly-heatmap-generator.html"><strong aria-hidden="true">22.</strong> 🎂Yearly Heatmap Generator (new)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="new-card-farm/new-card-farm-02.html"><strong aria-hidden="true">23.</strong> 🌱New Card Farm 2</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="new-card-farm/new-card-farm-01.html"><strong aria-hidden="true">23.1.</strong> 🌱New Card Farm (Old ver)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="review-card-farm.html"><strong aria-hidden="true">24.</strong> 🌽Review Card Farm</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="progress-bar-for-anki.html"><strong aria-hidden="true">25.</strong> ⌛️Chunk Progressbar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pomotimer.html"><strong aria-hidden="true">26.</strong> 🍅PomoTimer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dino-timer.html"><strong aria-hidden="true">27.</strong> 🦖Dino Timer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Anki-Leaderboard-Plus.html"><strong aria-hidden="true">28.</strong> 🏆️Anki Leaderboard Plus</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="new-card-heatmap.html"><strong aria-hidden="true">29.</strong> 📅New Card Heatmap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="answer-text-feedback.html"><strong aria-hidden="true">30.</strong> 🚦Answer text feedback (new)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="easescouter.html"><strong aria-hidden="true">30.1.</strong> 🕶️EaseScouter</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="virtual-anki-pad.html"><strong aria-hidden="true">31.</strong> 🎮Virtual AnkiPad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="additional-animation-coins.html"><strong aria-hidden="true">32.</strong> 🎖️additional animation coins</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="top-toolbar-icons.html"><strong aria-hidden="true">33.</strong> 🎨Top toolbar icons</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="doomanki.html"><strong aria-hidden="true">34.</strong> 🔫Doomanki</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="just-anki-timer.html"><strong aria-hidden="true">35.</strong> 🔥Just Do It Anki Timer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="superfluous-button-bros.html"><strong aria-hidden="true">36.</strong> 🎮Superfluous Button Bros</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="an-ki-oh.html"><strong aria-hidden="true">37.</strong> 🎮An-Ki-Oh! Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="typingmaster-us-keyboard.html"><strong aria-hidden="true">38.</strong> ⌨TypingMaster US Shared Decks</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Popular Free add-ons</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="progress-bar.html"><strong aria-hidden="true">39.</strong> ⌛️Progress bar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-leaderboard.html"><strong aria-hidden="true">40.</strong> 🏆Anki Leaderboard</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-killstreaks.html"><strong aria-hidden="true">41.</strong> 🎖️Anki Killstreaks</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="zoom-23.html"><strong aria-hidden="true">42.</strong> 🔍Zoom for Anki</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pokemanki-gold.html"><strong aria-hidden="true">43.</strong> 🎮Pokemanki Gold</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="AnkiTerminator/anki_terminator_00.html"><strong aria-hidden="true">44.</strong> 🤖Anki Terminator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="no-distractions-full-screen.html"><strong aria-hidden="true">45.</strong> 🖥️No Distractions Full Screen</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="always-on-top.html"><strong aria-hidden="true">46.</strong> 🔝Always On Top</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-redesign.html"><strong aria-hidden="true">47.</strong> 🎨Anki Redesign</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="break-timer.html"><strong aria-hidden="true">48.</strong> ☕Break Timer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="enhance-main-window.html"><strong aria-hidden="true">49.</strong> 📊Enhance main window</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Free add-ons by Shige</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="deck-blur.html"><strong aria-hidden="true">50.</strong> 🧊Deck Blur(New!)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="text-shadow.html"><strong aria-hidden="true">51.</strong> 🐈‍⬛Text Shadow(New!)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="avoid-flicker.html"><strong aria-hidden="true">52.</strong> ❄️Avoid Flicker (New!)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-fade-in.html"><strong aria-hidden="true">53.</strong> 👻Anki Fade In</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="piper-tts.html"><strong aria-hidden="true">54.</strong> 🤖PiperTTS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ffmpeg-downloader.html"><strong aria-hidden="true">55.</strong> 🎬️FFmpeg Downloader</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="local-anki-server.html"><strong aria-hidden="true">56.</strong> 🌐Local Anki Server</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="today-again-count.html"><strong aria-hidden="true">57.</strong> 🎮Today Again Count</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="rearrange-home-addons.html"><strong aria-hidden="true">58.</strong> 📌Rearrange home addons</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tidyankibear.html"><strong aria-hidden="true">59.</strong> 🐻TidyAnkiBear</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bulk-image-downloader.html"><strong aria-hidden="true">60.</strong> 🦾Bulk Image Downloader</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="editor-auto-show-or-hide.html"><strong aria-hidden="true">61.</strong> 📝Editor auto show or hide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-discord-sidebar.html"><strong aria-hidden="true">62.</strong> 📱Anki Discord Sidebar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="auto-highlight-cloze-in-browser.html"><strong aria-hidden="true">63.</strong> 🖌️Auto Highlight Cloze in Browser</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="review-highlighter.html"><strong aria-hidden="true">64.</strong> 🖍️Review Highlighter</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="skip-anki-home-and-deck-overview.html"><strong aria-hidden="true">65.</strong> ⏩️Skip Anki home and deck overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hide-leech_notification.html"><strong aria-hidden="true">66.</strong> 🩸Hide Leech Notification</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="rewrite-text-of-study-cards.html"><strong aria-hidden="true">67.</strong> 🎨Rewrite text of study cards</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="discord-rp-for-anki-leaderboard.html"><strong aria-hidden="true">68.</strong> 📱Discord RP for Anki Leaderboard</a></span></li><li class="chapter-item "><li class="part-title">For Development add-ons</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-restart-v2.html"><strong aria-hidden="true">69.</strong> 🔂AnkiRestart V2 (New!)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ankirestart.html"><strong aria-hidden="true">69.1.</strong> 🔂AnkiRestart V1 (Old)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="debug_info.html"><strong aria-hidden="true">70.</strong> 🐞Custom Debug Info</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="meta_json_fomatter.html"><strong aria-hidden="true">71.</strong> ⚙️Meta json Formatter</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="save_and_load_enable_add-ons.html"><strong aria-hidden="true">72.</strong> 📥Addon Bug Detector</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="disable_update_addons.html"><strong aria-hidden="true">73.</strong> ⛔Disable update addons</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="patreon-card-generator.html"><strong aria-hidden="true">74.</strong> 💖Patreon Card Generator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mini-console.html"><strong aria-hidden="true">75.</strong> 🔧Mini Console</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Fixed add-ons</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="fixed_addons.html"><strong aria-hidden="true">76.</strong> 🛠️Fix Broken Anki Add-ons Q&amp;A</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="immersion-kit-dl.html"><strong aria-hidden="true">77.</strong> 🍣Immersion Kit downloader</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="colorful-browse-sidebar.html"><strong aria-hidden="true">78.</strong> 🎨Colorful Browse Sidebar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-time.html"><strong aria-hidden="true">79.</strong> 🔔Anki Time</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chinese-dictionary.html"><strong aria-hidden="true">80.</strong> 🐼Chinese dictionary CC-CEDICT</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chinese-words-finder.html"><strong aria-hidden="true">81.</strong> 🐼Chinese Words Finder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="quick-change-deck.html"><strong aria-hidden="true">82.</strong> 🪶Quick change deck</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="confirm-deletion-of-the-card-in-reviewer.html"><strong aria-hidden="true">83.</strong> ❓️Confirm deletion </a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="search-from-editor.html"><strong aria-hidden="true">84.</strong> 🔍️Search from Editor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="image-editor.html"><strong aria-hidden="true">85.</strong> 🖼️Image Editor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chinese-support-v4.html"><strong aria-hidden="true">86.</strong> 🐼Chinese Support V4</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="search-bar.html"><strong aria-hidden="true">87.</strong> 🔍️Search Bar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nbsp-remover.html"><strong aria-hidden="true">88.</strong> 🧹nbsp Remover</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-tooltip.html"><strong aria-hidden="true">89.</strong> 💬Anki Tooltip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="toggle-tag.html"><strong aria-hidden="true">90.</strong> 🏷️Toggle Tags via Context Menu</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="editor-live-preview.html"><strong aria-hidden="true">91.</strong> 📺️Editor Live Preview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="syntax-highlighter.html"><strong aria-hidden="true">92.</strong> ⚡️Syntax Highlighter</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="search-pdf.html"><strong aria-hidden="true">93.</strong> 📖Searching PDF Reading and Note-Taking in Add Dialog</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="review-lookup.html"><strong aria-hidden="true">94.</strong> 🔍️Review Lookup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-spell-checker.html"><strong aria-hidden="true">95.</strong> ✅️Anki Spell Checker</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="KanjiVocab.html"><strong aria-hidden="true">96.</strong> 🍣KanjiVocab</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kanji_unlocked.html"><strong aria-hidden="true">97.</strong> 🔓️Kanji Unlock Addon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ankicord.html"><strong aria-hidden="true">98.</strong> 📱AnkiCord</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ankimote.html"><strong aria-hidden="true">99.</strong> 🕹️Ankimote</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expand-collapse-deck.html"><strong aria-hidden="true">100.</strong> 📂expand collapse deck</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="advanced-answer-sound.html"><strong aria-hidden="true">101.</strong> 🎧️Advanced Answer sound</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="leech-toolkit.html"><strong aria-hidden="true">102.</strong> 🩸Leech Toolkit</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="no-space-dash.html"><strong aria-hidden="true">103.</strong> 🏃🏻No Space Dash</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preview-slideshow.html"><strong aria-hidden="true">104.</strong> ⏩Preview Slideshow</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="rendered-browser.html"><strong aria-hidden="true">105.</strong> 🔍Rendered Browser</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-ocr.html"><strong aria-hidden="true">106.</strong> 📸Anki OCR</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pasteocr.html"><strong aria-hidden="true">107.</strong> 📸PasteOCR</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tag-statistics.html"><strong aria-hidden="true">108.</strong> 📊Tag Statistics</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="syllabus.html"><strong aria-hidden="true">109.</strong> 📊Syllabus</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stats-plus.html"><strong aria-hidden="true">110.</strong> 📊Stats Plus</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graph-view.html"><strong aria-hidden="true">111.</strong> 🪄Graph View</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="simple-timer-and-stopwatch.html"><strong aria-hidden="true">112.</strong> ⏰️Simple Timer and Stopwatch</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="random-sprites.html"><strong aria-hidden="true">113.</strong> 🎮Random Sprites</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="remove-tooltip.html"><strong aria-hidden="true">114.</strong> 👻Remove tooltip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ankipet.html"><strong aria-hidden="true">115.</strong> 🐤AnkiPet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="annies-cat-emporium.html"><strong aria-hidden="true">116.</strong> 🐈️Annie&#39;s Cat Emporium</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="answer-feedback-as-ankimote.html"><strong aria-hidden="true">117.</strong> 🎮️Answer feedback as Ankimote</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beeline.html"><strong aria-hidden="true">118.</strong> 🐝BeeLine</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sync-to-obsidian.html"><strong aria-hidden="true">119.</strong> 🪨Sync to Obsidian</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="forvo-pronunciation-downloader.html"><strong aria-hidden="true">120.</strong> 🔊Forvo Pronunciation Downloader</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="google-dictionary.html"><strong aria-hidden="true">121.</strong> 📚Google Dictionary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hanseido.html"><strong aria-hidden="true">122.</strong> 🌶️Hanseido</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-ipa.html"><strong aria-hidden="true">123.</strong> 🔊Anki IPA</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="browser-external-editor.html"><strong aria-hidden="true">124.</strong> 📝Browser external editor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="add-note-id.html"><strong aria-hidden="true">125.</strong> 🆔Add note ID</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="reset-card-scheduling.html"><strong aria-hidden="true">126.</strong> 🗑️Reset Card Scheduling</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="copy-notes.html"><strong aria-hidden="true">127.</strong> 📋Copy notes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pdf-to-notes.html"><strong aria-hidden="true">128.</strong> 📥PDF to notes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="multi-deck-importer.html"><strong aria-hidden="true">129.</strong> 📥Multi Deck Importer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="templates-import-and-export.html"><strong aria-hidden="true">130.</strong> 📤Templates Import and Export</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trigger-and-actions.html"><strong aria-hidden="true">131.</strong> 🔗Trigger and actions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="scroll-in-reviewer.html"><strong aria-hidden="true">132.</strong> 🖱️Scroll in reviewer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ankiconect-downgrader.html"><strong aria-hidden="true">133.</strong> 🔙AnkiConect Downgrader</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-delimiters-replacer.html"><strong aria-hidden="true">134.</strong> 🧮Math Delimiters Replacer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="add-media-easy.html"><strong aria-hidden="true">135.</strong> 🖼️Add media easy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="history-recorder.html"><strong aria-hidden="true">136.</strong> 💾History Recorder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="readable-addons-folder.html"><strong aria-hidden="true">137.</strong> 📂Readable Addons Folder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="enable-https.html"><strong aria-hidden="true">138.</strong> 🛡️Enable HTTPS</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">⚠️broken</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki-buddy.html"><strong aria-hidden="true">139.</strong> 🦉AnkiBuddy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dict2anki.html"><strong aria-hidden="true">140.</strong> 🐼Dict2Anki</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">💤No longer needed</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="deck-browser-css.html"><strong aria-hidden="true">141.</strong> 🎨Deck Browser CSS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="deepl-translator.html"><strong aria-hidden="true">142.</strong> 🌍DeepL Translator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="leaderboard-patch-installer.html"><strong aria-hidden="true">143.</strong> 🎮️LeaderBoard Patch Installer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="remaining-time.html"><strong aria-hidden="true">144.</strong> ⌛️Remaining time</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="transfer-scheduling-data.html"><strong aria-hidden="true">145.</strong> 🚚Transfer scheduling data</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Translation</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki_manuals_jp.html"><strong aria-hidden="true">146.</strong> 📖Jp Anki Manuals </a></span></li><li class="chapter-item "><li class="spacer"></li></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

