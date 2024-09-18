import icon from "astro-icon";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [icon(), tailwind(), pagefind()],
  experimental: {
    rewriting: true,
  },
});
