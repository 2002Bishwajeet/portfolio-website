<script lang="ts">
  export let icon = "mobile";
  export let title = "Your Skill";
  import Icon from "@iconify/svelte";
</script>

<div class="min-w-min flex items-center mt-12  md:basis-1/4">
  <Icon icon={icon} width="2.25rem"  />
  <p class="text-start text-2xl pl-4">{title}</p>
</div>
