import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import dynamicImport from 'vite-plugin-dynamic-import';

import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: { plugins: [dynamicImport()] },
  output: 'static',
  adapter: vercelStatic(),
});
