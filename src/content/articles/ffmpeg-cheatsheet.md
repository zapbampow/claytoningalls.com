---
title: ffmpeg cheatsheet
description: I don't use ffmpeg enough to remember, well, anything really
tags: ["ffmpeg", "terminal", "command line"]
status: "published"
publishedAt: 2025-04-11
updatedAt: 2025-04-11
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
```sh
ffmpeg -i input.mp4 output.avi
```

## Lower the file size of a video
```sh
# create a copy of the file encoded with more efficient settings
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset veryslow -acodec aac -b:a 128k output.mp4
```
- `-i input.mp4`: Your input file.
- `-vcodec libx264`: Uses the H.264 video codec.
- `-crf 28`: Controls video quality and file size. Lower = better quality, bigger file (range: 18–28 is typical). Try 23 for a balance, 28 for smaller files.
- `-preset veryslow`: Slower = better compression. Options: ultrafast, superfast, veryfast, faster, fast, medium (default), slow, slower, veryslow.
- `-acodec aac`: Audio codec.
- `-b:a 128k`: Audio bitrate.