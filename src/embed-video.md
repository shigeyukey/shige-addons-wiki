# 🎞️ Embed Video for Anki

<!-- 

**[AnkiWeb Page](https://ankiweb.net/shared/info/🟢) | Code : `🟢`**
contact
https://shigeyukey.github.io/shige-addons-wiki/contact.html
 -->

This add-on embeds videos into Anki cards automatically. This allows you to display a small video within the card without popping up the video player. (Video size: 240p, 426px wide)





This embedded video is for display purposes only, the add-on does not directly change the card content or templates. So if you disable the add-on the video display will revert to its original state.

When Anki launches this add-on auto generates small embedded videos. The generated videos are saved locally in the add-on folder. Therefore, these videos will not put a strain on your AnkiWeb server (Sync).

If video conversion is too slow or fails, please install ffmpeg on your PC. If ffmpeg is already installed and available on your PC, the add-on will auto use ffmpeg to convert the video as quickly as possible.


If there are multiple videos or audio tracks, the embedded video will not autoplay. (Because the audio tracks would overlap.)

The embedded video will not be displayed while the video is still being generated. Instead, the MPV video player will pop up as usual. In this case please check the progress using the “Convert Video” option.
