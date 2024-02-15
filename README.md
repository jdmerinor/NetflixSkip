Netflix Skip
===============

A lightweight browser extension that takes back your time on Netflix. No more waiting for the next episode or seeing the intro yet again!

Install the extension from the Chrome or Firefox web store:

(CHANGE ONCE CORRECT LINKS ARE CREATED)
[<img src="https://user-images.githubusercontent.com/13658335/138092194-303708fb-9a4e-4e3f-a1dc-74baff1e45c9.png" height="59"/>](https://chrome.google.com/webstore/detail/nflxintroskip-netflix-int/jiindpkmmoompocmhgnfabfhlhniolpl)
[<img src="https://user-images.githubusercontent.com/13658335/138086366-8deee659-16c3-4621-b3f0-eaf4cb6ed9ba.png" height="60"/>](https://addons.mozilla.org/en-GB/firefox/addon/nflxintroskip/)

Features
---------
- Automatically click on the Skip Intro button on Netflix
- Automatically click on the Next Episode button on Netflix
- Install and forget, there's no configuration
- Minimal footprint and zero overhead, only contains the absolute bare minimum to perform its function
- No analytics
- Free and open source

Build
------------
Requires Node.js. Output is in the `build` directory.
```
git clone https://github.com/jdmerinor/NetflixSkip.git
cd NetflixSkip
npm install
npm run build
```

How it works
------
The extension works as a content-script that monitors changes in the DOM using `MutationObserver` and looks for the appearance of the Skip Intro or the Next Episode button. If it finds it, it evokes `click()` on it.

Notes
------
- If Netflix doesn't show the Skip Intro button, the extension can't click on it. This will be the case for shows with short intros, or if you play the first episode of a show. The button will typically appear for subsequent episodes and the extension will work normally.
- The extension works fine alongside other Netflix-enhancing extensions (such as [NflxMultiSubs](https://github.com/gmertes/NflxMultiSubs)).
- It should work for all languages.
- I extended this plugin from https://github.com/gmertes/NflxIntroSkip because I wanted to skip also the wait on the Next Episode button.
- If it doesn't work, please open an Issue.
- The extension is and will remain free.
