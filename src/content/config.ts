import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  type: "content",
  schema: z.object({
    heading: z.string(),
    imagePath: z.string(),
  }),
});

const grid = defineCollection({
  type: "content",
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

export const collections = { hero, grid };
