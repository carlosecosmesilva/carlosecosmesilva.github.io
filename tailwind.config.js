/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				newspaper: [
					"Crimson Text",
					"Georgia",
					"Times New Roman",
					"serif",
				],
				headline: ["Oswald", "Impact", "Arial Black", "sans-serif"],
			},
			colors: {
				"newspaper-bg": "#f8f6f0",
				"newspaper-border": "#2a2a2a",
				"headline-red": "#c41e3a",
			},
		},
	},
	plugins: [],
};
