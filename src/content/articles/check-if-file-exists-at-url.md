---
title: "Checking if image exists at a URL"
description: "Requesting headers instead of downloading the image"
publishedAt: 2025-04-12
updatedAt: 2025-04-12
tags:
  ["javascript", "http", "fetch"]
status: "published"
---

I needed to check whether an image existed at the url I had. My first naive approach was to hit the endpoint and see whether it errored out. But that meant I was actually downloading the image if it was there. I would have been downloading it twice in my situation, which is dumb. 

It turns out you can request just the headers when making an http request. Then you can check the header values. In the end I ended up with a function like this.

```js
async function imageExistsAtLocation(url) {
  try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok && response.status === 200) {
        console.log(`Image is valid: ${response.headers.get('Content-Type')}`);
        return true;
      } else {
        console.warn('URL does not point to a valid image or is unreachable.');
        return false;
      }
    } catch (error) {
        console.error('Error checking image URL:', error);
        return false;
    }
  }
```

That's all I needed, but you could also include other response info like this: 

```js
response.headers.get("Content-Type").startsWith("image/")
```