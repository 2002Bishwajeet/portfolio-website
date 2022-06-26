<script lang="ts">
   import Icon from "@iconify/svelte";
  export let icon;
  export let title;
  export let description;
</script>

<div class=" min-w-min content-start items-start text-start w-96 mt-12">
 <Icon class = "text-6xl -ml-2 text-shady-black" icon={icon}  />
  <p class="font-medium text-xl my-2">{title}</p>
  <p class="font-light text-left">
  {description}
  </p>
</div>
