<script>
  import { Link } from "yrv";
  import SocialIconsLight from "./SocialIconsLight.svelte";
</script>

<div class="footer md:flex md:justify-between md:align-top">
  <!-- newsletter section -->
  <div class="hidden md:block lg:px-6 lg:mt-0 lg:mb-4">
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

  <!-- Logo SM -->
  <img
    src="/assets/FireLogoAlone.svg"
    alt="The DevFire Labs logo"
    class="block md:hidden"
  />

  <!-- social Icons -->
  <div class="mt-9 md:flex-col md:items-center md:hidden">
    <h1 class="pb-5 text-2xl font-display ">Follow Us:</h1>
    <SocialIconsLight />
  </div>

  <!-- company -->
  <div class="flex flex-col items-start pt-2 md:pt-0 md:mr-30 lg:mr-12">
    <h1 class="subtitle">Company</h1>
    <Link href="/about" class="footer-link">About Us</Link>
    <Link href="" class="footer-link">Contact & Support</Link>
  </div>

  <!-- services -->
  <div class="flex flex-col items-start pt-2 md:mr-15 md:pt-0 lg:mr-8">
    <h1 class="subtitle">Services</h1>
    <Link href="" class="footer-link">Services</Link>
    <Link href="" class="footer-link">Portfolio</Link>
  </div>

  <!-- social icons for MD,LG,Xl -->
  <div class="socials">
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

<div class="hiddenBox">
  <img
    src="/assets/logolightwhite.svg"
    alt="The DevFire Labs logo"
    class="items-start align-middle md:m-3 md:px-0 lg:px-5"
  />

  <a href="" class="cookies"> Cookie & Privacy Policy </a>
  <h1 class="rights">© 2021 DevFire Labs All rights reserved.</h1>
</div>

<style>
  .cookies {
    @apply font-sans text-sm lg:text-lg lg:ml-36 font-light text-white md:mt-7 lg:mt-5 md:ml-20;
  }

  .hiddenBox {
    @apply hidden md:justify-between md:flex md:bg-onix;
  }

  .socials {
    @apply hidden mt-9 md:mt-4 md:pr-10 md:flex-col lg:ml-0 lg:mr-6 md:flex md:items-center;
  }

  .rights {
    @apply font-sans text-sm lg:text-lg lg:mt-5 font-light text-white md:mt-7 md:pr-4 md:-ml-12;
  }

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
