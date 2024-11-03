import jsConfigs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },
    settings: {},
    rules: {
      ...jsConfigs.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    ignores: [
      "node_modules/*",
      "src/env.d.ts",
      "dist/*",
      ".astro/*",
      ".prettierrc.mjs",
      ".yarn/**/*",
      ".vercel/*",
    ],
  },
];
