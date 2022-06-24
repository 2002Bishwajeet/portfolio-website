<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Home from "./lib/Home.svelte";
  import Services from "./lib/Services.svelte";
  import Skills from "./lib/Skills.svelte"; 
  import Experiences from "./lib/Experiences.svelte";
import Contact from "./lib/Contact.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class = "md:mx-8">
<Header />
  <Home />
  <Services />
  <Skills />
  <Experiences/>
  <Contact/>

  <div class = "my-24">
    <p>Copyright ©️ 2022, All rights reserved</p>
    <p> Made with ❤️ by Biswa . Designed by Mehmet Eren Olgun </p>
  </div>
  
</main>

<style>
  :root {
    background-color: #F8F8F8;
  }
  
  main {
    text-align: center;
    padding: 1em;
    font-family: "Rubik", sans-serif;
  }
</style>
