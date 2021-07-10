<script>
	import { Link } from 'yrv';
	export let float;
</script>

<Link href="/hit-us-up" button class={'cta ' + (float && 'float')}>
	<span class="hmu">HIT</span> <span class="hmu">US</span>
	<span class="hmu">UP</span>
</Link>

<style>
	:global(.cta) {
		letter-spacing: -0.2em;
		@apply select-none font-bold text-2xl tracking-tighter w-[120px] h-[120px] bg-fire-1 rounded-full p-2 whitespace-nowrap overflow-hidden bg-opacity-90;
	}
	:global(.cta:focus:active) {
		@apply transform scale-90 transition duration-100;
	}
	:global(span.hmu) {
		letter-spacing: -0.08em;
	}
	:global(.float) {
		@apply sticky bottom-3.5 right-3.5 ml-auto mb-4 z-30 block;
	}
</style>
