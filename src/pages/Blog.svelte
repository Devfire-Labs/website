<script>
	import { blog as posts } from '../utils';
	import dayjs from 'dayjs';
	import { readingTime } from '../utils';
	import Link from 'yrv/build/dev/lib/Link.svelte';
</script>

<div class="px-4 mt-7 mb-4">
	<h1 class="title">Blog</h1>
	{#each posts as { img, title, body, date }, i (i)}
		<Link href={'/blog/' + i}>
			<div class="flex mt-4 font-sans ">
				<img src={img.src} alt={img.alt} class=" w-20 h-20 object-cover mr-3" />
				<div class="">
					<h2 class="font-medium text-lg">{title}</h2>
					<p class="">
						{dayjs(date).format('DD MMMM, YYYY')} - {readingTime(body)} min read.
					</p>
				</div>
			</div>
		</Link>
	{/each}
</div>

<!-- 
        img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Nike’s web app',
		body: 'Making the Nike’s website experience <i>swoosh</i>.',
		date: new Date(), -->
<style></style>
