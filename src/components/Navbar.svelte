<script>
	import { Link } from 'yrv';
	import { menu } from '../stores/menu';
import Logo from './Logo.svelte';
</script>

<nav class="bg-light pt-7 px-5 pb-2 flex justify-between items-center">
<Logo/>
	<button on:click={menu.toggle}
		><img src="/assets/menu-icon.svg" alt="A menu icon" class="" /></button
	>
</nav>
