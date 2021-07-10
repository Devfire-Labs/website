<script>
  import { Link } from "yrv";
  import SocialIcons from "./SocialIcons.svelte";
</script>

<div class="footer">
  <img
    src="/assets/FireLogoAlone.svg"
    alt="The DevFire Labs logo"
    class="block"
  />

  <div class="mt-9">
    <SocialIcons />
  </div>

  <div class="flex flex-col items-start pt-2">
    <h1 class="subtitle">Company</h1>
    <Link href="/about" class="footer-link">About Us</Link>
    <Link href="" class="footer-link">Contact & Support</Link>
    <h1 class="subtitle">Services</h1>

    <Link href="" class="footer-link">Services</Link>
    <Link href="" class="footer-link">Our Work</Link>

    <Link href="" class="mt-6 footer-link">Cookie & Privacy Policy</Link>
    <p class="mt-4 font-sans text-md text-fire-1">
      © 2021 DevFire Labs All rights reserved.
    </p>
  </div>
</div>

<style>
  .footer {
    @apply bg-deepGrey pt-6 pl-6 pb-4 text-black;
  }
  .subtitle {
    @apply text-2xl font-display mt-4;
  }
  :global(.footer-link) {
    @apply mt-2 font-sans font-light;
  }
</style>
