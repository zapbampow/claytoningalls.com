---
publishedAt: 2024-09-25
updatedAt: 2024-09-25
title: Git snippets
description: A bunch of git commands that I return to, but don't always remember
tags: ["git"]
---

## git log
### Condensed log
`git log --oneline`

### List commits from single person
**Exact name match**
`git log --author="authorName"`

**Fuzzy match**
`git log --author=partialName`

**Case insensitive**
Add the `-i`  flag to either of the above commands
`git log --author=allLowerOrUpperCase -i`

## Pushing and Pulling 
### Pulling changes from remote when you have changes on your current branch
1. `git pull --rebase`
	- If there are no conflicts you are finished.
	- Using `--rebase` keeps the commit history clean by adding the pulled commits to the commit history when they happened, instead of adding a merge commit

2. If there are conflicts, then run the following commands
```bash
git rebase --abort
git pull
```

3. Then handle conflicts in whatever way you prefer.

## Handling current changes

### Add current changes to last commit
This will add changes to the most recent commit and keep that commit's message.
```bash
git add .
git commit --amend --no-edit
```
### Clear all current changes
**Only tracked files**
Returns all tracked files to the previous commit
`git restore .`

**Tracked and untracked files**
Returns all tracked files to the previous commit
Removes all new, untracked files
```bash
git restore .
git clean --force
```



## Resources
- [Oh shit git](https://ohshitgit.com/)
- [On undoing, fixing, or removing commits in git](https://sethrobertson.github.io/GitFixUm/fixup.html)
- [Git restore all unstaged and untracked files back to their latest commit](https://nickjanetakis.com/blog/git-restore-all-unstaged-and-untracked-files-back-to-their-latest-commit)