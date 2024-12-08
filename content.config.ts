import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  loader: glob({ pattern: "**/hero.md", base: "./src/content/home" }),
  schema: z.object({
    heading: z.string(),
    imagePath: z.string(),
  }),
});

const grid = defineCollection({
  loader: glob({ pattern: "**/grid.md", base: "./src/content/home" }),
  schema: z.object({
    heading: z.string(),
    images: z.array(
      z.object({
        path: z.string(),
        alt: z.string(),
      }),
    ),
  }),
});

const richText = defineCollection({
  loader: glob({ pattern: "**/richText.md", base: "./src/content/home" }),
  schema: z.object({}),
});

const header = defineCollection({
  loader: glob({ pattern: "**/header.md", base: "./src/content/globals" }),
  schema: z.object({
    logo: z.string(),
  }),
});

const footer = defineCollection({
  loader: glob({ pattern: "**/header.md", base: "./src/content/footer" }),
  schema: z.object({
    copyright: z.string(),
  }),
});

const notFound = defineCollection({
  loader: glob({ pattern: "**/notFound.md", base: "./src/content/notFound" }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
  }),
});

export const collections = { hero, grid, richText, header, footer, notFound };
