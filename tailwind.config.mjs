/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				body: 'hsl(50, 72%, 97%)',
				'body-on': 'hsl(330, 7%, 5%)'
			},
			spacing: {
				'window-sm': '24px',
				'window': '48px'
			}
		},
	},
	plugins: [],
}
