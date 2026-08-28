import { defineConfig } from 'astro/config';

// GitHub Pages: https://legal.testkun.net/
export default defineConfig({
  site: 'https://legal.testkun.net',
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
