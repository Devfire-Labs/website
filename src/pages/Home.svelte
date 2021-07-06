<script>
	import Cta from '../components/CTA.svelte';
	import Hero from '../components/Hero.svelte';
	import HomeSection from '../components/HomeSection.svelte';
	import ScrollingTitle from '../components/ScrollingTitle.svelte';
	import { ourWork } from '../OurWorkContent';
</script>

<div id="home">
	<Hero />
	<Cta />
	<ScrollingTitle />
	<HomeSection title="our work" content={ourWork} />
</div>
