<div class="carousel">
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
			transform: translateX(-528px);
		}
	}
	.carousel {
		width: 100%;
		overflow: hidden;
		position: relative;
		margin-top: .8rem;
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
</style>
