<script>
	import '../app.postcss';
	import { setContext } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';

	import {
		darkMode,
		bgColor,
		textColor,
		fireVariant,
	} from '$lib/stores/darkMode';

	$: {
		$bgColor = $darkMode ? '#25262A' : '#B9B9B9';
		$textColor = $darkMode ? 'white' : 'black';
		$fireVariant = $darkMode ? '#953DBA' : '#D2E568';
		setContext('color', { bgColor, textColor, fireVariant, darkMode });
	}
</script>

<div
	class="transition-all duration-400"
	style="background-color: {$bgColor}; color: {$textColor};"
>
	<Menu />
	<Navbar />
	<main class="container">
		<slot />
	</main>
	<Footer />
</div>

<style lang="postcss" global>
	body {
		@apply font-mono  dark:text-white antialiased flex flex-col h-screen;
	}
	a:active {
		-webkit-tap-highlight-color: transparent; /* transparent with keyword */
		@apply duration-150 transform scale-110;
	}
	.navlink-anim:hover {
		@apply duration-150 border-b border-fire-2;
	}
	::selection {
		@apply text-dark  bg-fire-1 dark:bg-fire-2 dark:text-white bg-opacity-60;
	}
	input,
	textarea {
		@apply border-none;
	}
	input[type='text']:focus,
	input[type='email']:focus,
	input[type='checkbox']:focus,
	textarea:focus {
		@apply outline-none ring ring-dark rounded-sm;
	}
	main.container {
		@apply w-full max-w-screen-2xl mx-auto;
	}
	.title {
		@apply text-5xl font-display mt-16 lg:mt-20 md:text-9xl 2xl:text-10xl 2xl:mt-24;
		line-height: 100%;
	}
	.subtitle {
		@apply font-mono pr-4 pl-2 ml-2 text-lg mt-2 md:w-2/5 md:ml-2 md:mt-4 md:text-xl lg:text-2xl xl:text-3xl xl:mt-6;
	}
	.post-subtitle {
		@apply font-sans font-semibold text-xl mt-3.5;
	}
	.post-text {
		@apply font-sans mt-2;
	}
</style>
