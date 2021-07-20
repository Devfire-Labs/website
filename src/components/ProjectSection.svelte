<script>
	import { Link } from 'yrv';
	import { ourWork as content } from '../utils';
	import ProjectTile from './ProjectTile.svelte';
</script>

<section class="home-section">
	<h2 class="home-section-title">our work</h2>
	{#each content as project, i (i)}
		<ProjectTile {project} {i} />
	{/each}
	<Link href="/ourwork"
		><div
			class="font-mono font-bold mt-6 md:mt-2 md:ml-4 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>
			More projects<span class="text-fire-1">...</span>
		</div></Link
	>
</section>
