<script>
	import { Link } from 'yrv';
	import SocialIconsLight from './SocialIconsLight.svelte';
</script>

<div class="bg-deepgray mt-auto">
	<div class="footer">
		<!-- newsletter section -->
		<div class="hidden md:block lg:mt-0 lg:mb-4">
			<h1
				class="subtitle inline-block pb-5 md:text-xl lg:text-2xl md:pb-3 font-display md:px-0 ml-0 xl:ml-0 2xl:ml-0"
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
				<button class="block w-full text-black font-display bg-fire-1 md:py-1.5 xl:px-4 xl:py-2"
					>Get Started</button
				>
			</div>
		</div>

		<!-- Logo SM -->
		<img
			src="/assets/FireLogoAlone.svg"
			alt="The DevFire Labs logo"
			class="block md:hidden ml-2"
		/>

		<!-- social Icons -->
		<div
			class="mt-7 md:mt-0 md:ml-0 md:flex-col md:items-center order-first md:order-3"
		>
			<h1 class="subtitle mb-3.5">Follow Us:</h1>
			<div class="ml-3">
				<SocialIconsLight classes={'mr-5 md:mr-8'} />
			</div>
		</div>

		<!-- company -->
		<div class="pt-2 md:pt-0 md:mr-30 lg:mr-12">
			<h1 class="subtitle">Company</h1>
			<Link href="/about" class="footer-link">About Us</Link>
			<Link href="" class="footer-link">Contact & Support</Link>
		</div>

		<!-- services -->
		<div class="pt-2 md:mr-15 md:pt-0 lg:mr-8">
			<h1 class="subtitle">Services</h1>
			<Link href="" class="footer-link">Services</Link>
			<Link href="" class="footer-link">Portfolio</Link>
		</div>

		<div class="flex flex-col items-start pt-2 md:hidden">
			<Link href="" class="mt-6 footer-link">Cookie & Privacy Policy</Link>
			<p class="mt-4 ml-2 font-sans text-md text-fire-1">
				© 2021 DevFire Labs All rights reserved.
			</p>
		</div>
	</div>

	<div class="hidden-box-wrapper bg-onix">
		<div class="hidden-box">
			<!-- Don't show on mobile -->
			<img
				src="/assets/logolightwhite.svg"
				alt="The DevFire Labs logo"
				class=""
			/>
			<a href="" class="cookies"> Cookie & Privacy Policy </a>
			<h1 class="rights">© 2021 DevFire Labs All rights reserved.</h1>
		</div>
	</div>
</div>

<style>
	.footer {
		@apply bg-deepgray max-w-screen-2xl py-6 text-white lg:mx-auto w-full md:flex md:justify-between md:px-6 xl:px-20;
	}
	.cookies {
		@apply font-sans text-sm lg:text-lg font-light text-white;
	}
	.hidden-box {
		@apply hidden md:flex justify-between items-center max-w-screen-2xl mx-auto py-3 px-6 xl:px-20;
	}

	.socials {
		@apply hidden mt-9 md:mt-4 md:pr-10 md:flex-col lg:ml-0 lg:mr-6 md:flex md:items-center;
	}

	.rights {
		@apply font-sans text-sm lg:text-lg font-light text-white;
	}

	.subtitle {
		@apply md:text-xl lg:text-2xl 2xl:text-3xl font-display mt-4 whitespace-nowrap;
	}
	:global(.footer-link) {
		@apply mt-2 2xl:mt-4 font-sans font-light md:text-lg ml-3 block 2xl:text-xl;
	}
</style>
