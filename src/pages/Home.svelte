<script>
	import CTA from '../components/CTA.svelte';
	import Hero from '../components/Hero.svelte';
	import HomeSection from '../components/HomeSection.svelte';
	import ScrollingTitle from '../components/ScrollingTitle.svelte';
	import { ourWork } from '../OurWorkContent';
</script>

<div id="home">
	<Hero />
	<ScrollingTitle />
	<HomeSection title="our work" content={ourWork} />
	<CTA float={true} />
</div>
