<script>
	import { Link } from 'yrv';
	import { blog as content } from '../utils';
</script>

<section id="blog-section" class="home-section">
	<h2 class="home-section-title">blog</h2>
	{#each content as { title, body }, i (i)}
		<Link href={`/blog/${i}`} class="">
			<div
				class="blog-post block border-black border-b px-2 py-3"
				class:first-blog-post={i === 0}
			>
				<h3
					class="text-[20px] md:mt-0 md:text-6xl md:text-white md:absolute md:wrapper font-mono font-bold"
				>
					{title}
				</h3>
				<p
					class="leading-tight font-bold font-mono text-scroll md:text-2xl md:text-white text-lg mt-1.5 md:mt-16"
				>
					{@html body}
				</p>
			</div>
		</Link>
	{/each}
	<Link href="/blog"
		><div class="font-mono font-bold text-[20px] mt-3 ml-2">
			Read more<span class="text-fire-1">...</span>
		</div></Link
	>
</section>

<style>
	/* #blog-section :global(.blog-post:first-child) {
	} */

	.first-blog-post {
		border-top: 1px solid black;
	}
</style>
