---
publishedAt: 2025-01-23
updatedAt: 2025-01-23
title: The smallest pull request ever
description: I got a PR approved for Deno's JSR, sort of
tags: ["git, github, deno, jsr"]
status: "published"
---

Last night I was reading JSR's documentation on "slow types." Way at the bottom of the page in the [Interactions with TypeScript `isolatedDeclarations`](https://jsr.io/docs/about-slow-types#interactions-with-typescript-isolateddeclarations) section there was this sentence.

> For example, just like JSR, TypeScript with isolatedDeclarations enabled would not allow funtion declarations without an explicit return type:

It was small, but that "funtion" jumped out at me. "Oh no! Typo!" So easy to make and miss. There is probably something like that in this very article.

Since it was at the bottom of the page I also noticed the "Edit this page on Github" link. I appreciate that they've pointed to a quick way to make updates like this. So I went through the quick process of forking the project, checking if there were more of that same typo (there weren't), fixing it, and submitting a pull request.

This morning I got the confirmation that [the smallest and least consequential PR possible](https://github.com/jsr-io/jsr/pull/904) was accepted.

Now if I can just find a missing period somewhere, I can made an even smaller PR. 🤣
