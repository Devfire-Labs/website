<script>
	import { Link } from 'yrv';
	import { darkMode } from '../stores/darkMode';
</script>

<Link href="/" on:click
	><img
		src={$darkMode ? '/assets/logo-dark.svg' : '/assets/logo.svg'}
		alt="The DevFire Labs logo"
		class="md:w-[220px] lg:w-[250px] 2xl:w-[320px]"
	/></Link
>
