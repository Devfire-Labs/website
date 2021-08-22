import preprocess from 'svelte-preprocess';
import adapterNetlify from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterNetlify(),
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
