<script lang="ts">
  import Header from "./lib/Header.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <Header />
</main>

<style>
  :root {
    background-color: #F8F8F8;
  }
  
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    font-family: "Rubik", sans-serif;
  }
</style>
