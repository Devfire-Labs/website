<script>
	import { blog as posts } from '../utils';
	import dayjs from 'dayjs';
	import { readingTime } from '../utils';
	import Link from 'yrv/build/dev/lib/Link.svelte';
</script>

<div class="px-4 mt-7 mb-4">
	<h1 class="title">Blog</h1>
	<p class="font-mono pr-4 mt-1">
		What we’re up to; what we’re into. If you suffer from FOMO, check out below.
	</p>
	{#each posts as { img, title, body, date }, i (i)}
		<Link href={'/blog/' + i}>
			<div class="flex mt-4 first:mt-8 font-sans">
				<img src={img.src} alt={img.alt} class=" w-20 h-20 object-cover mr-3" />
				<div class="">
					<p class="">
						{dayjs(date).format('DD MMMM, YYYY')} - {readingTime(body)} min read.
					</p>
					<h2 class="font-medium text-lg">{title}</h2>
				</div>
			</div>
		</Link>
	{/each}
	<div class="my-16">
		<img src="/assets/online-presence.svg" alt="" class="  w-4/5 mx-auto" />
		<div class="flex justify-center mt-4 w-4/5 mx-auto">
			<input type="text" class="border-none w-3/5" placeholder="Email" />
			<button class="bg-fire-1 font-display px-4 w-2/5 text-sm">Get Started</button>
		</div>
	</div>
</div>
