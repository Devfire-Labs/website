<script>
	import { Link } from 'yrv';
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);
	export let project, i;

	const {
		img: { src, alt },
		title,
		body,
	} = project;
</script>

<div class="project-card" class:first-project-card={i === 0}>
	<Link href={`/ourwork/${i}`} class="">
		<div
			style={`background-image: url(${
				vw >= 768 ? src : ''
			}); background-repeat: no-repeat;`}
			class="md:h-96 md:flex md:flex-col md:justify-end md:bg-cover md:pb-6 md:pl-6 lg:h-[500px] lg:pb-12 lg:pl-8 xl:h-[600px] 2xl:h-[700px]"
		>
			<img {src} {alt} class="object-fill md:hidden" />
			<div class="">
				<div class="md:text-white">
					<h3
						class="text-2xl mt-2 md:mt-0 md:text-5xl lg:text-6xl xl:text-7xl font-display"
					>
						{title}
					</h3>
					<p
						class="leading-tight tracking-wider md:text-xl lg:text-2xl xl:text-3xl font-mono text-lg mt-1.5 md:mt-4 xl:mt-6"
					>
						{@html body}
					</p>
					<div
						class="font-mono font-bold mt-4 text-lg lg:text-2xl xl:mt-8 rounded-full border-2 border-fire-1 dark:border-fire-2 inline-block px-3 "
					>
						Read more<span class="text-fire-1 dark:text-fire-2">...</span>
					</div>
				</div>
			</div>
		</div>
	</Link>
</div>

<style>
	.project-card {
		@apply mt-6 md:mt-4 md:mb-8 md:ml-3 md:mr-3;
	}

	.first-project-card {
		@apply mt-0;
	}
</style>
