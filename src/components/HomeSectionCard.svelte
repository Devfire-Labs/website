<script>
  import { Link } from "yrv";

  export let post, id;
  const { title, body, img } = post;
</script>

<div class="project-card">
  <Link href={`/ourwork/${id}`} class="">
    <img src={img.src} alt={img.alt} class="object-fill w-full" />

    <div class="md:relative md:-mt-44 ">
      <div class="md:pb-8 md:pl-6 md:pt-2">
        <h3
          class="text-2xl md:mt-0 md:text-6xl md:text-white md:absolute md:wrapper font-display"
        >
          {title}
        </h3>
        <p
          class="md:text-2xl md:text-white md:relative font-mono text-lg mt-1.5 md:mt-16"
        >
          {@html body}
        </p>

        <a href="#" class="md:text-white md:font-bold md:text-2xl">
          Read more <span class="text-fire-1">...</span>
        </a>
      </div>
    </div>
  </Link>
</div>

<style>
  .project-card {
    @apply mt-5 md:mt-4 md:mb-8 md:ml-3 md:mr-3;
  }

  /* .text-position {
    @apply md:mb-16;
  } */
</style>
