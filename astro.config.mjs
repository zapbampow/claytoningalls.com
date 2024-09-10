import icon from "astro-icon";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind()],
  experimental: {
    rewriting: true,
  },
});
