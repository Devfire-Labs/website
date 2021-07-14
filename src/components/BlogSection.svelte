<script>
	import { Link } from 'yrv';
	import { blog as content } from '../utils';
</script>

<section class="home-section">
	<h2 class="home-section-title">blog</h2>
	{#each content as { title, body }, i (i)}
		<Link href={`/blog/${i}`} class="">
			<div class="mt-4 md:pb-8 md:pl-6 md:pt-2 border-black border-t last:border-b py-4 px-2">
				<h3
					class="text-[20px] md:mt-0 md:text-6xl md:text-white md:absolute md:wrapper font-mono font-bold"
				>
					{title}
				</h3>
				<p
					class="leading-tight font-bold font-mono text-scroll md:text-2xl md:text-white md:relative text-lg mt-1.5 md:mt-16"
				>
					{@html body}
				</p>
			</div>
		</Link>
	{/each}
	<Link href="/blog"
		><div class="font-mono font-bold text-[20px] mt-4">
			Read more<span class="text-fire-1">...</span>
		</div></Link
	>
</section>
