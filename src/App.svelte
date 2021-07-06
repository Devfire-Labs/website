<script>
	import { Router, Route, Link, router } from 'yrv/debug';
	import Blog from './components/Blog.svelte';
	import Navbar from './components/Navbar.svelte';
	import Home from './pages/Home.svelte';
</script>

<Router path="/">
	<main class="container">
		<Navbar />
		<Route exact><Home /></Route>
		<Route path="/blog/:postId" let:router>
			<Blog postId={router.params.postId} />
		</Route>
		<Route fallback>Not found</Route>
	</main>
</Router>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	body {
		@apply font-mono bg-light antialiased;
	}
	::selection {
		@apply text-dark  bg-fire-1 bg-opacity-60;
	}
	main.container {
		@apply w-full;
	}
	.post-subtitle {
		@apply font-sans font-semibold text-xl mt-3.5;
	}
	.post-text {
		@apply font-sans mt-2;
	}
</style>
