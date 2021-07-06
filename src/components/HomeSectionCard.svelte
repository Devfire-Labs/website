<script>
	export let post;
	const { title, body, img, link = '#' } = post;
</script>

<a class=" mt-5" href={link}>
	<img src={img.src} alt={img.alt} class="" />
	<h3 class=" font-display text-2xl mt-2">{title}</h3>
	<p class=" font-mono text-lg mt-1.5">{@html body}</p>
</a>
