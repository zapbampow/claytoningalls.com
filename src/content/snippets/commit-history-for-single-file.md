---
title: "How to get the commit history of a single file"
publishedAt: 2024-09-19
updatedAt: 2024-09-19
tags: ["snippet", "git"]
status: "published"
---

# How to get the commit history of a single file

This will show every commit that includes the file name

`git log <path to file>`
`git log --oneline <path to file>`

## Example

Commit 1 adds `index.html`, `styles.css`, and `script.js`
Commit 2 updates the `index.html` and `styles.css`
Commit 3 updates `index.html` and `script.js`

`git log --oneline` will return all commits

```bash
5218e2b (HEAD -> main) updates index.html and script.js
a84e87f updates index.html and styles.css
9fa205a adds index.html styles.css script.js
```

`git log --oneline script.js` will return only the commits 1 and 3

```bash
5218e2b (HEAD -> main) updates index.html and script.js
9fa205a adds index.html styles.css script.js
```
