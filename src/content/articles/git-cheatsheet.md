---
publishedAt: 2024-09-25
updatedAt: 2025-01-13
title: Git snippets
description: A bunch of git commands that I return to, but don't always remember
tags: ["git"]
---

## Find Stuff
### Show a specific commit
```
git show <revhash>
```

### Show commits for a specific file
```
git log -p <pathToFile>
```
```
git log --follow <pathToFile>
```
### Find a branch with only a partial branch name
```
git branch --list "*<partial-name>*"
```

Same as above, but includes remote branches as well. In other words, it returns more results.
```
git branch --all | grep -i <partial-name>
```
### Show the current branch name
```
git branch --show-current 
```
Why would I want this? My terminal shows me the branch name, as does VS Code.
Sometimes the branch name is so long that it is truncated and I just can't remember it. It also makes it super easy to copy the branch name
### Check whether one branch has been merged into another branch
#### Option 1: My favorite

This is my favorite option because it checks all branches (remote and local) and simply returns a boolean-like response
```
git branch --all --merged production | grep -q featureBranchName && echo "MERGED" || echo "NOT MERGED"
```
Change `production` to the "parent" branch name and "featureBranchName" to the feature.

#### Option 2
Similar, but you need to have both branches fetched to your machine
```
git merge-base --is-ancestor featureBranch production && echo "merged" || echo "not merged"
```

#### Option 3
get a list of branches response
```
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
```
git restore -- <file_path> <file_path_2>
```
### Clear/Delete all unstaged changes
```
git restore .
```
### Unstage Everything in staging
```
git reset
```
### Stash all files in the working directory, including untracked files, like newly created files or .gitignore
```
git stash --include-untracked
```
```
git stash -u
```
### Ignore already committed content
Use case: You have a `.vscode` directory on your local machine, but it wasn't in `.gitignore` when you made your first commit. You want to stop tracking it.

```
git rm -r --cached <your directory>
```

The `-r` option causes the removal of all files under your directory.

The `--cached` option causes the files to only be removed from git's index, not your working copy. By default `git rm <file>` would delete `<file>`.

[source](https://stackoverflow.com/a/1330097/9301652)
## Configuration
### Configure git to always push new local branches to remote
```
git config push.autoSetupRemote true 
