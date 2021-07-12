<script>
  import HomeSectionCard from "./HomeSectionCard.svelte";

  export let title, content;
</script>

<section class="px-5 mt-6 md:px-8 md:mt-6">
  <h2 class="text-3xl font-bold md:text-5xl md:px-3">{title}</h2>
  {#each content as post, i (i)}
    <HomeSectionCard {post} section={title} id={i} />
  {/each}
</section>

<style>
  .card + .card {
    @apply mt-5;
  }
</style>
