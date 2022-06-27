<script lang="ts">
  import Service from "./components/Service.svelte";

  export let services = [];
</script>

<div id="services" class="mt-24">
  <p
    class="items-start text-start content-start font-bold text-4xl md:text-5xl"
  >
    What I do?
  </p>
  <div class=" flex flex-row flex-wrap justify-between">
    {#each services as service}
      <Service
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    {/each}
  </div>
</div>
