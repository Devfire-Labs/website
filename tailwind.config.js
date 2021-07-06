module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			mono: ['Ubuntu Mono', 'monospace'],
			sans: ['Montserrat', 'sans-serif'],
			display: ['Righteous', 'cursive'],
		},
		extend: {
			colors: {
				'fire-1': '#D2E568',
				'fire-2': '#953DBA',
				light: '#B9B9B9',
				dark: '#25262A',
				deepGrey: '#797979',
				scroll: '#555',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
