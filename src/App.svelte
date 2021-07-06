<script>
  import Cta from "./components/CTA.svelte";
  import Hero from "./components/Hero.svelte";
  import HomeSection from "./components/HomeSection.svelte";
  import Navbar from "./components/Navbar.svelte";
  import ScrollingTitle from "./components/ScrollingTitle.svelte";
  import { ourwork } from "./OurWorkContent";
  import Footer from "./components/Footer.svelte";
</script>

<main class="container">
  <Navbar />
  <Hero />
  <Cta />
  <ScrollingTitle />
  <HomeSection title="our work" content={ourwork} />
  <Footer />
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
</style>
