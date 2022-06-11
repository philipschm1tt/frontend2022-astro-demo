import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), vue(), svelte()],
  adapter: netlify(),
  'vite.ssr.noExternal': ['vant']
});