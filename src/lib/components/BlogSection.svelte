<script>
	import { getContext } from 'svelte';
	import { blog as content } from '$lib/utils';
	const { darkMode } = getContext('color');
</script>

<section id="blog-section" class="home-section">
	<h2 class="home-section-title">blog</h2>
	{#each content as { title, description }, i (i)}
		<a href={`/blog/${i}`} class="">
			<div
				class="blog-post block border-b px-2 py-3 md:px-4 md:py-6 lg:py-8 xl:py-12"
				class:first-blog-post={i === 0}
				class:border-black={!$darkMode}
				class:border-white={$darkMode}
			>
				<h3
					class="text-lg md:mt-0 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-mono font-bold"
				>
					{title}
				</h3>
				<p
					class="leading-tight font-bold font-mono md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-1.5 lg:mt-4 xl:mt-8"
					class:text-scroll={!$darkMode}
					class:text-gray-300={$darkMode}
				>
					{@html description}
				</p>
			</div>
		</a>
	{/each}
	<a href="/blog"
		><div
			class="font-mono font-bold text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl mt-3 ml-2 lg:ml-4 lg:mt-6"
		>
			Read more<span class="text-fire-1 dark:text-fire-2">...</span>
		</div></a
	>
</section>

<style>
	.first-blog-post {
		@apply border-t;
	}
</style>
