<script setup lang="ts">
import CardCoursesPack from '@/components/cards/CardCoursesPack.vue';
import MetodComponent from '@/components/packagesCourses/MetodComponent.vue';
import { ref } from 'vue';

/* Header */
//Sustituir por las claves de i18n
const topTitlePartOne = ref(["Con el Método Mengel®:"])
const topTitlePartTwo = ref(["el idioma se ordena, y tú"])
const topTitlePartThree = ref(["también"])
const topSubtitle = ref(["Cuando el alemán deja de ser un caos y se convierte en un camino lógico y motivador"])
const topSubtitleTwo = ref(["motivador"])
const messageOne = ref(["El alemán es un idioma que muchos consideran difícil, denso, lleno de reglas y excepciones. Pero en realidad, es como un puzle: si colocas las piezas en el orden correcto, el resultado es claro, funcional y hasta bello."])
const messageTwo = ref(["segundo mensaje"])
const whyIsDifferent = ref(["porque lo dice Laura"])
const whyChooseAs = ref(["porque somos los mejores"])

/* What makes it different? Why choose us? What do you get? */


//fuente para los títulos
const fontFamily = "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"

/* Package */
const title = ref(["packageTitles.basic"]);
const includedTitle = ref(["packageTitles.included"])
const learnTitle = ref(["packageTitles.learning"])
const altImage = ref("Language Team")
const timeNumber = ref(3)
const timeText = ref("meses")
const price = ref(200);

const  includedItems = ref([
  {
    messages: [`Clases en vivo por Zoom `]
  },
  {
    messages: [`2 horas de clases teóricas a la semana`]
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
  <MetodComponent 
    :topTitlePartOne="topTitlePartOne"
    :topTitlePartTwo="topTitlePartTwo"
    :top-title-part-three="topTitlePartThree"
    :topSubtitle="topSubtitle"
    :topSubtitleTwo="topSubtitleTwo"
    :message-one="messageOne"
    :message-two="messageTwo"
    :why-is-different="whyIsDifferent"
    :why-choose-as="whyChooseAs"
    :fontFamily="fontFamily"
  />
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