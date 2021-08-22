<script>
	import ProjectTile from '$lib/components/ProjectTile.svelte';
	import { ourWork as content } from '$lib/utils';
</script>

<svelte:head><title>devfirelabs - Our Work</title></svelte:head>


<div id="ourwork" class="px-4 mb-12 md:px-20 xl:mb-16">
	<h1 class="title">Our Work</h1>
	<p class="subtitle">
		What we’re up to; what we’re into. If you suffer from FOMO, check out below.
	</p>
	<section class="services section">
		<h2 class="service">Branding</h2>
		<h2 class="service">Mobile & Web Dev.</h2>
		<h2 class="service">Photography</h2>
		<h2 class="service">Graphic Design</h2>
	</section>
	<section class="section">
		{#each content as project, i (i)}
			<ProjectTile {project} {i} />
		{/each}
	</section>
</div>

<style lang="postcss">
	.service {
		@apply font-display text-2xl mt-1 pl-2 first:mt-0 md:text-5xl md:mt-4 lg:text-7xl lg:mt-6 2xl:text-9xl;
	}

	.section {
		@apply mt-6 md:mt-8 lg:mt-12 xl:mt-16 2xl:mt-20;
	}
</style>
