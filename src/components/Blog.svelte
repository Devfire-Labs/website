<script>
	import { ourWorkPosts as posts } from '../OurWorkContent';
	export let postId;
	const post = posts[postId];
	const { title, type, body, imgCarousel } = post;
	console.log('Post: ', post);
</script>

<div class="post-container mt-7">
	<div class="px-4">
		<h1 class="font-display text-2xl">{title}</h1>
		<h2 class="font-mono font-bold text-xl">{type}</h2>
	</div>
	<div class="scrolling-wrapper">
		{#each imgCarousel as { src, alt }, i (i)}
			<img {src} {alt} class="thumbnail" />
		{/each}
	</div>
	<p class=" font-mono mt-2 px-4">{@html body}</p>
</div>

<style>
	.scrolling-wrapper {
		-webkit-overflow-scrolling: touch;
		@apply flex flex-nowrap overflow-x-auto;
	}

	.scrolling-wrapper::-webkit-scrollbar {
		display: none;
	}

	.thumbnail {
		@apply object-contain w-full mt-2;
	}
</style>
