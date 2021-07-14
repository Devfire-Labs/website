<script>
  import { Link } from "yrv";
  import SocialIconsLight from "./SocialIconsLight.svelte";
</script>

<div class="footer md:flex md:justify-between md:align-top">
  <!-- newsletter section -->
  <div class="hidden md:mt-4 md:block">
    <h1 class="inline-block pb-5 text-2xl md:pb-3 font-display md:px-0">
      Newsletter
    </h1>
    <label><input class="block" type="email" placeholder="Enter email" /></label
    >

    <button
      class="text-lg text-black font-display bg-fire-1 md:w-4/5 md:py-2 md:mt-3"
      >Get Started</button
    >
  </div>

  <img
    src="/assets/FireLogoAlone.svg"
    alt="The DevFire Labs logo"
    class="block md:hidden"
  />

  <div class="mt-9 md:flex-col md:items-center md:hidden">
    <h1 class="pb-5 text-2xl font-display ">Follow Us:</h1>
    <SocialIconsLight />
  </div>

  <div class="flex flex-col items-start pt-2 md:pt-0 md:mr-30">
    <h1 class="subtitle">Company</h1>
    <Link href="/about" class="footer-link">About Us</Link>
    <Link href="" class="footer-link">Contact & Support</Link>
  </div>

  <div class="flex flex-col items-start pt-2 md:mr-15 md:pt-0">
    <h1 class="subtitle">Services</h1>
    <Link href="" class="footer-link">Services</Link>
    <Link href="" class="footer-link">Portfolio</Link>
  </div>

  <div class="hidden mt-9 md:mt-4 md:pr-10 md:flex-col md:flex md:items-center">
    <h1 class="pb-5 text-2xl font-display ">Follow us:</h1>
    <SocialIconsLight />
  </div>

  <div class="flex flex-col items-start pt-2 md:hidden">
    <Link href="" class="mt-6 footer-link">Cookie & Privacy Policy</Link>
    <p class="mt-4 font-sans text-md text-fire-1">
      © 2021 DevFire Labs All rights reserved.
    </p>
  </div>
</div>

<div class="justify-between hidden md:flex md:bg-onix">
  <img
    src="/assets/logolightwhite.svg"
    alt="The DevFire Labs logo"
    class="md:m-3 md:px-3"
  />
  <a href="" class="font-sans text-lg font-light text-white">
    Cookie & Privacy Policy
  </a>
  <h1 class="font-sans font-light text-white text-md">
    © 2021 DevFire Labs All rights reserved.
  </h1>
</div>

<style>
  .footer {
    @apply bg-deepgray pt-6 pl-6 pb-4 text-white;
  }
  .subtitle {
    @apply text-2xl font-display mt-4;
  }
  :global(.footer-link) {
    @apply mt-2 font-sans font-light md:text-lg;
  }
</style>
