<script>
	import { Link } from 'yrv';
</script>

<div class="footer">
	<img
		src="/assets/FireLogoAlone.svg"
		alt="The DevFire Labs logo"
		class="block"
	/>

	<div class="flex items-start mt-9">
		<button class="mr-10"
			><img
				src="/assets/iglogowhite.svg"
				alt="DevFire Labs Instagram"
				class=""
			/></button
		>
		<button class="mr-10"
			><img
				src="/assets/twitterlogoWhite.svg"
				alt="DevFire Labs Twitter"
				class=""
			/></button
		>
		<button class=""
			><img
				src="/assets/youtubelogowhite.svg"
				alt="DevFire Labs Youtube channel"
				class=""
			/></button
		>
	</div>

	<div class="flex flex-col items-start pt-2">
		<h1 class="subtitle">Company</h1>
		<Link href="" class="link">About Us</Link>
		<Link href="" class="link">Contact & Support</Link>
		<h1 class="subtitle">Services</h1>

		<Link href="" class="link">Services</Link>
		<Link href="" class="link">Our Work</Link>

		<Link href="" class="link mt-6">Cookie & Privacy Policy</Link>
		<p class="font-sans text-md text-fire-1 mt-4">
			© 2021 DevFire Labs All rights reserved.
		</p>
	</div>
</div>

<style>
	.footer {
		@apply bg-deepGrey pt-6 pl-6 pb-4;
	}
	.subtitle {
		@apply text-2xl text-white font-display mt-4;
	}
</style>
