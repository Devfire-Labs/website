<script>
	import { blog as content } from '../utils';
	import dayjs from 'dayjs';
	import Link from 'yrv/build/dev/lib/Link.svelte';
	export let postId;
	const { img, author, title, body, date } = content[postId];
	const related = content.slice(0, 3);
	$: console.log(postId);
</script>

<div id="blog-post" class="mt-7 md:mt-10 xl:mt-16 px-4 md:px-6 lg:px-12 xl:px-24">
	<section class="">
		<Link href="/blog" class="back-link"
			><img src="/assets/chevron-l.svg" alt="" class="" />Blog</Link
		>
		<h2
			class="font-display font-medium text-xl md:text-5xl lg:text-6xl 2xl:text-9xl md:mt-10 xl:mt-16"
		>
			{title}
		</h2>
		<div
			class="flex items-center font-sans md:text-lg xl:text-xl 2xl:text-3xl font-light mt-3 md:mt-6 xl:mt-10 2xl:mt-14"
		>
			<img
				src={author.img.src}
				alt={author.img.alt}
				class="rounded-full w-9 md:w-11 xl:w-14"
			/>
			<p class="ml-2 2xl:ml-4">{author.name}</p>
			<span class="font-bold mx-2"> &middot; </span>
			{dayjs(date).format('DD MMMM, YYYY')}
		</div>
		<img src={img.src} alt={img.alt} class="mt-5 md:mt-8 2xl:mt-14 md:w-4/5 mx-auto" />
		<p
			class="font-sans mt-5 mb-4 leading-6 lg:leading-10 md:mt-8 lg:text-lg xl:text-xl xl:leading-[2.5rem] 2xl:text-3xl 2xl:leading-[3.5rem]"
		>
			{@html body}
		</p>
	</section>
	<section id="related-content">
		<h2 class="mt-6 lg:mt-12 mb-3 text-2xl lg:text-4xl 2xl:text-5xl font-bold">
			related content
		</h2>
		{#each related as { title, description }, i (i)}
			<Link href={`/blog/${i}`} class="">
				<div
					class="blog-post block border-black border-b px-1 py-1.5 lg:px-2 lg:py-3 2xl:px-3 2xl:py-10"
					class:first-blog-post={i === 0}
				>
					<h3 class="font-mono font-bold md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
						{title}
					</h3>
					<p
						class="leading-tight font-bold font-mono text-scroll md:text-lg lg:text-xl 2xl:text-3xl mt-1.5"
					>
						{@html description}
					</p>
				</div>
			</Link>
		{/each}
		<Link href="/blog"
			><div
				class="font-mono font-bold text-lg lg:text-2xl mt-3 mb-4 ml-2 lg:mb-10 2xl:mt-6 2xl:text-4xl"
			>
				Read more<span class="text-fire-1">...</span>
			</div></Link
		>
	</section>
</div>

<style>
	#blog-post :global(.back-link) {
		@apply hidden font-semibold md:flex md:text-2xl xl:text-3xl 2xl:text-5xl;
	}
	#blog-post :global(.back-link > img) {
		@apply rotate-180 mr-2 2xl:mr-4 xl:w-4 2xl:w-5;
	}

	.first-blog-post {
		border-top: 1px solid black;
	}
</style>
