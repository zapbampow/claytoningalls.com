---
title: "Git Worktree Workflow"
description: "How to not stash changes for quick bug fixes"
publishedAt: 2025-02-28
updatedAt: 2025-02-28
tags:
  ["git"]
status: "published"
---

Yesterday was one of those days where I was working on one branch as my main work, but I kept getting pulled off to work on some bug fixes on another branch. I have a system for that.

```sh
git stash -m "wip: the stuff I'm working on"
git checkout bug-fix-branch
# make changes
git commit 
git push
git checkout original-branch
git stash apply
```

It works and is fine, but git worktree is an alternative where I wouldn't have to stash those changes every time I need to jump on a bug fix. It is like having another branch open at the same time and feels pretty smooth. 

Sadly, I can't really use it in my day to day work for reasons I'll explain below. But I want to keep notes on how to use it for when I can.

## Worktree workflow
1. Create new worktree
2. Go to worktree path
3. Install node modules: `npm install`  (skip this step if you aren't working in a project that needs it)
4. Making changes
5. Commit and push changes
6. Delete worktree directory 
7. Navigate to another worktree
8. Prune deleted worktree
9. 
## View all worktrees
This shows a list of all active worktrees and the directories they live in. It also shows prunable worktrees, which are worktrees whose directory has been deleted.

```sh
git worktree list
```


## Create new worktree for existing branch
The worktree lives in a different folder, hence adding the path. To work on the branch in that worktree, you will need to go to that path `cd ../path`

```sh
git worktree add ../path branch-name
```


## Create new worktree for new branch
```sh
git worktree add ../path -b branch-name
```

## Go to new worktree
```sh
cd ../path
```

## Install node modules
The new path doesn't have node_modules, so you need to install.

```sh
npm install
```

## Delete worktree directory
```sh
# from your new worktree
cd ..
rm -rf path
```

## Prune worktree
```sh
cd other-worktree-directory
git worktree prune
```


## The bad news for me
My day to day work largely happens in dev containers in VS Code. Although [there is a way to update the dev container](https://github.com/gitkraken/vscode-gitlens/issues/2818#issuecomment-2200483029) to handle specific worktrees, it isn't flexible enough to just add them at will and have it work. So I don't get to use this like I wish I could. Moreover, I can't just go updating our devcontainer code to fit my personal preferences because other people on my team use them. I basically have the same problem as [this person](https://github.com/gitkraken/vscode-gitlens/issues/2818#issuecomment-2311786956). 

So for now I'll just have to keep this in my mental filing cabinet for a time when it becomes more relevant.