<script>
	import HomeSectionCard from './HomeSectionCard.svelte';

	export let title, content;
</script>

<section class="px-5 mt-4">
	<h2 class="font-bold text-3xl">{title}</h2>
	{#each content as post, i (i)}
		<HomeSectionCard {post} />
	{/each}
</section>
