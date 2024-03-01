/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				primary: {
					50: '#f1fafe',
					100: '#e2f3fc',
					200: '#bfe7f8',
					300: '#86d6f3',
					400: '#46c0ea',
					500: '#1ea8d9',
					600: '#1294c9',
					700: '#0f6d95',
					800: '#105b7c',
					900: '#134c67',
					950: '#0d3144',
					DEFAULT: '#1294c9',
				},
				secondary: {
					50: '#f3f6fb',
					100: '#e3ebf6',
					200: '#cddcf0',
					300: '#aac5e6',
					400: '#82a7d8',
					500: '#648acd',
					600: '#5171bf',
					700: '#4660af',
					800: '#3e4f8f',
					900: '#364472',
					950: '#1f253c',
					DEFAULT: '#1f253c',
				},
				base: {
					50: '#f4f6f9',
					100: '#ebeef3',
					200: '#d2dbe5',
					300: '#aabccf',
					400: '#7c98b4',
					500: '#5b7b9c',
					600: '#486381',
					700: '#3b5069',
					800: '#334459',
					900: '#2f3b4b',
					950: '#1f2632',
					DEFAULT: '#f4f6f9',
				},
				accent: {
					50: '#fff3ed',
					100: '#fee5d6',
					200: '#fcc7ac',
					300: '#faa077',
					400: '#f66c3d',
					500: '#f34a1c',
					600: '#e43112',
					700: '#bd2111',
					800: '#971c15',
					900: '#791a15',
					950: '#410a09',
					DEFAULT: '#f66c3d',
				},
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
