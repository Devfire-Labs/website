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
			sans: ['Ubuntu', 'sans-serif'],
			display: ['Righteous', 'cursive'],
		},
		extend: {
			colors: {
				'fire-1': '#D2E568',
				'fire-2': '#953DBA',
				light: '#B9B9B9',
				dark: '#25262A',
				onix: '#505050',
				deepgray: '#797979',
				scroll: '#555',
			},
			fontSize: {
				'10xl': '10rem',
				'11xl': '12rem',
				'12xl': '14rem',
				'13xl': '16rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
