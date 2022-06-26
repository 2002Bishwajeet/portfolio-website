  <script lang="ts">
    export let experience ;
  </script>
  
  
  <div class = "items-start text-start">
    <p class = "text-xl font-medium mb-4">{experience.title} - {experience.company} ({experience.date_joining} - {experience.date_left}) </p>
    <p>{experience.description}</p>
   </div>