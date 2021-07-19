<script>
	import { Link } from 'yrv';
	import { ourWork as content } from '../utils';
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);
</script>

<section class="px-5 mt-6 md:px-8 md:mt-6 lg:px-20 2xl:px-0">
	<h2 class="home-section-title">our work</h2>
	{#each content as { img: { src, alt }, title, body }, i (i)}
		<div class="project-card">
			<Link href={`/ourwork/${i}`} class="">
				<div
					style={`background-image: url(${
						vw >= 768 ? src : ''
					}); background-repeat: no-repeat;`}
					class="md:h-96 md:flex md:flex-col md:justify-end md:bg-cover md:pb-4 md:pl-4 lg:h-[500px] lg:pb-12 lg:pl-8 xl:h-[600px] 2xl:h-[700px]"
				>
					<img {src} {alt} class="object-fill md:hidden" />
					<div class="">
						<div class="md:text-white">
							<h3 class="text-2xl md:mt-0 md:text-5xl lg:text-6xl xl:text-7xl font-display">
								{title}
							</h3>
							<p
								class="leading-tight tracking-wider md:text-xl lg:text-2xl xl:text-3xl font-mono text-lg mt-1.5 md:mt-4 xl:mt-6"
							>
								{@html body}
							</p>
							<div class="font-mono font-bold lg:text-lg xl:text-2xl mt-2 md:text-2xl xl:mt-8">
								Read more<span class="text-fire-1">...</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	{/each}
	<Link href="/blog"
		><div class="font-mono font-bold text-[20px] mt-2 md:ml-4 md:text-2xl xl:text-4xl">
			More projects<span class="text-fire-1">...</span>
		</div></Link
	>
</section>

<style>
	.project-card {
		@apply mt-5 md:mt-4 md:mb-8 md:ml-3 md:mr-3;
	}
	.card + .card {
		@apply mt-5;
	}
</style>
