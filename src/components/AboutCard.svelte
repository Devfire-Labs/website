<script>
  import { darkMode } from "../stores/darkMode";
  export let title, img, description;
  const { src, alt } = img;
</script>

<div
  class="flex m-4 mt-6"
  class:bg-white={!$darkMode}
  class:bg-onix={$darkMode}
>
  <div
    class="flex-grow px-5"
    class:bg-fire-1={!$darkMode}
    class:bg-fire-2={$darkMode}
  />
  <div class="container">
    <div class="textContainer">
      <h1 class="titleText">{title}</h1>
      <img {src} {alt} class="w-8 h-8" />
    </div>
    <p class="description">{@html description}</p>
  </div>
</div>

<style>
  .container {
    @apply flex flex-col w-full px-4 py-4 whitespace-pre-line;
  }

  .textContainer {
    @apply flex justify-between w-full;
  }

  .titleText {
    @apply text-3xl font-display;
  }

  :global(.description) {
    @apply pt-2 pr-4 font-sans text-lg;
  }
</style>
