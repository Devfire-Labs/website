<script context="module">
	import { ourWorkPosts as posts } from '$lib/utils';
	export const load = ({ page }) => {
		let id = page.params.id;
		return { props: { post: posts[id] } };
	};
</script>

<script>
	export let post;
	const { title, type, body, imgCarousel } = post;
</script>

<svelte:head><title>devfirelabs - {title}</title></svelte:head>


<div class="container mb-12 mr-2 mt-7 md:ml-2 md:mr-4 xl:ml-14">
	<div class="px-4">
		<h1 class="mt-10 text-3xl font-display md:text-4xl xl:text-6xl">{title}</h1>
		<h2 class="mt-1 mb-3 font-mono text-xl font-bold md:text-2xl xl:text-3xl">
			{type}
		</h2>
	</div>
	<div class="scrolling-wrapper">
		{#each imgCarousel as { src, alt }, i (i)}
			<img {src} {alt} class=" thumbnail" />
		{/each}
	</div>
	<p class="px-5 my-5 font-mono md:my-7 xl:my-8 xl:text-xl">{@html body}</p>
</div>

<style lang="postcss">
	.scrolling-wrapper {
		-webkit-overflow-scrolling: touch;
		@apply flex flex-nowrap overflow-x-auto;
	}

	.scrolling-wrapper::-webkit-scrollbar {
		display: none;
	}

	.thumbnail {
		@apply object-contain w-full md:h-72 lg:h-80 xl:h-96 mt-2 px-2;
	}
</style>
