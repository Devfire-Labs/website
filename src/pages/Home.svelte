<script>
  import CTA from "../components/CTA.svelte";
  import Hero from "../components/Hero.svelte";
  import HomeSection from "../components/HomeSection.svelte";
  import ScrollingTitle from "../components/ScrollingTitle.svelte";
  import { ourWork, blog } from "../utils";
</script>

<div id="home">
  <Hero />
  <ScrollingTitle />
  <HomeSection title="Our Work" content={ourWork} />
  <HomeSection title="Blog" content={blog} />

  <CTA float={true} />
</div>
