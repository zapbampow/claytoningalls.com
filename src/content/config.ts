import { defineCollection, z } from "astro:content";

const snippetCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()),
  }),
});

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published: z.date(),
    description: z.string(),
    author: z.string(),
    img: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  snippets: snippetCollection,
  articles: articlesCollection,
};
