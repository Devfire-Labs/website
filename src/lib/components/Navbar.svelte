<script>
	import { getContext } from 'svelte';
	import { menu } from '$lib/stores/menu';
	import { menuOptions as options } from '$lib/utils';
	import Logo from './Logo.svelte';
	const { bgColor, textColor, darkMode } = getContext('color');
</script>

<nav id="nav" class="w-full">
	<div
		class="flex items-center justify-between px-5 xl:px-20 2xl:px-0 pb-2 pt-7 mx-auto max-w-screen-2xl"
	>
		<Logo />
		<button class="lg:hidden " on:click={menu.toggle}
			><img
				src={$darkMode ? '/assets/menu-icon-dark.svg' : '/assets/menu-icon.svg'}
				alt="A menu icon"
				class="md:w-12"
			/></button
		>
		<div class="hidden lg:flex lg:items-center">
			{#each options as { name, href }, i (i)}
				<a
					{href}
					class={'menu-item navlink-anim ' + (i === 0 && 'first-menu-item')}
					>{name}</a
				>
			{/each}
			<a href="/hit-us-up">
				<div
					class="menu-item contact-us"
					style="background-color: {$bgColor}; color: {$textColor};"
					class:ring-fire-1={!$darkMode}
					class:ring-fire-2={$darkMode}
				>
					Contact Us<img
						src={$darkMode
							? '/assets/chevron-l-dark.svg'
							: '/assets/chevron-l.svg'}
						alt=""
						class="icon"
					/>
				</div>
			</a>
			<button class="" on:click={darkMode.toggle}
				><img
					src={$darkMode ? '/assets/sun.svg' : '/assets/moon.svg'}
					alt="A dark mode icon"
					class="w-9 ml-6"
				/></button
			>
		</div>
	</div>
</nav>

<style lang="postcss">
	#nav :global(.menu-item) {
		@apply text-2xl font-display ml-10 2xl:text-3xl;
		letter-spacing: 2%;
	}
	#nav :global(.first-menu-item) {
		@apply ml-0;
	}
	#nav :global(.contact-us) {
		@apply rounded-full flex items-center ring-4  py-0.5 px-2.5;
	}
	#nav :global(.icon) {
		@apply ml-2 mt-0.5;
	}
</style>
