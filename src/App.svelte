<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Home from "./lib/Home.svelte";
  import Services from "./lib/Services.svelte";
  import Skills from "./lib/Skills.svelte";
  import Experiences from "./lib/Experiences.svelte";
  import Contact from "./lib/Contact.svelte";
  import biswa from "../biswa.json";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="mx-2 md:mx-8">
  <Header />
  <Home
    name={biswa.name}
    tagline={biswa.tagline}
    email={biswa.email}
    linkedin={biswa.linkedin}
    github={biswa.github}
    twitter={biswa.twitter}
    instagram={biswa.instagram}
    medium={biswa.medium}
  />
  <Services services={biswa.services} />
  <Skills technology={biswa.skills.technology} tools={biswa.skills.tools} />
  <Experiences experiences={biswa.experience} />
  <Contact
    linkedin={biswa.linkedin}
    github={biswa.github}
    twitter={biswa.twitter}
    instagram={biswa.instagram}
    medium={biswa.medium}
    email={biswa.email}
  />

  <div class="mt-24 mb-1">
    <p>Copyright ©️ 2022, All rights reserved</p>
    <p>
      Made with ❤️ by {biswa.nickname} . Designed by
      <a
      class="underline"
        href="https://www.behance.net/gallery/102515935/Personal-Website?tracking_source=search_projects%7Cpersonal%20website"
        target="_blank"
      >
        Mehmet Eren Olgun
      </a>
    </p>
  </div>
</main>

<style>
  :root {
    background-color: #f8f8f8;
  }

  main {
    text-align: center;
    padding: 1em;
    font-family: "Rubik", sans-serif;
  }
</style>
