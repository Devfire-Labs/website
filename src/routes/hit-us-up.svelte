<script>
	import { darkMode } from '$lib/stores/darkMode';
	export const prerender = true;
	let form = {
		name: '',
		email: '',
		tellUs: '',
		acceptTerms: false,
	};
</script>

<svelte:head><title>devfirelabs - Hit Us Up</title></svelte:head>

<div class="hit-us-up ">
	<!-- hit us up text and email -->
	<header class="header">
		<h1 class="hit-us-text ">Hit Us Up</h1>
		<p class="email-us">
			Don’t want to fill out forms?<br /> You can email us at:
			<br /><strong>info@devfirelabs.com</strong>
		</p>
	</header>

	<!-- form block -->
	<form
		class="form-block"
		class:bg-fire-1={!$darkMode}
		class:bg-fire-2={$darkMode}
		netlify
		on:submit={(e) => {
			e.preventDefault();
			console.log(form);
		}}
	>
		<input type="form-name" class="hidden" />
		<label for="" class="label"
			>Name<input
				type="text"
				bind:value={form.name}
				class="text-input"
				required
			/></label
		>
		<label for="" class="label"
			>Email<input
				type="email"
				bind:value={form.email}
				class="text-input"
				required
			/></label
		>
		<label for="" class="label"
			>Tell us about your project<textarea
				bind:value={form.tellUs}
				class="text-input textarea-input"
				required
			/></label
		>
		<label for="accept-terms" class="checkbox-label"
			><input
				type="checkbox"
				name="accept-terms"
				bind:checked={form.acceptTerms}
				class="w-5 h-5 text-black checkbox-input form-checkbox "
				required
			/> I hereby accept DevFire Labs General Terms and Privacy Policy.</label
		>

		<button type="submit" class="submit-btn">Send message</button>
	</form>
</div>

<style lang="postcss">
	.hit-us-up {
		@apply lg:flex md:flex xl:flex;
	}

	.hit-us-text {
		@apply text-2xl font-display lg:text-6xl md:text-5xl xl:text-6xl;
	}

	.email-us {
		@apply mt-4 font-sans md:text-lg xl:text-2xl 2xl:text-3xl;
	}

	.header {
		@apply mx-5 mt-4 lg:mt-16 lg:mx-24 md:mt-12 md:mx-8 md:mr-12 xl:mx-36 xl:mt-24;
	}

	.form-block {
		@apply px-5 py-4 xl:w-2/5 mt-7 md:w-1/2 lg:mx-0 lg:px-6 lg:mt-8 lg:mb-16 md:mt-4 md:px-5 md:mr-10 md:mb-20 xl:mb-24 xl:mx-0 xl:mt-12;
	}

	.label {
		@apply font-sans font-semibold mt-5 block lg:text-xl md:text-lg xl:text-2xl;
	}
	.text-input {
		@apply block h-10 w-full mt-1.5 p-1.5;
	}
	.textarea-input {
		@apply h-28;
	}
	.checkbox-label {
		@apply font-sans font-semibold text-sm mt-4 flex items-center xl:text-lg;
	}
	.checkbox-input {
		@apply mr-2 xl:text-xl;
	}

	.submit-btn {
		@apply bg-white px-4 py-1.5 font-sans text-lg font-semibold mx-auto mt-5 block xl:text-xl text-black;
	}
</style>
