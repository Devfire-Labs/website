<script>
	import { Link } from 'yrv';
	import { menu } from '../stores/menu';
	import Logo from './Logo.svelte';
</script>

<nav class=" bg-light w-full ">
	<div
		class="flex items-center justify-between px-5 pb-2 pt-7 mx-auto max-w-screen-2xl"
	>
		<Logo />
		<button on:click={menu.toggle}
			><img src="/assets/menu-icon.svg" alt="A menu icon" class="" /></button
		>
	</div>
</nav>
