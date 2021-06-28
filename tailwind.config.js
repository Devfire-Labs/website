module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: { colors: { 'fire-1': '#D2E568', 'fire-2': '#953DBA' } },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
