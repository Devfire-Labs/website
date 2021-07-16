<script>
	import { Link } from 'yrv';
	import { menu } from '../stores/menu';
	import { menuOptions as options } from '../utils';
	import Logo from './Logo.svelte';
</script>

<nav id="nav" class=" bg-light w-full">
	<div
		class="flex items-center justify-between px-5 pb-2 pt-7 mx-auto max-w-screen-2xl"
	>
		<Logo />
		<button class="lg:hidden " on:click={menu.toggle}
			><img
				src="/assets/menu-icon.svg"
				alt="A menu icon"
				class="md:w-12"
			/></button
		>
		<div class="hidden lg:flex lg:items-center">
			{#each options as { name, href }, i (i)}
				<Link {href} class={'menu-item ' + (i === 0 && 'first-menu-item')}
					>{name}</Link
				>
			{/each}
			<Link href="/hit-us-up" class="menu-item contact-us">
				Contact Us<img src="/assets/chevron-l.svg" alt="" class="icon" />
			</Link>
		</div>
	</div>
</nav>

<style>
	#nav :global(.menu-item) {
		@apply text-2xl font-display ml-10;
		letter-spacing: 2%;
	}
	#nav :global(.first-menu-item) {
		@apply ml-0;
	}
	#nav :global(.contact-us) {
		@apply rounded-full flex items-center ring-4 ring-fire-1 py-0.5 px-2.5;
	}
	#nav :global(.icon) {
		@apply ml-2 mt-0.5;
	}
</style>
