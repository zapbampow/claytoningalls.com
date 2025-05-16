---
publishedAt: 2024-09-25
updatedAt: 2025-05-16
title: Git Cheatsheet
description: A bunch of git commands that I return to, but don't always remember
tags: ["git"]
status: "published"
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

## Show the current branch name

```sh
git branch --show-current
```

Why would I want this? My terminal shows me the branch name, as does VS Code.
Sometimes the branch name is so long that it is truncated and I just can't remember it. It also makes it super easy to copy the branch name

## Show list of recent branches worked on

```sh
git branch --sort=-committerdate
```

I can't always remember the names of all my branches, especially when I'm working on several features or bugs at the same time. This lists branches based on the most recent commits. So as long as you have made commits, this will help you find a recent branch you worked on.

## Show list of branches that a commit is on
```sh
git branch --contains $hash
```

This is good for quickly checking if a commit you are looking at is on a particular branch. 

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

## Go places

### Go to most recent branch

```sh
git checkout -
```

## Get stuff

### Get changes to a branch while on a different branch
I'm on `feature-branch-1` and want to merge `prod` into my branch. But I don't want to switch to prod and pull changes.

```sh
git fetch origin prod
```

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

### Reset local branch to contents on remote

```sh
git fetch origin

# replace my-branch-name with the contents at origin
git reset --hard origin/my-branch-name

# remove untracked files and directories (probably optional, but I wanted to be completely reset)
git clean -fd
```

### Delete local branch and refetch from remote
Maybe you are seeing errors like these when you try to pull or push:
- `error: object file "path" is empty`  
- `fatal: loose object SHA "path" is corrupt`

I've found the best way to handle those are copy the SHA of my committed changes, delete my local branch, refetch the branch from remote, and cherry-pick my changes back into the branch.

```sh
# delete locally if all changes are merged
git branch -d branch_name 

# delete locally even if all changes are not merged
git branch -D branch_name 

# fetch branch
git fetch origin branch_name

# bonus: return committed changes that were lost from git branch -D
git cherry-pick SHA

```

### Delete empty git objects
```sh
find .git/objects/ -type f -empty -delete
```

This is another way to handle the situation where you have empty git objects that are giving you errors like the following.

```sh
error: object file .git/objects/31/65329bb680e30595f242b7c4d8406ca63asdf0 is empty
fatal: loose object 65329bb680e30595f242b7c4d8406ca63asdf0 (stored in .git/objects/31/65329bb680e30595f242b7c4d8406ca63asdf0) is corrupt
```

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
