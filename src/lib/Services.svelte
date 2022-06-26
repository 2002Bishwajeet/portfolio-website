<script lang="ts">
  import Service from "./components/Service.svelte";
  export let services = [];
</script>

<div class="mt-16">
  <p class="items-start text-start content-start font-bold text-4xl"> What I do?</p>
  <div class = " flex flex-row flex-wrap justify-between">

 {#each services as service}
    <Service
      icon={service.icon}
      title={service.title}
      description={service.description}
    />
  {/each}
 


</div>
</div>
