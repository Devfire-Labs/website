<script>
	import BlogSection from '$lib/components/BlogSection.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import ScrollingTitle from '$lib/components/ScrollingTitle.svelte';
</script>

<svelte:head><title>devfirelabs - Home</title></svelte:head>

<div id="home" class="">
	<Hero />
	<ScrollingTitle />
	<ProjectSection />
	<BlogSection />
	<CTA float={true} />
</div>

<style lang="postcss">
	.home-section-title {
		@apply text-3xl font-bold font-mono mb-4 md:text-5xl md:px-3 xl:text-6xl xl:mb-6 xl:mt-8 2xl:text-7xl 2xl:mb-8 2xl:mt-12;
	}

	.home-section {
		@apply px-4 mt-6 md:px-8 md:mt-12 lg:px-20 2xl:px-0 2xl:mt-16;
	}
</style>
