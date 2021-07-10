<script>
	let form = {
		name: '',
		email: '',
		tellUs: '',
		acceptTerms: false,
	};
</script>

<div class="hit-us-up">
	<header class="mt-4 mx-5">
		<h1 class="font-display text-2xl">Hit Us Up</h1>
		<p class="font-sans mt-4">
			Don’t want to fill out forms? You can email us at:
			<br /><strong>info@devfirelabs.com</strong>
		</p>
	</header>
	<form
		class="bg-fire-1 mt-7 py-4 px-5"
		on:submit={(e) => {
			e.preventDefault();
			console.log(form);
		}}
	>
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
				class="checkbox-input form-checkbox h-5 w-5 text-black"
				required
			/> I hereby accept DevFire Labs General Terms and Privacy Policy.</label
		>

		<button type="submit" class="submit-btn">Send message</button>
	</form>
</div>

<style>
	.label {
		@apply font-sans font-semibold mt-5 block;
	}
	.text-input {
		@apply block h-10 w-full mt-1.5 p-1.5;
	}
	.textarea-input {
		@apply h-28;
	}
	.checkbox-label {
		@apply font-sans font-semibold text-sm mt-4 flex items-center;
	}
	.checkbox-input {
		@apply mr-2;
	}

	.submit-btn {
		@apply bg-white px-4 py-1.5 font-sans text-lg font-semibold mx-auto mt-5 block;
	}
</style>
