<script>
	import { darkMode } from '../stores/darkMode';
	let color = 'black';
	let style;
	$: {
		color = $darkMode ? 'white' : 'black';
		style = `-webkit-text-stroke: 2px ${color};`;
	}
</script>

<div class="carousel">
	<div class="carousel-inner">
		<div class="">
			<div class="carousel-item">
				<div class="text" {style}>devfirelabs</div>
			</div>
			<div class="carousel-item">
				<div class="text" {style}>devfirelabs</div>
			</div>
		</div>
	</div>
</div>

<style>
	.carousel {
		@apply flex relative w-full h-32 lg:h-36 xl:h-44 2xl:h-48 overflow-hidden my-6 xl:my-14 2xl:my-20;
	}

	.carousel-inner {
		@apply flex absolute top-0 left-0 items-center justify-start w-full h-full whitespace-nowrap;
	}
	.carousel-inner > div {
		@apply flex;
		animation: scrollText 10s infinite linear;
	}
	.text {
		@apply text-9xl md:text-10xl lg:text-11xl xl:text-12xl 2xl:text-13xl font-mono font-bold;
		-webkit-text-stroke: 2px black;
		color: transparent;
	}

	@keyframes scrollText {
		from {
			-webkit-transform: translateX(0%);
			-moz-transform: translateX(0%);
			-ms-transform: translateX(0%);
			-o-transform: translateX(0%);
			transform: translateX(0%);
		}
		to {
			-webkit-transform: translateX(-50%);
			-moz-transform: translateX(-50%);
			-ms-transform: translateX(-50%);
			-o-transform: translateX(-50%);
			transform: translateX(-50%);
		}
	}
</style>
