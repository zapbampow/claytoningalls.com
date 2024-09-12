---
publishedAt: 2024-08-13
title: How to use CSS to show line breaks
description: How to use the white-space property to display line breaks (\n) in your html content
tags: ["css"]
---

## The problem
I had some text that I needed to programmatically add to the DOM. The saved text included new line escape sequences: `\n`. 

```js
<div class="saved-text"></div>

<script>
	let text = "This is the first line.\nThis is the second line.\nThis is the third line."
	
	let div = document.querySelector('div')
	div.innerHTML = text;
</script>

```

By default the browser didn't display the `\n` character. It treated it like a space. I wanted it to appear as multiple lines just like the user expected it to look when they entered and saved it.

## The solution
Just a little bit of CSS turned out to be the solution
```css
.saved-text {
	white-space: pre-line;
}
```

## About white-space
`white-space` combines 2 other properties into a single property: `text-wrap` and `white-space-collapse`. While I have used `text-wrap` many times, I can't remember ever using `white-space` or `white-space-collapse` before.

`white-space` can be used as a shorthand for those properties
```css
white-space: collapse balance;
white-space: preserve nowrap;
```

But there are also several keywords, which act as replacements for specific combinations of `text-wrap` and `white-space-collapse`

`white-space: pre-line` is equivalent to 
```css
white-space-collapse: preserve-breaks;
text-wrap: wrap;
```

## Docs
- [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
- [white-space-collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space-collapse)
- [text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)