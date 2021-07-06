<script>
	import { Link } from 'yrv';

	export let post, id;
	const { title, body, img } = post;
</script>

<div class="project-card">
	<Link href={`/blog/${id}`}>
		<img src={img.src} alt={img.alt} class="" />
		<h3 class=" font-display text-2xl mt-2">{title}</h3>
		<p class=" font-mono text-lg mt-1.5">{@html body}</p>
	</Link>
</div>

<style>
	.project-card {
		@apply mt-5;
	}
</style>
