<script>
  import { Link } from "yrv";

<<<<<<< HEAD
  export let post, id;
  const { title, body, img } = post;
</script>

<div class="project-card">
  <Link href={`/blog/${id}`}>
    <img src={img.src} alt={img.alt} class="" />

    <div class="md:relative md:-mt-36 ">
      <div class="md:p-6 ">
        <h3
          class="mt-2 text-2xl md:text-6xl md:text-white md:absolute md:wrapper font-display"
        >
          {title}
        </h3>
        <p
          class="md:text-2xl md:text-white md:relative font-mono text-lg mt-1.5 md:mt-20"
        />
      </div>
    </div>
    {@html body}
  </Link>
</div>

<style>
  .project-card {
    @apply mt-5;
  }

  /* .text-position {
    @apply md:mb-16;
  } */
=======
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

>>>>>>> 8a2ca42e35b615e6b6071b214d93ecc93213148b
</style>
