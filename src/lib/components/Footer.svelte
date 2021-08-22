<script>
	import { getContext } from 'svelte';
	import SocialIconsLight from './SocialIconsLight.svelte';

	const { darkMode } = getContext('color');
</script>

<div class="mt-auto" class:bg-deepgray={!$darkMode} class:bg-black={$darkMode}>
	<div class="footer">
		<!-- newsletter section -->
		<div class="hidden md:block lg:mt-0 lg:mb-4">
			<h1
				class="inline-block pb-5 ml-0 subtitle md:text-xl lg:text-2xl md:pb-3 font-display md:px-0 xl:ml-0 2xl:ml-0"
			>
				Newsletter
			</h1>
			<div class="xl:flex">
				<label
					><input
						class="border-none"
						type="email"
						placeholder="Enter email"
					/></label
				>
				<button
					class="block w-full text-black font-display bg-fire-1 dark:bg-fire-2 dark:text-white md:py-1.5 xl:px-4 xl:py-2"
					>Get Started</button
				>
			</div>
		</div>

		<!-- Logo SM -->
		<img
			src={$darkMode ? '/assets/logo-icon-dark.svg' : '/assets/logo-icon.svg'}
			alt="The DevFire Labs logo"
			class="block ml-4 md:hidden"
		/>

		<!-- social Icons -->
		<div
			class="order-first mt-7 md:mt-0 md:ml-0 md:flex-col md:items-center md:order-3"
		>
			<h1 class=" mb-3.5 follow-us">Follow Us:</h1>
			<div class="ml-3">
				<SocialIconsLight rightMargin={'mr-5 md:mr-8'} />
			</div>
		</div>

		<!-- company -->
		<div class="pt-2 md:pt-0 md:mr-30 lg:ml-2 lg:mr-12 xl:ml-12">
			<h1 class="subtitle">Company</h1>
			<a href="/about-us" class="footer-link">About Us</a>
			<a href="/hit-us-up" class="footer-link">Contact Us</a>
		</div>

		<!-- services -->
		<div class="pt-2 md:mr-15 md:pt-0 lg:mr-8">
			<h1 class="subtitle">Resources</h1>
			<a href="/our-work" class="footer-link">Our Work</a>
			<a href="/blog" class="footer-link">Blog</a>
		</div>

		<div class="flex flex-col items-start pt-2 md:hidden">
			<a href="/cookies" class="mt-6 footer-link">Cookie & Privacy Policy</a>
			<p
				class="mt-4 ml-2 font-sans text-md text-fire-1"
				class:text-fire-2={$darkMode}
			>
				© 2021 DevFire Labs All rights reserved.
			</p>
		</div>
	</div>

	<div
		class="hidden-box-wrapper bg-onix dark:bg-black dark:border-t-2"
		class:bg-onix={!$darkMode}
		class:bg-black={$darkMode}
	>
		<div class="hidden-box">
			<!-- Don't show on mobile -->
			<img
				src={$darkMode ? '/assets/logo-dark.svg' : '/assets/logo.svg'}
				alt="The DevFire Labs logo"
				class=""
			/>
			<div class="flex">
				<a href="/cookies" class="mr-6 cookies lg:mr-8 xl:mr-14">
					Cookie & Privacy Policy
				</a>
				<p class="rights">© 2021 DevFire Labs All rights reserved.</p>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.logo {
		@apply lg:ml-4 xl:ml-20;
	}

	.footer {
		@apply max-w-screen-2xl py-6 text-white lg:mx-auto w-full md:flex md:justify-between md:px-6 px-6 xl:px-20;
	}
	.cookies {
		@apply font-sans text-sm font-light text-white;
	}

	.hidden-box {
		@apply hidden md:flex justify-between items-center max-w-screen-2xl mx-auto py-3 px-6 xl:px-20;
	}

	.rights {
		@apply font-sans text-sm font-light text-white;
	}

	.subtitle {
		@apply md:text-xl lg:text-2xl font-display mt-4 whitespace-nowrap;
	}

	.follow-us {
		@apply md:text-center md:text-xl lg:text-2xl font-display mt-4 ml-2 text-lg whitespace-nowrap;
	}

	.footer-link {
		@apply mt-2 font-sans font-light md:text-lg ml-4 block;
	}
</style>
