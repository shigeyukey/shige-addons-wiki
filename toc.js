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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><li class="part-title">Shige Add-ons Wiki</li><li class="chapter-item "><a href="intro.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item "><a href="contact.html"><strong aria-hidden="true">2.</strong> 📨Report and Request</a></li><li class="chapter-item affix "><li class="part-title">AnkiArcade</li><li class="chapter-item "><a href="AnkiArcade/Home.html"><strong aria-hidden="true">3.</strong> ⚔️️Anki Arcade</a></li><li class="chapter-item "><a href="AnkiArcade/themes/01-anki-knights--doragons.html"><strong aria-hidden="true">4.</strong> ⚔️Anki Knights &amp; Doragons</a></li><li class="chapter-item "><a href="AnkiArcade/themes/02-little-ankimares.html"><strong aria-hidden="true">5.</strong> 💎Little Ankimares</a></li><li class="chapter-item "><a href="AnkiArcade/themes/03-catgirl--sushi.html"><strong aria-hidden="true">6.</strong> 🐈CatGirl &amp; Sushi</a></li><li class="chapter-item "><a href="AnkiArcade/themes/04-ambiebt-music.html"><strong aria-hidden="true">7.</strong> ⭐Ambient Music</a></li><li class="chapter-item "><a href="AnkiArcade/themes/05-study-with-zombie.html"><strong aria-hidden="true">8.</strong> 🧟‍♀Study with Zombie</a></li><li class="chapter-item "><a href="AnkiArcade/themes/06-resident-anki.html"><strong aria-hidden="true">9.</strong> 🧟‍♀Resident Anki</a></li><li class="chapter-item "><a href="AnkiArcade/themes/07-️cat-gathering-in-anki.html"><strong aria-hidden="true">10.</strong> 🐈️Cat Gathering in Anki</a></li><li class="chapter-item "><a href="AnkiArcade/themes/08-️zen-mode.html"><strong aria-hidden="true">11.</strong> 🧘‍♀️Zen Mode</a></li><li class="chapter-item "><a href="AnkiArcade/themes/09-ankiterminator-sr-800.html"><strong aria-hidden="true">12.</strong> 🤖AnkiTerminator SR-800</a></li><li class="chapter-item "><a href="AnkiArcade/themes/10-virtual-ankipad.html"><strong aria-hidden="true">13.</strong> 🎮Virtual AnkiPad</a></li><li class="chapter-item "><a href="AnkiArcade/themes/11-mozartanki.html"><strong aria-hidden="true">14.</strong> 🎵Mozartanki</a></li><li class="chapter-item "><a href="AnkiArcade/themes/12-warriorwoman.html"><strong aria-hidden="true">15.</strong> ⚔️WarriorWoman and ArmorKnight</a></li><li class="chapter-item "><a href="AnkiArcade/themes/13-meowknight.html"><strong aria-hidden="true">16.</strong> 🐈MeowKnight</a></li><li class="chapter-item "><a href="AnkiArcade/themes/14-redwitch.html"><strong aria-hidden="true">17.</strong> 🪄RedWitch and DarkWitch</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="AnkiArcade/how-to-use.html"><strong aria-hidden="true">18.</strong> ⚙️AnkiArcade How to use</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="AnkiArcade/02.-Change-Theme.html"><strong aria-hidden="true">18.1.</strong> 🎨Change Theme</a></li><li class="chapter-item "><a href="AnkiArcade/03.-Card-status.html"><strong aria-hidden="true">18.2.</strong> 📊Card Status</a></li><li class="chapter-item "><a href="AnkiArcade/04.-Progress-Bars.html"><strong aria-hidden="true">18.3.</strong> ⌛️Progress Bars</a></li><li class="chapter-item "><a href="AnkiArcade/05.-Pomodoro-&-Break-Timer.html"><strong aria-hidden="true">18.4.</strong> ⏱️Pomodoro &amp; Break Timer</a></li><li class="chapter-item "><a href="AnkiArcade/06.-Sound.html"><strong aria-hidden="true">18.5.</strong> 🎵Sound</a></li><li class="chapter-item "><a href="AnkiArcade/08.-Other.html"><strong aria-hidden="true">18.6.</strong> 📂Other</a></li><li class="chapter-item "><a href="AnkiArcade/09.-Changelog.html"><strong aria-hidden="true">18.7.</strong> 📝Changelog</a></li><li class="chapter-item "><a href="AnkiArcade/98.-Credit.html"><strong aria-hidden="true">18.8.</strong> 💖Credit</a></li><li class="chapter-item "><a href="AnkiArcade/99.-Bug-Report.html"><strong aria-hidden="true">18.9.</strong> 🚨Bug Report</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Patreon add-ons</li><li class="chapter-item "><a href="Anki-Leaderboard-Plus.html"><strong aria-hidden="true">19.</strong> 🏆️Anki Leaderboard Plus</a></li><li class="chapter-item "><a href="progress-bar-for-anki.html"><strong aria-hidden="true">20.</strong> ⌛️Chunk Progressbar</a></li><li class="chapter-item "><a href="new-card-farm/new-card-farm-02.html"><strong aria-hidden="true">21.</strong> 🌱New Card Farm 2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="new-card-farm/new-card-farm-01.html"><strong aria-hidden="true">21.1.</strong> 🌱New Card Farm (Old ver)</a></li></ol></li><li class="chapter-item "><a href="new-card-heatmap.html"><strong aria-hidden="true">22.</strong> 📅New Card Heatmap</a></li><li class="chapter-item "><a href="additional-animation-coins.html"><strong aria-hidden="true">23.</strong> 🎖️additional animation coins</a></li><li class="chapter-item "><a href="top-toolbar-icons.html"><strong aria-hidden="true">24.</strong> 🎨Top toolbar icons</a></li><li class="chapter-item "><a href="doomanki.html"><strong aria-hidden="true">25.</strong> 🔫Doomanki</a></li><li class="chapter-item "><a href="easescouter.html"><strong aria-hidden="true">26.</strong> 🕶️EaseScouter</a></li><li class="chapter-item "><a href="pomotimer.html"><strong aria-hidden="true">27.</strong> 🍅PomoTimer</a></li><li class="chapter-item "><a href="dino-timer.html"><strong aria-hidden="true">28.</strong> 🦖Dino Timer</a></li><li class="chapter-item "><a href="just-anki-timer.html"><strong aria-hidden="true">29.</strong> 🔥Just Do It Anki Timer</a></li><li class="chapter-item "><a href="superfluous-button-bros.html"><strong aria-hidden="true">30.</strong> 🎮Superfluous Button Bros</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="an-ki-oh.html"><strong aria-hidden="true">31.</strong> 🎮An-Ki-Oh! Template</a></li><li class="chapter-item "><a href="typingmaster-us-keyboard.html"><strong aria-hidden="true">32.</strong> ⌨TypingMaster US Shared Decks</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Popular Free add-ons</li><li class="chapter-item "><a href="progress-bar.html"><strong aria-hidden="true">33.</strong> ⌛️Progress bar</a></li><li class="chapter-item "><a href="anki-leaderboard.html"><strong aria-hidden="true">34.</strong> 🏆Anki Leaderboard</a></li><li class="chapter-item "><a href="anki-killstreaks.html"><strong aria-hidden="true">35.</strong> 🎖️Anki Killstreaks</a></li><li class="chapter-item "><div><strong aria-hidden="true">36.</strong> 🔍Zoom 23</div></li><li class="chapter-item "><a href="pokemanki-gold.html"><strong aria-hidden="true">37.</strong> 🎮Pokemanki Gold</a></li><li class="chapter-item "><a href="AnkiTerminator/anki_terminator_00.html"><strong aria-hidden="true">38.</strong> 🤖Anki Terminator</a></li><li class="chapter-item "><div><strong aria-hidden="true">39.</strong> 🖥️No Distractions Full Screen</div></li><li class="chapter-item "><div><strong aria-hidden="true">40.</strong> 🔝Always On Top</div></li><li class="chapter-item "><div><strong aria-hidden="true">41.</strong> 🎨Anki Redesign</div></li><li class="chapter-item "><a href="ankirestart.html"><strong aria-hidden="true">42.</strong> 🔂AnkiRestart</a></li><li class="chapter-item "><a href="break-timer.html"><strong aria-hidden="true">43.</strong> ☕Break Timer</a></li><li class="chapter-item "><a href="enhance-main-window.html"><strong aria-hidden="true">44.</strong> 📊Enhance main window</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Free add-ons</li><li class="chapter-item "><a href="today-again-count.html"><strong aria-hidden="true">45.</strong> 🎮Today Again Count</a></li><li class="chapter-item "><a href="debug_info.html"><strong aria-hidden="true">46.</strong> 🐞Custom Debug Info</a></li><li class="chapter-item "><div><strong aria-hidden="true">47.</strong> Shige add-ons</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">47.1.</strong> 📌Rearrange home addons</div></li><li class="chapter-item "><div><strong aria-hidden="true">47.2.</strong> 🐻TidyAnkiBear</div></li><li class="chapter-item "><div><strong aria-hidden="true">47.3.</strong> 🦾Bulk Image Downloader</div></li><li class="chapter-item "><div><strong aria-hidden="true">47.4.</strong> 📝Editor auto show or hide</div></li><li class="chapter-item "><div><strong aria-hidden="true">47.5.</strong> 📱Anki Discord Sidebar</div></li><li class="chapter-item "><div><strong aria-hidden="true">47.6.</strong> 🖌️Auto Highlight Cloze in Browser</div></li><li class="chapter-item "><div><strong aria-hidden="true">47.7.</strong> 🖍️Review Highlighter</div></li><li class="chapter-item "><div><strong aria-hidden="true">47.8.</strong> ⏩️Skip Anki home and deck overview</div></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Fixed add-ons</li><li class="chapter-item "><a href="fixed_addons.html"><strong aria-hidden="true">48.</strong> 🛠️Fix Broken Anki Add-ons Q&amp;A</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="KanjiVocab.html"><strong aria-hidden="true">49.</strong> 🍣KanjiVocab</a></li><li class="chapter-item "><a href="kanji_unlocked.html"><strong aria-hidden="true">50.</strong> 🔓️Kanji Unlock Addon</a></li><li class="chapter-item "><a href="ankicord.html"><strong aria-hidden="true">51.</strong> 📱AnkiCord</a></li><li class="chapter-item "><a href="ankimote.html"><strong aria-hidden="true">52.</strong> 🕹️Ankimote</a></li><li class="chapter-item "><div><strong aria-hidden="true">53.</strong> Fixed add-ons</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">53.1.</strong> 🩸Leech Toolkit</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.2.</strong> 🏃🏻No Space Dash</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.3.</strong> ⏩Preview Slideshow</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.4.</strong> 🔍Rendered Browser</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.5.</strong> 📸Anki OCR</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.6.</strong> 📸PasteOCR</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.7.</strong> 📊Tag Statistics</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.8.</strong> 📊Syllabus</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.9.</strong> 🪄Graph View</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.10.</strong> ⏰️Simple Timer and Stopwatch</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.11.</strong> 🎮Random Sprites</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.12.</strong> 👻Remove tooltip</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.13.</strong> 🐤AnkiPet</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.14.</strong> 🐈️Annie&#39;s Cat Emporium</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.15.</strong> 🎮️Answer feedback as Ankimote</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.16.</strong> 🐝BeeLine</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.17.</strong> 🪨Sync to Obsidian</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.18.</strong> 🔊Forvo Pronunciation Downloader</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.19.</strong> 📚Google Dictionary</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.20.</strong> 🐼Dict2Anki</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.21.</strong> 🌶️Hanseido</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.22.</strong> 🔊Anki IPA</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.23.</strong> 📝Browser external editor</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.24.</strong> 🆔Add note ID</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.25.</strong> 🗑️Reset Card Scheduling</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.26.</strong> 📋Copy notes</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.27.</strong> 📥PDF to notes</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.28.</strong> 🚚Transfer scheduling</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.29.</strong> 📥Multi Deck Importer</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.30.</strong> 📤Templates Import and Export</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.31.</strong> 🔗Trigger and actions</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.32.</strong> 🖱️Scroll in reviewer</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.33.</strong> 🔙AnkiConect Downgrader</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.34.</strong> 🧮Math Delimiters Replacer</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.35.</strong> 🖼️Add media easy</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.36.</strong> 💾History Recorder</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.37.</strong> 📂Readable Addons Folder</div></li><li class="chapter-item "><div><strong aria-hidden="true">53.38.</strong> 🛡️Enable HTTPS</div></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><div><strong aria-hidden="true">54.</strong> ⚠️broken</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">54.1.</strong> Confirm deletion of the card in Reviewer</div></li><li class="chapter-item "><div><strong aria-hidden="true">54.2.</strong> Stats Plus</div></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><div><strong aria-hidden="true">55.</strong> 💤No longer needed</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">55.1.</strong> 🎨Deck Browser CSS</div></li><li class="chapter-item "><div><strong aria-hidden="true">55.2.</strong> 🌍DeepL Translator</div></li><li class="chapter-item "><div><strong aria-hidden="true">55.3.</strong> 🎮️LeaderBoard Patch Installer</div></li><li class="chapter-item "><div><strong aria-hidden="true">55.4.</strong> ⌛️Remaining time</div></li><li class="chapter-item "><div><strong aria-hidden="true">55.5.</strong> 🚚Transfer scheduling data</div></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Translation</li><li class="chapter-item "><a href="anki_manuals_jp.html"><strong aria-hidden="true">56.</strong> 📖Jp Anki Manuals </a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Q &amp; A</li><li class="chapter-item "><div><strong aria-hidden="true">57.</strong> Q &amp; A</div></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);