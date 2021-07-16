<script>
	import BlogSection from '../components/BlogSection.svelte';
	import CTA from '../components/CTA.svelte';
	import Hero from '../components/Hero.svelte';
	import ProjectSection from '../components/ProjectSection.svelte';
	import ScrollingTitle from '../components/ScrollingTitle.svelte';
</script>

<div id="home">
	<Hero />
	<ScrollingTitle />
	<ProjectSection />
	<BlogSection />
	<CTA float={true} />
</div>

<style>
	#home :global(.home-section-title) {
		@apply text-3xl font-bold font-mono md:text-5xl md:px-3;
	}
	#home :global(.home-section) {
		@apply px-5 mt-6 md:px-8 md:mt-6;
	}
</style>
