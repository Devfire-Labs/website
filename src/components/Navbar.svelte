<script>
  import { Link } from "yrv";
  import { menu } from "../stores/menu";
  import Logo from "./Logo.svelte";
</script>

<nav class="flex items-center justify-between px-5 pb-2 bg-light pt-7">
  <Logo />
  <button on:click={menu.toggle}
    ><img src="/assets/menu-icon.svg" alt="A menu icon" class="" /></button
  >
</nav>
