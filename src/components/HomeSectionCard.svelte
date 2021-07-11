<script>
  import { Link } from "yrv";

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
</style>
