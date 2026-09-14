import { defineConfig } from 'astro/config';

// GitHub Pages: https://apps.testkun.net/
export default defineConfig({
  site: 'https://apps.testkun.net',
  base: '/',
  output: 'static',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
