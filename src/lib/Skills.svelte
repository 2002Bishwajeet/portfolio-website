<script lang="ts">
  import Skill from "./components/Skill.svelte";
  export let technology = [];
  export let tools = []
</script>

<div class= "mt-16">
  <p class="items-start text-start content-start font-bold text-4xl">Skills</p>
   <div class = " flex flex-row flex-wrap justify-start">

{#each technology as tech}
  <Skill
  icon = {tech.icon}
  title = {tech.title}
  />
{/each}

</div>
 <div class="my-9">
    <div class="w-full border-t border-gray-300"></div> </div>
  <div class = " flex flex-row flex-wrap justify-start -mt-12">
{#each tools as tool}
  <Skill
  icon = {tool.icon}
  title = {tool.title}
  />
{/each}


</div>
</div>
