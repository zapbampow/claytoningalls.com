---
title: "elementFromPoint and touch-based drag and drop on the web"
publishedAt: 2025-09-12
updatedAt: 2025-09-12
tags: ["snippet", "javascript", "drag-n-drop"]
status: "draft"
---

# elementFromPoint and touch-based drag and drop on the web

## The Situation

I've been working on a custom drag and drop UI. It is surprisingly "simple" and does all the little things that are unique to my use case. Then I go to check it out on a mobile device with touch events. It doesn't work at all because it is all based on hover events, which touch events don't trigger. It has to work on phone and tablets too. What's a developer to do?

## The Solution
`document.elementFromPoint` was new to me. Apparently you can give it x and y coordinates on the screen and it will return whatever element is sitting right there.

How does that help with my problem? Well, I can track the pointerMove location and use the coordinates to know exactly what the user's finger is over at any given moment. In my case I need to expand the element that you can drop stuff on when you are over it. 

This is not nearly as simple as using a hover event, but it does make it usable in all the situations that I need.

