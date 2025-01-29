---
publishedAt: 2024-09-25
updatedAt: 2025-01-22
title: Git snippets
description: A bunch of git commands that I return to, but don't always remember
tags: ["git"]
---

## Find Stuff

### Show a specific commit

```sh
git show HASH
```

### Show commits for a specific file

```sh
git log -p PATH_TO_FILE
```

```sh
git log --follow PATH_TO_FILE
```

```
-p         shows the changes
--follow   shows the commits even when the filename changes
```

## Show change history to a particular line of a file

```sh
# get changes for the line with the matched regex in the file
git log -L '/textToMatch/,+1:path/to/your/file.txt'
```

```
 -L    first occurrence
 +1    change number to show more content
```

```sh
## for line 15
git log -L15,+1:path/to/your/file.txt'
```

### Find a branch with only a partial branch name or that starts with some text

```sh
git branch --list "*PARTIAL_NAME*"
```

```sh
git branch | grep PARTIAL_NAME
```

Same as above, but includes remote branches as well and ignores case distinctions. In other words, it returns more results.

```sh
git branch --all | grep -i PARTIAL_NAME
```

### Show the current branch name

```sh
git branch --show-current
```

Why would I want this? My terminal shows me the branch name, as does VS Code.
Sometimes the branch name is so long that it is truncated and I just can't remember it. It also makes it super easy to copy the branch name

### Check whether one branch has been merged into another branch

#### Option 1: My favorite

This is my favorite option because it checks all branches (remote and local) and simply returns a boolean-like response

```sh
git branch --all --merged production | grep -q featureBranchName && echo "MERGED" || echo "NOT MERGED"
```

Change `production` to the "parent" branch name and "featureBranchName" to the feature.

#### Option 2

Similar, but you need to have both branches fetched to your machine

```sh
git merge-base --is-ancestor featureBranch production && echo "merged" || echo "not merged"
```

#### Option 3

get a list of branches response

```sh
# returns only locally fetched branches
git branch --merged

# returns local and remote branches
git branch -a --merged

# returns only remote branches
git branch -r --merged
```

Option 3 spits out a list that looks something like this:

```
feature/search-posts
bug/search-button-does-nothing
some-other-branch-name
```

If the branch you are wondering about is in the list, then it has been merged into the current branch.

## Undoing Work

### Discard unstaged changes in a file:

```sh
git restore -- FILE_PATH FILE_PATH_2
```

### Clear/Delete all unstaged changes

```sh
git restore .
```

### Unstage Everything in staging

```sh
git reset
```

### Stash all files in the working directory, including untracked files, like newly created files or .gitignore

```sh
git stash --include-untracked
```

```sh
git stash -u
```

### Ignore already committed content

Use case: You have a `.vscode` directory on your local machine, but it wasn't in `.gitignore` when you made your first commit. You want to stop tracking it.

```sh
git rm -r --cached YOUR_DIRECTORY
```

The `-r` option causes the removal of all files under your directory.

The `--cached` option causes the files to only be removed from git's index, not your working copy. By default `git rm <file>` would delete `<file>`.

[source](https://stackoverflow.com/a/1330097/9301652)

## Configuration

### Configure git to always push new local branches to remote

```sh
git config push.autoSetupRemote true
```

### Prompt with automatically corrected git commands when you mistype them

For more options or info, check out this [in depth article about autocorrent](https://blog.gitbutler.com/why-is-git-autocorrect-too-fast-for-formula-one-drivers/)

```sh
git config --global help.autocorrect prompt
```
