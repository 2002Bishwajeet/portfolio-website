<script lang="ts">
  import Skill from "./components/Skill.svelte";
  export let technology = [];
  export let tools = []
</script>

<div id="skills" class= "my-64">
  <p class="items-start text-start content-start font-bold text-4xl md:text-5xl">Skills</p>
   <div class = " grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-start">

{#each technology as tech}
  <Skill
  icon = {tech.icon}
  title = {tech.title}
  />
{/each}

</div>
 <div class="my-9">
    <div class="w-11/12 border-t border-gray-300  "></div> </div>
  <div class = " grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start -mt-12">

{#each tools as tool}
  <Skill
  icon = {tool.icon}
  title = {tool.title}
  />
{/each}


</div>
</div>
