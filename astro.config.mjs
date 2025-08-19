import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "directory",
  },
  integrations: [icon(), tailwind(), pagefind(), mdx(), react()],
  experimental: {
    // rewriting: true,
  },
});