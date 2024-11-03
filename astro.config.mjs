import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import { loadEnv } from "vite";

const { PUBLIC_SITE_ADDRESS } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

const site = PUBLIC_SITE_ADDRESS;
const robots = {
  policy: [
    {
      allow: "/",
      userAgent: "*",
    },
  ],
};

export default defineConfig({
  site,
  prefetch: {
    defaultStrategy: "viewport",
  },
  integrations: [sitemap(), robotsTxt(robots), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@public": "/public",
      },
    },
  },
});
