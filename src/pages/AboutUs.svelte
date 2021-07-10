<script>
  import Cta from "../components/CTA.svelte";
</script>

<!-- cards -->

<div class="flex m-4 mt-6 bg-white ">
  <div class="greenBar" />
  <div class="container">
    <div class="textContainer">
      <h1 class="titleText">About Us</h1>
      <img
        src="/assets/information.svg"
        alt="Information Icon"
        class="w-8 h-8"
      />
    </div>
    <p class="description">
      We are a company that works with the business of creating unforgettable
      interactive products with people like you. We’ve spent the last 5 years
      helping over 25,000 teams.
    </p>
  </div>
</div>

<div class="flex m-4 mt-6 bg-white ">
  <div class="greenBar" />
  <div class="container">
    <div class="textContainer">
      <h1 class="titleText">What We Do</h1>
      <img src="/assets/thinkful.svg" alt="Thnkful Icon" class="w-8 h-8" />
    </div>
    <p class="description">
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus.
    </p>
  </div>
</div>

<div class="flex m-4 mt-6 bg-white ">
  <div class="greenBar" />
  <div class="container">
    <div class="textContainer">
      <h1 class="titleText">Our Goal</h1>
      <img src="/assets/target.svg" alt="Target Icon" class="w-8 h-8" />
    </div>
    <p class="description">
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus.
    </p>
  </div>
</div>

<!-- Other Text  -->
<div class="flex flex-col items-center py-6">
  <h1 class="text-4xl font-display ">Let's Work Together</h1>
  <p class="mt-2 mb-4 ml-6 mr-6 font-mono text-xl text-center">
    We seem good people, right? If you want to work with us, check out our
    career opportunities.
  </p>
  <div class="py-4 pb-6"><Cta /></div>
</div>

<style>
  .greenBar {
    @apply flex-grow px-5 bg-fire-1;
  }
  .container {
    @apply flex flex-col w-full px-4 py-4;
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
