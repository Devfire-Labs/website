<script>
	import { ourWork as posts } from '../OurWorkContent';
	import dayjs from 'dayjs';
</script>

<div class="px-4 mt-7">
	<h1 class="title">Blog</h1>
	{#each posts as { img, title, body, date }, i (i)}
		<div class="">
			<h2 class="">{title}</h2>
			<p class="">{dayjs(date).format('DD MMMM, YYYY')}</p>
		</div>
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
