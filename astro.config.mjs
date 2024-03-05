import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
const SITE_URL = process.env.SITE_URL || 'https://astro.deployn.de';
const DIRECTUS_URL = process.env.DIRECTUS_URL || 'https://directus.astro.deployn.de';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	image: {
		domains: [DIRECTUS_URL.replace('https://', '')],
	},
	integrations: [
		alpinejs(),
		icon(),
		mdx(),
		react(),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
