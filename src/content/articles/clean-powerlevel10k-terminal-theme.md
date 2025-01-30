---
publishedAt: 2025-01-22
updatedAt: 2025-01-22
title: My clean terminal theme with PowerLevel10K
description: A bunch of git commands that I return to, but don't always remember
tags: ["terminal, zsh, bash"]
status: "draft"
---

We use dev containers to develop at work. They are set up to automatically install zsh and the [PowerLevel10K](https://github.com/romkatv/powerlevel10k) theme.

I like my command line interface to be as lean and compact as possible. On my personal machine I use [terminalparty](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#terminalparty) because it puts all the information on the right side of the terminal screen and just leaves the prompt on the left side. If you get to the metadata on the right side of the terminal, it just hides it to let you keep typing.

However, when I remove PowerLevel10K and replace it with terminalparty in our dev container I get weird issues that make the terminal almost unusable. So I've spent some time figuring out the leanest and most compact terminal I can get with PowerLevel10K.

There are 3 keys to getting it to feel really compact and clean.

1. Always choose to show the least amount, except for the Prompt Height
2. Choose "Two Lines" for Prompt Height
3. Enable the Transient Prompt

Choosing two lines for the prompt height seems counterintuitive. However, it means that you are always typing on a completely clean line. I want to type from the left of the terminal, not 3/4 the way across because so much metadata is filling up the prompt line.

The transient prompt cleans up the history and makes it nice and compact too. This is less important to me, but I do appreciate it.

Here is how I answer the configuration options when going through setup.

| **Configuration Option ** | **Option to Select **     |
| ------------------------- | ------------------------- |
| Prompt Style              | (1) Lean                  |
| Character Set             | (1) Unicode               |
| Prompt Colors             | (1) 256 colors            |
| Show Current Time         | (n) No                    |
| Prompt Height             | (2) Two Lines             |
| Prompt Connection         | (1) Disconnected          |
| Prompt Frame              | (2) Left                  |
| Frame Color               | (1) Lightest              |
| Prompt Spacing            | (1) Compact               |
| Prompt Flow               | (1) Concise               |
| Enable Transient Prompt   | (y) Yes                   |
| Instant Prompt Mode       | (1) Verbose (recommended) |
| Apply changes to ~/.zshrc | (y) Yes (recommended)     |

If you already have PowerLevel10K installed, you can run the following command to go through configuration again.

```sh
p10k configure
```
