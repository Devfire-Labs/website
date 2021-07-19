<script>
	import BlogSection from '../components/BlogSection.svelte';
	import CTA from '../components/CTA.svelte';
	import Hero from '../components/Hero.svelte';
	import ProjectSection from '../components/ProjectSection.svelte';
	import ScrollingTitle from '../components/ScrollingTitle.svelte';
</script>

<div id="home" class="">
	<Hero />
	<ScrollingTitle />
	<ProjectSection />
	<BlogSection />
	<CTA float={true} />
</div>

<style>
	#home :global(.home-section-title) {
		@apply text-3xl font-bold font-mono mb-4 md:text-5xl md:px-3 xl:text-6xl xl:mb-6 xl:mt-8 2xl:text-7xl 2xl:mb-8 2xl:mt-12;
	}

	/* #home :global(.home-section) {
		@apply px-5 mt-6 md:px-8 md:mt-6;
	} */
</style>
