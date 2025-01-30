---
title: ffmpeg cheatsheet
description: I don't use ffmpeg enough to ever remember the syntax
tags: ["ffmpeg", "terminal", "command line"]
status: "draft"
publishedAt: 2025-01-30
updatedAt: 2025-01-30
---

## Convert an image from one format to another

```sh
ffmpeg -i INPUT_FILE OUTPUT_FILE
```

```sh
# -q:v 2 sets the quality for output
# Scale from 2-31 with lower numbers equalling higher quality
ffmpeg -i INPUT_FILE -q:v 2 OUTPUT_FILE
```

## Convert a video from one format to another

## Lower the size of a video
