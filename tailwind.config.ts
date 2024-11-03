import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,astro}",
    "./src/components/**/*.{js,ts,astro}",
    "./src/layouts/**/*.{js,ts,astro}",
  ],
  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
    },
    extend: {
      boxShadow: {
        "3xl": "rgba(99, 99, 99, 0.2) 0px 0 8px 0px",
      },
      colors: {
        text: "#1d1f21",
      },
      typography: () => ({
        basic: {
          css: {
            "--tw-prose-code": "#172B4D",
            "--tw-prose-bullets": "#000000",
            "--tw-prose-counters": "#000000",
          },
        },
      }),
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    container: false,
  },
  plugins: [typography],
};
export default config;
