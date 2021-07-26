<script>
	import AboutCard from '../components/AboutCard.svelte';
	import Cta from '../components/CTA.svelte';
	import { darkMode } from '../stores/darkMode';

	let cards;
	$: cards = [
		{
			title: 'About Us',
			img: {
				src: $darkMode
					? '/assets/information-dark.svg'
					: '/assets/information.svg',
				alt: 'Information Icon',
			},
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt. Quis enim redargueret? Innumerabilia dici possunt in hanc sententiam, sed non necesse est. Si quicquam extra virtutem habeatur in bonis.',
		},
		{
			title: 'What We Do',
			img: {
				src: $darkMode
					? '/assets/fingerprints-dark.svg'
					: '/assets/fingerprints.svg',
				alt: 'Thnkful Icon',
			},
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt. Quis enim redargueret? Innumerabilia dici possunt in hanc sententiam, sed non necesse est. Si quicquam extra virtutem habeatur in bonis.',
		},
		{
			title: 'Our Goal',
			img: {
				src: $darkMode ? '/assets/puzzle-dark.svg' : '/assets/puzzle.svg',
				alt: 'Target Icon',
			},
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt. Quis enim redargueret? Innumerabilia dici possunt in hanc sententiam, sed non necesse est. Si quicquam extra virtutem habeatur in bonis.',
		},
	];
</script>

<!-- cards -->
{#each cards as { title, img, description }, i (i)}
	<AboutCard {title} {img} {description} />
{/each}

<!-- Other Text  -->

<div class="py-6 text-center">
	<h1 class="text-4xl font-display">Let's Work Together</h1>
	<p class="mt-2 mb-4 ml-6 mr-6 font-mono text-xl">
		If you want to work with us, check out our career opportunities.
	</p>
	<div class="py-4 pb-6"><Cta /></div>
</div>

<style>
	.greenBar {
		@apply flex-grow px-5 bg-fire-1;
	}
	.container {
		@apply flex flex-col w-full px-4 py-4;
	}

	.textContainer {
		@apply flex justify-between w-full;
	}

	.titleText {
		@apply text-3xl font-display;
	}

	:global(.description) {
		@apply pt-2 pr-4 font-sans text-lg;
	}
</style>
