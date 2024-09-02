
![banner](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/8141ce68-9f0a-4eb9-8f99-e418a879baa2)


[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.patreon.com/Shigeyuki)

**Report->**
[ **RateThis**<!--🟢--> ](https://ankiweb.net/shared/review/1428126516) 
|[ **Reddit** ](https://new.reddit.com/r/Anki/comments/1b0eybn/simple_fix_of_broken_addons_for_the_latest_anki/)
| [ **Forums**](https://forums.ankiweb.net/t/addon-support-ankiterminator-chatgpt-sidebar-for-anki-review-googlebard-bingchat-by-shige/41090)
| [ **Github**<!--🟢--> ](https://github.com/shigeyukey/Anki-Terminator-/issues)
| [ **Patreon** ](https://www.patreon.com/Shigeyuki)



AI sidebar for reviews. Just login to use ChatGPT, GoogleGemini, and Bing Chat for free and easy, no OpenAI API required.There is a feature to auto-send prompts when flipping Anki cards.<br>

| [**Add-on page**](https://ankiweb.net/shared/info/1428126516)
| **add-on code:** `1428126516` <br>



<iframe width="560" height="315" src="https://www.youtube.com/embed/rLXM63Jc8ng" frameborder="0" allowfullscreen></iframe>




##  ▲ Attention
 This add-on stores your login information in a Cookie. If you are concerned about security, please do not use this add-on. (To delete the cookie, delete the add-on or delete the User_files folder.)<br>

*  ➕️ Advantages of using cookie<br>
    * No need for tedious 2-step authentication
    * Free AI can be used as much as you want (no need for API)
<br>
*  ➖️ Disadvantages of using cookie<br>
    * Poor security.
    * Add-on is easily broken.<br>

To resolve this cookie issue, API is needed (in short, it will be paid for). I have not yet developed the function to use the API.<br>

### Limits of each AI<br>
 * **Chat GPT**<br>
    * The fastest, but has an hourly limit (30 times per hour, so about 1 time every 2 minutes), so if you use it continuously, it will reach the limit soon.
 * **Google Gemini**<br>
    * Unlimited number of replies, but replies are a bit slow.
    * Edit : 
 * **Bing Chat**<br>
    * 30 chats per session and 300 chats per day, but GPT-4 is free.


### 🛠️Known Issues
* Mac Anki23.12.1 cannot open Bird and Bing(ChatGPT is good), but Mac23.12 can. This problem is a Qt issue, so perhaps the latest Anki update will fix it when Qt is updated.


<br>
<br>


## 📖How to Use


- [▲ Attention](#-attention)
  - [Limits of each AI](#limits-of-each-ai)
  - [🛠️Known Issues](#️known-issues)
- [📖How to Use](#how-to-use)
  - [Sidebar](#sidebar)
- [Options](#options)
  - [Always tab](#always-tab)
  - [Prompts tab](#prompts-tab)
  - [Tags tab](#tags-tab)
  - [Priority Fields tab](#priority-fields-tab)
  - [Exclude tab](#exclude-tab)
  - [Other tab](#other-tab)
- [📥 How do I install this add-on?](#-how-do-i-install-this-add-on)


<br><br>



![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/29e4db70-2b95-4613-84b7-f4261d49cc92)<br>

When the add-on is installed, the ChatGPT icon will be added to the right side of the top toolbar.<br>
Clicking on it will open the AI sidebar.<br>

<br>
<br>



### Sidebar

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/4a6aa260-407f-412e-82c9-3df052ecef71)<br>


* **Change AI:** Click to change the AI.
* **Auto Send Pronpts:** Automatically sends prompts when card answer is shown and when Pronpts button is pressed.
* **Field Name:** The text of the field used in prompts is automatically inputted.
  * **Right click:** You can enter text in this box by right-clicking.
  * Select text in Anki -> Right click -> Chat GPT
* **Pronpts Buttons:** Input prompts into ChatGPT.
* **Option:** Open the Options dialog.


<br>


## Options

### Always tab

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/cacdeb42-663f-4724-8bd5-94a67daf17df)<br>

*  AI : ChatGPT, GoogleGemini, BingChat
*  Translate : The default prompt is English, so non-native English speakers cannot use it,<br>
   but you can request translation to ChatGPT using prompts.<br>
   The "{}" is auto-replaced with the language used by Anki.<br>


<br>

### Prompts tab

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/49657f12-7dd0-421b-84d1-bd8715f82dc2)<br>


* You can customize the name of each prompt and button.<br>
* `{}` will be replaced by field text.<br>


<br>

### Tags tab

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/8f0b6011-91eb-493d-88e9-28a82c71e7f6)<br>

* If you use a special tag, you can tell ChatGPT that you are studying that tag.<br>
* `{}` will be replaced by tag.<br>



<br>

### Priority Fields tab

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/237ea7b3-fc17-4988-bf13-c0dc65f48bed)<br>

* This add-on grabs the text to be used in the prompt from the first field. You can specify which fields are to be prioritized.<br>



<br>

### Exclude tab

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/9185a136-08b9-4a85-812c-f39fe98bc1f8)<br>

* Does not grab the text from the field by the specified note type. E.g. image occlusion cannot be used because there is no text.<br>



<br>

### Other tab

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/9952f1b2-b95a-4809-ac4b-50a28cf1b0a2)

* Sidebar
* AutoPrompt
 * auto input : Automatically prompts when card answer is shown.
 * auto send : Automatically sends prompts when card answer is shown.
* Shortcut Keys
  * Send pronpts : The prompts you enter can be send using shortcut keys.
  * Open Sidebar




<br>


## 📥 How do I install this add-on?
1. Copy and paste the add-on code ( `1428126516` )  into Anki and you can install it. ( Menu -> Tools -> Add-ons -> Get Add-ons -> Code : add-on code )
2. When I develop bug fixes, create new features, or compatibility for New Anki, I will notify you and you can install it.
3. If you rate and recommend it, I will receive a notice and my tedious and sleepy add-ons volunteer work will become more enjoyable and exciting.(This add-on is developed by free volunteer work!👍️)

[Click here and please Rate this add-on, Thank you! :-) <br>
 ![Please rate this](https://raw.githubusercontent.com/shigeyukey/my_addons/main/media_files/rate_this.gif)](https://ankiweb.net/shared/review/1428126516)

 [**Read Reviews**](https://ankiweb.net/shared/info/1428126516#:~:text=Remove-,Reviews,-on%202024%2D08)