<script>
	import { Link } from 'yrv';

	export let post, id, section;
	const { title, body, img } = post;
</script>

<div class="card">
	<Link href={`/${section}/${id}`}>
		{#if !(section == 'blog')}<img src={img.src} alt={img.alt} class="" /> {/if}
		<h3 class=" font-mono font-bold text-2xl mt-2">{title}</h3>
		<p class=" font-mono text-lg mt-1.5 truncate">{@html body}</p>
	</Link>
</div>

<style>
	.card {
		@apply mt-3;
	}

</style>
