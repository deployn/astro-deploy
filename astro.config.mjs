import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
const SITE_URL = process.env.SITE_URL || 'https://astro.deployn.de';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
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
