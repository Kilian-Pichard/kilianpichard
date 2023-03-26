/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'black': '#000000',
			'neutral': {
				50:  "#fafafa",
				100: "#f5f5f5",
				200: "#e5e5e5",
				300: "#d4d4d4",
				400: "#a3a3a3",
				500: "#737373",
				600: "#525252",
				700: "#404040",
				800: "#262626",
				900: "#171717",
			},
			'primary': {
				50:  "#f8fafc",
				100: "#f1f5f9",
				200: "#e2e8f0",
				300: "#cbd5e1",
				400: "#94a3b8",
				500: "#64748b",
				600: "#475569",
				700: "#334155",
				800: "#1e293b",
				900: "#0f172a",
			},
			// ...
		},
		extend: {},
	},
	plugins: [],
}
