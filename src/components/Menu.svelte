<script>
	import { Link, router } from 'yrv';
	import { menu } from '../stores/menu';
	import { fade } from 'svelte/transition';
	import SocialIcons from './SocialIcons.svelte';
	import Logo from './Logo.svelte';
	import { menuOptions as options } from '../utils';
	import { getContext } from 'svelte';
	import SocialIconsLight from './SocialIconsLight.svelte';

	const { bgColor, textColor, fireVariant, darkMode } = getContext('color');
</script>

<div
	id="menu"
	class="menu lg:hidden"
	class:open={$menu}
	transition:fade
	style="background-color: {$bgColor}; color: {$textColor};"
>
	<div class="flex items-center justify-between pb-2 mx-5 mt-7 ">
		<Logo on:click={menu.toggle} />
		<div class="flex items-center">
			<button class="" on:click={darkMode.toggle}
				><img
					src={$darkMode ? '/assets/sun.svg' : '/assets/moon.svg'}
					alt="A dark mode icon"
					class="w-7"
				/></button
			>
			<button class="" on:click={menu.toggle}
				><img
					src={$darkMode ? '/assets/x-dark.svg' : '/assets/x.svg'}
					alt="A close icon"
					class="w-6 ml-4 md:ml-8 dark:text-white"
				/></button
			>
		</div>
	</div>
	<div class="flex flex-col flex-grow-0 items-start justify-start">
		<div class="ml-8 mt-6">
			{#each options as { name, href }, i (i)}
				<Link
					{href}
					class="menu-item"
					on:click={menu.toggle}
					style="color:{$textColor}">{name}</Link
				>
			{/each}
		</div>
		<Link
			href="/hit-us-up"
			class="contact-us"
			on:click={menu.toggle}
			style="background-color: {$fireVariant};"
		>
			Contact Us<img
				src={$darkMode ? '/assets/msg-icon-dark.svg' : '/assets/msg-icon.svg'}
				alt=""
				class="msg-icon"
			/>
		</Link>
		<div class="ml-9 mt-28">
			{#if $darkMode}
				<SocialIconsLight rightMargin="mr-10" />
			{:else}
				<SocialIcons />
			{/if}
		</div>
		<div class="mt-10 ml-9">
			<Link href="" class="menu-copyright">Cookie & Privacy Policy</Link>
			<p class="menu-copyright">
				© 2021 DevFire Labs <br />All rights reserved.
			</p>
		</div>
	</div>
</div>

<style>
	.menu {
		@apply w-0 h-0 overflow-hidden fixed  z-40 overflow-x-hidden whitespace-nowrap right-0;
		transition: width 0.5s cubic-bezier(0.22, 0.68, 0, 1.71),
			height 0.4s cubic-bezier(0.22, 0.68, 0, 1.71);
	}

	.open {
		@apply w-full;
		height: 100vh;
	}
	#menu :global(.contact-us) {
		@apply flex flex-grow-0 items-center py-1.5 px-2 md:py-2.5 md:px-4 font-display text-2xl md:text-3xl ml-8 mt-9;
	}
	#menu :global(.msg-icon) {
		@apply stroke-current stroke-2 ml-2 w-7 h-7 stroke-current text-dark;
	}
	#menu :global(.menu-item) {
		@apply text-4xl md:text-6xl font-display block;
	}
	#menu :global(.menu-item + .menu-item) {
		@apply mt-4;
	}
	.icon {
		@apply w-6;
	}
	.social-icon {
		@apply stroke-current fill-current text-dark;
	}
	#menu :global(.menu-copyright) {
		@apply font-sans font-medium;
	}
	#menu :global(.menu-copyright + .menu-copyright) {
		@apply mt-2 font-normal;
	}
</style>
