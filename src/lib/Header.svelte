<script lang="ts">
  import logo from "../assets/logo.png";
</script>

<nav class="flex justify-between items-center">
  <div class="w-1/2">
    <a href="/" class="logo">
      <img
      class = "h-14 w-auto"
        src= {logo}
        alt="Keep"
      />
    </a>
  </div>
  <div class="absolute  right-4 flex items-center sm:hidden">
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
      <svg
        class="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
      <svg
        class="hidden h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <div class="hidden sm:block">
    <ul class="flex w-5/6 justify-evenly items-center ">
      <li class="mr-6">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Home</a>
      </li>
      <li class="mr-6">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Services</a>
      </li>
      <li class="mr-6">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Skills</a>
      </li>
      <li class="mr-6">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Experience</a>
      </li>
      <li class="mr-6">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
