import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro.deployn.de',
	integrations: [
		react(),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
