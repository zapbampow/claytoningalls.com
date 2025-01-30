---
title: "How to revert a single file"
publishedAt: 2024-09-20
updatedAt: 2024-09-20
tags: ["snippet", "git"]
status: "published"
---

# How to revert a single file to a commit with changes on multiple files

## Situation

You have a commit that makes changes to a bunch of files. You later need to revert the changes on only 1 of those files without changing any of the others.

## Example

- Commit 1 updates `index.html`, `styles.css`, and `script.js`
- Commit 2 updates the `styles.css` and `script.js`

You want to go back to the styles from Commit 1;

### Step 1: Find the commit before the changes you want to revert

Find commits for `style.css`
`git log --oneline styles.css`

```bash
651e4d4 (HEAD -> main) updates styles.css and script.js
22c1d3f updates index.html, styles.css and script.js (want to revert style.css to this commit)
f5346b3 initial commit
```

### Step 2: Copy the SHA for that commit

`22c1d3f` in this case

### Step 3: Checkout only the file change for styles.css in that commit

`git checkout <SHA> <FILENAME>`

`git checkout 22c1d3f styles.css `

### Step 4: Commit

```bash
git add styles.css
git commit -m "returns styles.css to previous commit"
```
