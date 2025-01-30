import { defineCollection, z } from "astro:content";

const snippetCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date(),
    tags: z.array(z.string()),
    status: z.enum(["draft", "published"]),
  }),
});

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    img: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
    status: z.enum(["draft", "published"]),
  }),
});

export const UnsocialSchema = z.object({
  type: z.enum(["comment", "photo", "article", "link"]),
  title: z.string().optional(),
  publishedAt: z.date(),
  tags: z.array(z.string()).optional(),
  url: z.string().optional(),
  description: z.string().optional(),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),
  status: z.enum(["draft", "published"]),
});

const unsocialCollection = defineCollection({
  type: "content",
  schema: UnsocialSchema,
});

export const collections = {
  snippets: snippetCollection,
  articles: articlesCollection,
  unsocial: unsocialCollection,
};
