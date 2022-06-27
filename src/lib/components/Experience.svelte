  <script lang="ts">
    export let experience ;
  </script>
  
  
  <div class = "w-11/12 items-start text-start">
    <p class = "text-2xl font-medium mb-4">{experience.title} - {experience.company} ({experience.date_joining} - {experience.date_left}) </p>
    <p class ="font-light text-lg text-left">{experience.description}</p>
   </div>