---
title: 'How to hide YouTube Shorts, Playables, and Breaking News'
descriptions: "I rediscovered Greasemonkey years after I learned to code and was able to tweak YouTube to hide the sections I don't want to see"
publishedAt: 2025-01-21
updatedAt: 2025-01-21
tags: ['snippet', 'userscripts', 'greasemonkey', 'tampermonkey', 'violentmonkey']
---

# How to hide YouTube Shorts, Playables, and Breaking News

🔗 [Jump straight to the script](#hide-shorts-hide-playables-hide-breaking-new)

## Rediscovering Greasemonkey
Years ago, when Firefox was a dominant force, when Lifehacker didn't feel like every other attention sucking site, when I still dreamed of learning to code some day - in those days there was a Firefox extension called [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/). 

Greasemonkey allowed you to change the way a website worked or looked. You could code them yourself if you knew the secret magic. Or, like the rest of us, you could download other people's scripts and experience the magic they created.

I used it for a few things like tweaking Facebook's interface, but it was lost in time and space for me. I hadn't thought about it in years...until yesterday.

I said to myself, "I wish I could just turn all this stuff I don't care about (namely Shorts and Playables) and only see only video thumbnails. (pause) Wasn't there a somthing-monkey extension I used to use?"

It turns out Greasemonkey is still around. There is a more popular [TamperMonkey](https://www.tampermonkey.net/) and another option, [ViolentMonkey](https://violentmonkey.github.io/). These latter 2 work in Brave (Chrome), which is my daily driver browser now.

And now that I'm a developer, it turns out adding my own custom script is pretty easy. 

I installed TamperMonkey and 30 minutes later had written the following script to make YouTube bend to my will.

## Hide Shorts. Hide Playables. Hide Breaking News.
```js
// ==UserScript==
// @name         Remove YouTube Shorts, Playables, Breaking News
// @namespace    https://github.com/zapbampow/tamperMonkeyScripts
// @version      0.1
// @description  Removes YouTube Shorts, Breaking News, and YouTube Playables, leaving only real videos
// @author       Clayton Ingalls
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @resource note Credit where it is due: This is a broadening of hallzy's script at https://github.com/hallzy/remove-youtube-shorts/blob/master/remove-youtube-shorts.user.js

// ==/UserScript==
(() => {
  const justShowVideos = () => {
    Array.from(
      document.querySelectorAll(
        `ytd-rich-section-renderer.style-scope.ytd-rich-grid-renderer`
      )
    ).forEach((item) => {
      item.remove();
    });
  };

  const observer = new MutationObserver(justShowVideos);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  justShowVideos();
})();

```

## Resources
- [Tampermonkey](https://www.tampermonkey.net/)
- [GreasyFork](https://greasyfork.org/en) - scripts to download
- [Script Metadata](https://www.tampermonkey.net/documentation.php?locale=en#meta:grant)
- [Another YT Shorts Script](https://github.com/hallzy/remove-youtube-shorts/blob/master/remove-youtube-shorts.user.js)
  - After hitting a little dead end on my first attempt, I searched for some other solutions. This was the first to come up and I used it as the base for what I ended up with.