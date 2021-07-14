<script>
	import { Link } from 'yrv';
	import { ourWork as content } from '../utils';
</script>

<section class="px-5 mt-6 md:px-8 md:mt-6">
	<h2 class="home-section-title">our work</h2>
	{#each content as { img, title, body }, i (i)}
		<div class="project-card">
			<Link href={`/ourwork/${i}`} class="">
				<img src={img.src} alt={img.alt} class="object-fill w-full" />

				<div class="md:relative md:-mt-44 ">
					<div class="md:pb-8 md:pl-6 md:pt-2">
						<h3
							class="text-2xl md:mt-0 md:text-6xl md:text-white md:absolute md:wrapper font-display"
						>
							{title}
						</h3>
						<p
							class="leading-tight tracking-wider md:text-2xl md:text-white md:relative font-mono text-lg mt-1.5 md:mt-16"
						>
							{@html body}
						</p>
					</div>
				</div>
			</Link>
		</div>
	{/each}
	<Link href="/blog"
		><div class="font-mono font-bold text-[20px] mt-4">
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
