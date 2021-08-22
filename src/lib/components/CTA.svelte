<script>
	import { getContext } from 'svelte';
	export let float;
	const { fireVariant, textColor } = getContext('color');
</script>

<a
	href="/hit-us-up"
	button
	class={'cta ' + (float && 'float')}
	style="background-color: {$fireVariant}; color: {$textColor};"
	><div class="text">
		<div class="">
			<span class="hmu">HIT</span> <span class="hmu">US</span>
			<span class="hmu">UP</span>
		</div>
	</div>
</a>

<style lang="postcss">
	.cta {
		letter-spacing: -0.2em;
		@apply select-none font-bold text-2xl xl:text-3xl 2xl:text-5xl w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] 2xl:w-[220px] 2xl:h-[220px]  rounded-full p-2 2xl:p-4 whitespace-nowrap overflow-hidden bg-opacity-90;
		/* @apply select-none font-bold text-2xl xl:text-3xl 2xl:text-5xl w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] 2xl:w-[220px] 2xl:h-[220px] rounded-full p-2 2xl:p-4 bg-opacity-90; */
	}
	.text {
		@apply flex flex-col items-center justify-center w-full h-full;
	}
	.cta:focus:active {
		@apply transform scale-90 transition duration-100;
	}

	span.hmu {
		letter-spacing: -0.08em;
		/* @apply 2xl:tracking-tight; */
	}

	.float {
		@apply sticky bottom-3.5 right-3.5 ml-auto mb-4 z-30 block;
		top: -1px;
	}

	@media (min-width: 1536px) {
		.cta {
			letter-spacing: -0.01em;
		}
	}
</style>
