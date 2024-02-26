import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const SITE_URL = process.env.SITE_URL || 'https://astro.deployn.de';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [
		react(),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
