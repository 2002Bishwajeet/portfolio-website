<script lang="ts">
  import Experience from "./components/Experience.svelte";
  export let experiences = [];
</script>

<div id="experience" class="mt-16">
  <p
    class="items-start text-start content-start font-bold text-4xl md:text-5xl mb-12"
  >
    Experience
  </p>

  {#each experiences as experience, i}
    <Experience {experience} />
    {#if i != experiences.length - 1}
      <div class="my-8">
        <div class="w-11/12 border-t border-gray-300" />
      </div>
    {/if}
  {/each}
</div>
