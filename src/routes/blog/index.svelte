<script>
	import { blog as posts } from '$lib/utils';
	import dayjs from 'dayjs';
	import { readingTime } from '$lib/utils';
	import { darkMode } from '$lib/stores/darkMode';
</script>

<svelte:head><title>devfirelabs - Blog</title></svelte:head>

<div id="blog-page" class="px-4 mb-4 md:px-20">
	<h1 class="title">Blog</h1>
	<p class="subtitle">
		What we’re up to; what we’re into. If you suffer from FOMO, check out below.
	</p>
	<div
		class="post-wrapper md:grid md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16"
	>
		{#each posts as { img, title, description, body, date }, i (i)}
			<a href={'/blog/' + i} class={`link ` + (i === 0 && 'first')}>
				<img
					src={img.src}
					alt={img.alt}
					class="object-cover mr-3 post-img"
					class:first-post-img={i === 0}
				/>
				<div class="">
					<p
						class="md:my-2 lg:my-4 md:text-lg lg:text-xl xl:text-2xl"
						class:first-readtime={i === 0}
					>
						{dayjs(date).format('DD MMMM, YYYY')} &middot; {readingTime(body)} min
						read.
					</p>
					<h2
						class="text-lg font-medium whitespace-normal md:text-2xl lg:text-3xl xl:text-4xl"
						class:first-title={i === 0}
					>
						{title}
					</h2>
					<p
						class="hidden md:block pr-4 md:leading-tight md:mt-1.5 md:text-lg lg:text-xl xl:text-2xl"
						class:first-description={i === 0}
					>
						{description}
					</p>
				</div>
			</a>
		{/each}
	</div>
	<div class="my-16">
		<img
			src={$darkMode
				? '/assets/online-presence-dark.svg'
				: '/assets/online-presence.svg'}
			alt=""
			class="w-4/5 mx-auto xl:w-3/5 "
		/>
		<div class="flex justify-center w-4/5 mx-auto mt-4">
			<input
				type="text"
				class="w-3/5 border-none xl:text-2xl"
				placeholder="Email"
			/>
			<button
				class="w-2/5 px-4 text-sm font-display xl:text-2xl"
				class:bg-fire-1={!$darkMode}
				class:bg-fire-2={$darkMode}>Get Started</button
			>
		</div>
	</div>
</div>

<style lang="postcss">
	.link {
		@apply mt-6 font-sans block md:mt-0;
	}
	a.first {
		@apply md:flex md:col-span-2 md:mt-12 md:justify-self-start;
	}
	img.first-post-img {
		@apply md:w-3/5;
	}
	.first-readtime {
		@apply md:mt-0;
	}

	.first-readtime {
		@apply md:mt-0;
	}
</style>
