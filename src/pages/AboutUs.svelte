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
				"DevFire Labs is a full-service website and software development based in the Dominican Republic. We are a group of experienced designers and developers who work together to produce amazing designs and strategies that are suited to your company's goals and objectives.",
		},
		{
			title: 'What We Do',
			img: {
				src: $darkMode
					? '/assets/fingerprints-dark.svg'
					: '/assets/fingerprints.svg',
				alt: 'Thinkful Icon',
			},
			description:
				"We assist our clients in defining, communicating, and realizing their goals. We've been creating high quality digital projects for companies and organizations at the top of their fields. Website design and development, software development,mobile apps development, content creation, branding, and design are some of our main specializations. " +
				" Tell us what you want to achieve, and we'll show you how. We'd love to be a part of any project you're focusing on.",
		},
		{
			title: 'Our Goal',
			img: {
				src: $darkMode ? '/assets/goal-dark.svg' : '/assets/goal.svg',
				alt: 'Target Icon',
			},
			description:
				'We help businesses create websites and mobile applications that are distinctive, conversion-focused, and future-proof. The people we surround ourselves with share our passion and goals, which is why we continue to grow.',
		},
		{
			title: 'Our Approach',
			img: {
				src: $darkMode ? '/assets/puzzle-dark.svg' : '/assets/puzzle.svg',
				alt: 'Target Icon',
			},

			description:
				"<strong>Full Stack Development</strong> \n We have proven experience working across a wide range of technologies, platforms and coding languages. Whether we’re focusing on the front-end of a project or offering back-end support, our full range of experience allows us to choose the specific tools and solutions that will work best for your unique business needs. \n <strong>\nUI\\UX Design</strong> \nOur designs will set you apart from the competition and create an interesting and refreshing experience for your users. We make our code as minimal as possible while allowing our creative team to focus on the front end design. \n \n <strong>Quality Assurance</strong> \n Easy-to-use review tools are included in our simplified QA process, making feedback pleasant and productive. Before and after launch, we'll make sure your bespoke solution works seamlessly across all devices and browsers.",
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
		No matter what your next move is, we'd love to hear about your brand and
		business issues.
	</p>
	<div class="py-4 pb-6"><Cta /></div>
</div>

<style>
	.greenBar {
		@apply flex-grow px-5 bg-fire-1;
	}
	.container {
		@apply flex flex-col w-full px-4 py-4 whitespace-pre-line;
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
