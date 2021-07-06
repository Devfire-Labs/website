<script>
  import Cta from "./components/CTA.svelte";
  import Hero from "./components/Hero.svelte";
  import HomeSection from "./components/HomeSection.svelte";
  import Navbar from "./components/Navbar.svelte";
  import ScrollingTitle from "./components/ScrollingTitle.svelte";
  import { ourwork } from "./OurWorkContent";
  import Footer from "./components/Footer.svelte";
  import Menu from "./components/Menu.svelte";
</script>

<main class="container">
  <Navbar />
  <Hero />
  <Cta />
  <ScrollingTitle />
  <HomeSection title="our work" content={ourwork} />
  <Footer />
  <Menu />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  body {
    @apply font-mono bg-light antialiased;
  }
  ::selection {
    @apply text-dark  bg-fire-1 bg-opacity-60;
  }
  main.container {
    @apply w-full;
  }
  .post-subtitle {
    @apply font-sans font-semibold text-xl mt-3.5;
  }
  .post-text {
    @apply font-sans mt-2;
  }
  .link {
    @apply mt-2 font-sans font-light text-white;
  }
</style>
