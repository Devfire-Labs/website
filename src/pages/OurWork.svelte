<script>
	import { Link } from 'yrv';
	import { ourWork as content } from '../utils';
</script>

<div class="ourwork pl-4">
	<h1 class="title">Our Work</h1>
	<p class="subtitle">
		What we’re up to; what we’re into. If you suffer from FOMO, check out below.
	</p>
	<section class="services mt-6">
		<h2 class="service">Branding</h2>
		<h2 class="service">Mobile & Web Dev.</h2>
		<h2 class="service">Photography</h2>
		<h2 class="service">Graphic Design</h2>
	</section>
	<section class="projects pr-4">
		{#each content as { img, title, body }, i (i)}
			<div class="project-card mt-8 last:mb-8">
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
								class=" ml-0.5 leading-5 tracking-wider md:text-2xl md:text-white md:relative font-mono text-lg mt-1.5 md:mt-16"
							>
								{@html body}
							</p>
						</div>
					</div>
				</Link>
			</div>
		{/each}
	</section>
</div>

<style>
	.service {
		@apply font-display text-2xl mt-1 first:mt-0;
	}
</style>
