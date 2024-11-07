import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  type: "content",
  schema: z.object({
    heading: z.string(),
    imagePath: z.string(),
  }),
});

export const collections = { hero };
