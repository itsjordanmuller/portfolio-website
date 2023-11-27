/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"dracula",
			"fantasy",
			{
				"dracula-light": {
					primary: "#FF79C6",
					secondary: "#BD93F9",
					accent: "#FFB86C",
					neutral: "#6272A4",
					"base-100": "#F8F8F2",
				},
			},
		],
	},
};
