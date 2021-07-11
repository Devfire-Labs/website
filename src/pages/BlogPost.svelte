<script>
	import { blog } from '../utils';
	import dayjs from 'dayjs';
	export let postId;
	const { img, author, title, body, date } = blog[postId];
	$: console.log(postId);
</script>

<div class="mt-7 px-4">
	<h2 class="font-sans font-medium text-xl">{title}</h2>
	<div class="flex items-center font-sans font-light mt-3">
		<img
			src={author.img.src}
			alt={author.img.alt}
			class="rounded-full w-9 h-9"
		/>
		<p class="ml-2">{author.name}</p>
		<span class="font-bold mx-2"> &middot; </span>
		{dayjs(date).format('DD MMMM, YYYY')}
	</div>

	<img src={img.src} alt={img.alt} class="mt-5" />

	<p class="font-sans mt-5 mb-4 leading-8">{@html body}</p>
</div>
