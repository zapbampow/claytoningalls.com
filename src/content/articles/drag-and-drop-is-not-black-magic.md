---
publishedAt: 2025-08-06
updatedAt: 2025-08-06
title: Drag and drop is not black magic
description: How I accidentally built drag and drop functionality in React
tags: ["react", "css", ]
status: "draft"
---

I have always thought of drag and drop as some dark magic. I didn't think about how it really worked or how I would build it from scratch. "Just find a good library that does all the hard work for you." 

Our team uses Framer Motion. So the last time I needed drag and drop, I just followed their pattern for building a sortable list, which worked just fine.

Then my team was tasked with replacing a legacy feature with a more advanced drag and drop sortable list as part of a larger project. I was relieved when my coworker took the drag and drop part of the project.

Two weeks in he said, "I'm 90% there." Three weeks in he said, "I'm 90% there." 4 weeks in, "I'm 90% there. I just rewrote everything. This is really complicated."

At that point our manager said, "I'm not sure I have the appetite to keep going down this path. Clayton, I want you to start coming up with something that is more like our old version and we'll see where we are in a week on both of them."

## Drag and drop is complicated
The complication for our project was that we had a nested list with 3 data levels and 3 visual tiers. The nested UI needed to look like this.

```
Item 1 (level 1/tier 1)
    Item 2 (level 2/tier 2)
       Item 3 (level 3/tier 3)
Item 4 (level 2/tier 1)
Item 5 (level 2/tier 1)
    Item 6 (level 3/tier 2)
```

We need a way to drag items so that they nest properly as you drag them. There are parent child relationships that define the levels. Level 3 items always have a level 2 parent. But level 2 items don't necessarily have a level 1 parent. In that case, it should not nest and should visually align with level 1 items, as you can see above with Item 4.

## Just use a library
Framer motion's base drag and drop feature is pretty easy to work with when you have a simple list. But I trusted my coworker when he said that it got really complicated if you wanted to be able to drag things around in our situationl. I went and looked at other options. It was basically the same. As long as the list didn't have nesting like we do, existing packages were pretty easy to use. 

The closest I found was [dnd kit](https://dndkit.com/). They have a [sortable tree example](https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/examples-tree-sortable--basic-setup) on their storybook page that did basically what I imagined could be possible. But when I dug into the code, they were doing a LOT of manual work to get it to work. It basically reinforced everything I was hearing from my coworker. This is really complicated.

## A "simple" alternative

## Step 2: A little display
Step 1 was to simply display the list I had properly. The data looked included the parent/child relationships and the level, but not the visual tier data.

```js
[
    {
        ID: 1,
        name: "Item 1",
        parentID: 0,
        level: 1
    },
    {
        ID: 2,
        name: "Item 2",
        parentID: 1,
        level: 2
    },
    {
        ID: 3,
        name: "Item 3",
        parentID: 0,
        level: 2
    },
]
```

This was the easiest part. Does the item have a parent? What is the level? That was enough information to set the left margin and get the nested tree look we were looking for.

### Step 3: Place a reordered item
