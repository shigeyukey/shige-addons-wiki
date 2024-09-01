
![banner](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/8141ce68-9f0a-4eb9-8f99-e418a879baa2)


[![reddit](https://github.com/shigeyukey/AnkiRestart/assets/124401518/85368aad-6f50-4335-8858-7a30a66fb065)](https://www.reddit.com/user/Shige-yuki)

#####   [ [ Github Issues ] ](https://github.com/shigeyukey/Anki-Terminator-/issues)

AI sidebar for reviews. <br>
Just login to use ChatGPT, GoogleBard, and Bing Chat for free and easy.<br>
(No OpenAI API required).<br>
There is a feature to auto-send prompts when flipping Anki cards.<br>

\[ add-on code : `1428126516` ] <br> 

#### \[ ▲ Attention ]
 This add-on stores your login information in a Cookie.<br>
 If you are concerned about security, please do not use this add-on.<br>
(To delete the cookie, delete the add-on or delete the User_files folder.)<br>

*  Advantages of using cookie
    * No need for tedious 2-step authentication
    * Free AI can be used as much as you want (no need for API)
<br>
*  Disadvantages of using cookie 
    * Poor security
    * Add-on is easily broken<br>

To resolve this cookie issue, API is needed (in short, it will be paid for).<br>
I have not yet developed the function to use the API.<br>

#### \[ Limits of each AI ]<br>
 * **Chat GPT**
    * The fastest, but has an hourly limit<br>
 (30 times per hour, so about 1 time every 2 minutes), <br>
 so if you use it continuously, it will reach the limit soon.
 * **Google Bard** 
    * Unlimited number of replies, but replies are a bit slow.
 * **Bing Chat** 
    * 30 chats per session and 300 chats per day, but GPT-4 is free.
<br>

## How to Use



![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/29e4db70-2b95-4613-84b7-f4261d49cc92)<br>

When the add-on is installed, the ChatGPT icon will be added to the right side of the top toolbar.<br>
Clicking on it will open the AI sidebar.<br>


## Sidebar

* Change AI : Click to change the AI.
* AutoSendPronpt : Automatically sends prompts when card answer is shown and when Pronpts button is pressed.
* Field Name : The text of the field used in prompts is automatically inputted.
 * Right click : You can enter text in this box by right-clicking.
 * Select text in Anki -> Right click -> Chat GPT
* Pronpts Buttons : Input prompts into ChatGPT.
* Option : Open the Options dialog.


![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/4a6aa260-407f-412e-82c9-3df052ecef71)<br>

## Options

### 1.Always tab

*  AI : ChatGPT, GoogleBard, BingChat
*  Translate : The default prompt is English, so non-native English speakers cannot use it,<br>
   but you can request translation to ChatGPT using prompts.<br>
   The "{}" is auto-replaced with the language used by Anki.<br>

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/cacdeb42-663f-4724-8bd5-94a67daf17df)<br>

### 2.Prompts tab

You can customize the name of each prompt and button.<br>
{} will be replaced by field text.<br>

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/49657f12-7dd0-421b-84d1-bd8715f82dc2)<br>


### 3.Tags tab

If you use a special tag, you can tell ChatGPT that you are studying that tag.<br>
{} will be replaced by tag.<br>

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/8f0b6011-91eb-493d-88e9-28a82c71e7f6)<br>

### 4.Priority Fields tab

This add-on grabs the text to be used in the prompt from the first field.<br>
You can specify which fields are to be prioritized.<br>

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/237ea7b3-fc17-4988-bf13-c0dc65f48bed)<br>

### 4. Exclude tab

Does not grab the text from the field by the specified note type.<br>
For example, image occlusion cannot be used because there is no text.<br>

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/9185a136-08b9-4a85-812c-f39fe98bc1f8)<br>

### 5. Other tab

* Sidebar
* AutoPrompt
 * auto input : Automatically prompts when card answer is shown.
 * auto send : Automatically sends prompts when card answer is shown.
* Shortcut Keys
  * Send pronpts : The prompts you enter can be send using shortcut keys.
  * Open Sidebar

![image](https://github.com/shigeyukey/Anki-Terminator-/assets/124401518/9952f1b2-b95a-4809-ac4b-50a28cf1b0a2)