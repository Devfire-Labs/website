<script>
	import { blog as posts } from '../utils';
	import dayjs from 'dayjs';
	import { readingTime } from '../utils';
	import Link from 'yrv/build/dev/lib/Link.svelte';
</script>

<div id="blog-page" class="px-4 mb-4 md:px-20">
	<h1 class="title">Blog</h1>
	<p class="subtitle">
		What we’re up to; what we’re into. If you suffer from FOMO, check out below.
	</p>
	<div class="post-wrapper md:grid md:grid-cols-2 md:gap-10">
		{#each posts as { img, title, description, body, date }, i (i)}
			<Link href={'/blog/' + i} class={`link ` + (i === 0 && 'first')}>
				<img
					src={img.src}
					alt={img.alt}
					class="post-img object-cover mr-3"
					class:first-post-img={i === 0}
				/>
				<div class="">
					<p class="md:my-2" class:first-readtime={i === 0}>
						{dayjs(date).format('DD MMMM, YYYY')} &middot; {readingTime(body)} min
						read.
					</p>
					<h2
						class="font-medium text-lg md:text-xl whitespace-normal"
						class:first-title={i === 0}
					>
						{title}
					</h2>
					<p
						class=" hidden md:block pr-4 md:leading-tight md:mt-1.5"
						class:first-description={i === 0}
					>
						{description}
					</p>
				</div>
			</Link>
		{/each}
	</div>
	<div class="my-16">
		<img src="/assets/online-presence.svg" alt="" class="  w-4/5 mx-auto" />
		<div class="flex justify-center mt-4 w-4/5 mx-auto">
			<input type="text" class="border-none w-3/5" placeholder="Email" />
			<button class="bg-fire-1 font-display px-4 w-2/5 text-sm"
				>Get Started</button
			>
		</div>
	</div>
</div>

<style>
	#blog-page :global(.link) {
		@apply mt-6 font-sans block md:mt-0;
	}
	#blog-page :global(a.first) {
		@apply md:flex md:col-span-2 md:mt-12 md:justify-self-start;
	}
	#blog-page :global(img.first-post-img) {
		@apply md:w-3/5;
	}
	#blog-page :global(.first-readtime) {
		@apply md:mt-0;
	}

	#blog-page :global(.first-readtime) {
		@apply md:mt-0;
	}
</style>
