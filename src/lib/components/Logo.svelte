<script>
	import { darkMode } from '$lib/stores/darkMode';
</script>

<a href="/" on:click
	><img
		src={$darkMode ? '/assets/logo-dark.svg' : '/assets/logo.svg'}
		alt="The DevFire Labs logo"
		class="md:w-[220px] lg:w-[250px] 2xl:w-[320px]"
	/></a
>
