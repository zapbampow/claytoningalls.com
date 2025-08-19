import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "directory",
  },
  integrations: [icon(), tailwind(), pagefind()],
  experimental: {
    // rewriting: true,
  },
});
