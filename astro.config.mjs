// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://nepalhealthpolicylab.org',
  integrations: [preact()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ne'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
