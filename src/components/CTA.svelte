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
		@apply select-none font-bold text-2xl xl:text-3xl 2xl:text-5xl w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] 2xl:w-[180px] 2xl:h-[180px] bg-fire-1 rounded-full p-2 2xl:p-4 whitespace-nowrap overflow-hidden bg-opacity-90;
	}
	:global(.cta:focus:active) {
		@apply transform scale-90 transition duration-100;
	}
	:global(span.hmu) {
		letter-spacing: -0.08em;
		/* @apply 2xl:tracking-tight; */
	}
	:global(.float) {
		@apply sticky bottom-3.5 right-3.5 ml-auto mb-4 z-30 block;
		top: -1px;
	}

	@media (min-width: 1536px) {
		:global(.cta) {
			letter-spacing: -0.01em;
		}
	}
</style>
