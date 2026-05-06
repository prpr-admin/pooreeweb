import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yoursite.com',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
