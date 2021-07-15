<script>
  import { Router, Route, Link, router } from "yrv/debug";
  import Project from "./pages/Project.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import Footer from "./components/Footer.svelte";
  import Menu from "./components/Menu.svelte";
  import HitUsUp from "./pages/HitUsUp.svelte";
  import Blog from "./pages/Blog.svelte";
  import BlogPost from "./pages/BlogPost.svelte";
  import AboutUs from "./pages/AboutUs.svelte";
  import OurWork from "./pages/OurWork.svelte";
</script>

<Router path="/">
  <main class="container">
    <Menu />
    <Navbar />
    <Route exact><Home /></Route>
    <Route exact path="/blog"><Blog /></Route>
    <Route path="/blog/:postId" let:router>
      <BlogPost postId={router.params.postId} />
    </Route>
    <Route exact path="/ourwork"><OurWork /></Route>
    <Route path="/ourwork/:postId" let:router>
      <Project postId={router.params.postId} />
    </Route>

    <Route path="/hit-us-up"><HitUsUp /></Route>
    <Route exact path="/about"><AboutUs /></Route>
    <Route fallback>Not found</Route>
    <Footer />
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
    @apply max-w-max;
  }
  .title {
    @apply text-4xl font-display mt-16;
  }
  .post-subtitle {
    @apply font-sans font-semibold text-xl mt-3.5;
  }
  .post-text {
    @apply font-sans mt-2;
  }
</style>
