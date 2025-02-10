---
title: How to reset your local git history to match remote's history
description:
tags: ["git"]
status: "published"
publishedAt: 2025-02-06
updatedAt: 2025-02-06
---

## The situation

Something got messed up with my git history.

When I tried to `git push` I got a message like this.

```sh
error: object file .git/objects/78/91e979032e46ce389042612924b3390a219c66 is empty
```

I tried several things to fix it that didn't work and only gave me different errors.

The best course I could think of was to replace my whole git history for this branch with whatever was on the remote, Github in this case.

Fortunately, I only had one small commit that was going to be easy to copy and paste to redo it.

The Code

```sh
git fetch origin

# replace my-branch-name with the contents at origin
git reset --hard origin/my-branch-name

# remove untracked files and directories (probably optional, but I wanted to be completely reset)
git clean -fd
```

And just like that I back up and running.
