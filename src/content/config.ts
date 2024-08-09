import { defineCollection, z } from "astro:content";

const snippetCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export default snippetCollection;
