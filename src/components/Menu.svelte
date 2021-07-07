<script>
	import { Link, router } from 'yrv';
	import { menu } from '../stores/menu';
	import { fade } from 'svelte/transition';
	import SocialIcons from './SocialIcons.svelte';
	import Logo from './Logo.svelte';

	// $: console.log($router);
	router.subscribe((e) => {
		console.log(e);
	});
</script>

<div class="menu" class:open={$menu} id="menu" transition:fade>
	<div class="flex items-center justify-between mt-7 mx-5 pb-2 ">
		<Logo on:click={menu.toggle} />
		<div class="flex items-center">
			<button class=""
				><img src="/assets/moon.svg" alt="A dark mode icon" class="" /></button
			>
			<button class="" on:click={menu.toggle}
				><img src="/assets/x.svg" alt="A close icon" class="ml-4" /></button
			>
		</div>
	</div>

	<div class="ml-8 mt-6 bg-light">
		<Link href="" class="menu-item">Our Work</Link>
		<Link href="" class="menu-item">About</Link>
		<Link href="" class="menu-item">Blog</Link>
	</div>

	<Link href="/hit-us-up" class="contact-us">
		Contact Us<img src="/assets/msg-icon.svg" alt="" class="msg-icon" />
	</Link>

	<div class="ml-9 mt-28">
		<SocialIcons />
	</div>
	<div class="mt-10 ml-9">
		<Link href="" class="menu-copyright">Cookie & Privacy Policy</Link>
		<p class="menu-copyright">
			© 2021 DevFire Labs <br />All rights reserved.
		</p>
	</div>
</div>

<style>
	.menu {
		@apply w-0 h-0 overflow-hidden fixed bg-light z-40 overflow-x-hidden whitespace-nowrap text-dark right-0;
		transition: width 0.5s cubic-bezier(0.22, 0.68, 0, 1.71),
			height 0.4s cubic-bezier(0.22, 0.68, 0, 1.71);
	}

	.open {
		@apply w-full;
		height: 100vh;

		/* right: 0; */
	}
	:global(.contact-us) {
		@apply bg-fire-1 flex items-center justify-between w-44 py-1 px-1.5 font-display text-2xl ml-8 mt-9;
	}
	:global(.msg-icon) {
		@apply stroke-current stroke-2 ml-2 w-7 h-7 stroke-current text-dark;
	}
	:global(.menu-item) {
		@apply text-4xl font-display text-dark block;
	}
	:global(.menu-item + .menu-item) {
		@apply mt-4;
	}

	.social-icon {
		@apply stroke-current fill-current text-dark;
	}
	:global(.menu-copyright) {
		@apply font-sans font-medium;
	}
	:global(.menu-copyright + .menu-copyright) {
		@apply mt-2 font-normal;
	}
</style>
