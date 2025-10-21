<script setup lang="ts">
import CardCoursesPack from '@/components/cards/CardCoursesPack.vue';
import { ref } from 'vue';

const title = ["packageTitles.basic"];
const includedTitle = ["packageTitles.included"]
const learnTitle = ref(["packageTitles.learning"])
const altImage = ref("Language Team")
const timeNumber = ref(3)
const timeText = ref("meses")
const price = ref(200);

const  includedItems = ref([
  {
    messages: [`Acceso a lecciones estructuradas con enfoque en gramática, vocabulario 
    y desarrollo de las cuatro habilidades lingüísticas (habla, escucha, lectura y
    escritura), adaptadas a tu nivel y objetivos.`]
  },
  {
    messages: [`Recursos interactivos y material cultural como audios, videos, 
    ejercicios prácticos y contenido sobre tradiciones, modismos y contextos sociales 
    del idioma estudiado.`]
  },
])

const  learnItems = ref([
  {
    messages: [`Dominar la gramática y el vocabulario esencial , incluyendo estructuras 
    básicas y avanzadas, para construir oraciones correctas y expresar ideas con
    precisión.`]
  },
  {
    messages: [`Desarrollar las cuatro habilidades lingüísticas : hablar (conversación 
    fluida), escuchar (comprensión auditiva), leer (análisis de textos) y escribir
    (redacción clara y coherente).`]
  },
])

</script>

<template>
  <div class="germanSection">
    <CardCoursesPack
      :included-title="includedTitle"
      :learn-title="learnTitle"
      src-image="images/courses/learGerman-language-team.webp"
      :alt-image="altImage"
      :title="title"
      :includedItems="includedItems"
      :learn-items="learnItems"
      :time-number="timeNumber"
      :time-text="timeText"
      :price="price"
    />
  </div>
</template>


<style scoped>
.germanSection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  
}

</style>