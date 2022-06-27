<script lang="ts">
  import logoLight from "../assets/logo-light.png";
  let isMobile : boolean = false;
  // Mobile menu click event handler
  const handleMobileIconClick = () => (isMobile = !isMobile);
</script>

<nav class="flex justify-between items-center">
  <div class="w-1/2">
      <img class="h-14 w-auto" src={logoLight} alt="Biswa logo" />
  </div>
  <div class="justify-between flex items-center lg:hidden">
    <button
      type="button"
      on:click= {handleMobileIconClick}
      class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-milkish-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
    {#if !isMobile}
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
    {/if}
    

      <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
      {#if isMobile === true}
         <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        color="shady-black"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {/if}
     
    </button>
  </div>
   <!-- Mobile menu, show/hide based on menu state. -->
 
  <div class="hidden lg:block">
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
      <li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
  
</nav>
{#if isMobile}
  <div id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-milkish-white", Default: "text-shady-black hover:bg-gray-400 hover:text-milkish-white" -->
      <a href="#" class=" text-shady-black hover:bg-gray-400 hover:text-milkish-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

      <a href="#" class="text-shady-black hover:bg-gray-400 hover:text-milkish-white block px-3 py-2 rounded-md text-base font-medium">Service</a>

      <a href="#" class="text-shady-black hover:bg-gray-400 hover:text-milkish-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
         
      <a href="#" class="text-shady-black hover:bg-gray-400 hover:text-milkish-white block px-3 py-2 rounded-md text-base font-medium">Experience</a>

      <a href="#" class="text-shady-black hover:bg-gray-400 hover:text-milkish-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
    </div>
  </div>

{/if}
 
