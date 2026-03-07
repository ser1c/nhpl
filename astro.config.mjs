// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ser1c.github.io',
  base: '/nhpl',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ne'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
