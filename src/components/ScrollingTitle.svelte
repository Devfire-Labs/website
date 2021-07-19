<div class="carousel">
	<div class="carousel-inner">
		<div class="">
			<div class="carousel-item">
				<div class="text">devfirelabs</div>
			</div>
			<div class="carousel-item">
				<div class="text">devfirelabs</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="carousel">
	<div class="carousel-inner">
		<div class="carousel-item">
			<div class="text">devfirelabs</div>
		</div>
		<div class="carousel-item">
			<div class="text">devfirelabs</div>
		</div>
	</div>
</div>

<style>
	@keyframes carousel {
		0% {
			-webkit-transform: translateX(0);
			-moz-transform: translateX(0);
			-ms-transform: translateX(0);
			-o-transform: translateX(0);
			transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(-528px);
			-moz-transform: translateX(-528px);
			-ms-transform: translateX(-528px);
			-o-transform: translateX(-528px);
			transform: translateX(-100%);
		}
	}
	.carousel {
		width: 100%;
		overflow: hidden;
		position: relative;
		margin-top: 0.8rem;
	}

	.carousel-inner {
		animation: carousel 8s linear infinite;
		display: flex;
		/* width: calc(676px * 2); */
		width: fit-content;
	}
	.carousel-item {
		float: left;
		width: 50%;
	}
	.text {
		-webkit-text-stroke: 2px black;
		-webkit-text-fill-color: transparent;
		font-size: 96px;
		letter-spacing: 5.5%;
		@apply font-bold text-scroll;
	}
</!-->
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
