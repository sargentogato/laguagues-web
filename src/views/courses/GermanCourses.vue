<script setup lang="ts">
  import CardCoursesPack from '@/components/cards/CardCoursesPack.vue';
import MethodComponent from '@/components/packagesCourses/MethodComponent.vue';
import MethodFeatureBoxes from '@/components/packagesCourses/MethodFeatureBoxes.vue';
import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
import { ref } from 'vue';

  const lineHeightTitles = '1';

  //fuente para los títulos
  const fontFamily =
    "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

const featuresData = ref([
  // Caja 1: Usa un icono por defecto para todos
  {
    title:    ['💡 ¿Qué lo hace diferente?'],
    subtitle: [
      `A diferencia de otros métodos que te obligan a memorizar sin entender o saltan de un tema a otro, el Método Mengel® se distingue por:`,
    ],
    defaultIcon: '🔹', // Icono por defecto para esta caja
    texts:       [
      { text: 'Un orden pedagógico específico, pensado para hispanohablantes' },
      { text: 'Ejercicios exclusivos diseñados para fijar lo aprendido sin frustración' },
      { text: 'Un enfoque que te permite hablar desde el día cero en un nivel superior' },
      { text: 'Y luego, la gramática te alcanza a ti, para que consolides lo que ya usas' },
    ],
  },
  // Caja 2: Usa otro icono por defecto
  {
    title:       ['✅ ¿Por qué elegirnos?'],
    subtitle:    ['Frente a métodos genéricos que te dejan solo, el nuestro es un sistema único que te acompaña, te organiza y se enfoca en que entiendas de verdad:'],
    defaultIcon: '✔️', // Icono por defecto para esta caja
    texts:       [
      { text: 'Método único, desarrollado especialmente para hispanohablantes' },
      { text: 'No te abruma: te organiza' },
      { text: 'No te hace repetir: te hace entender' },
      { text: 'No te deja solo: te acompaña' },
      { text: 'Y sobre todo: te devuelve la motivación para aprender' },
    ],
  },
  // Caja 3: Mezcla iconos por defecto y específicos
  {
    title:       ['🧩 Como un puzle perfecto'],
    subtitle:    ['Cada pieza en su lugar correcto. Cada regla con su momento. Cada paso con su propósito.'],
    defaultIcon: '🔹',  // Icono por defecto para esta caja
    texts:       [
      { text: 'Resultado: seguridad y autonomía durante el aprendizaje' },
      { text: 'Aquí no te lanzamos al alemán, te llevamos de la mano...' },
      { text: '"Si explicas bien las reglas, juegas bien el juego."' },
      { text: 'El alemán ordenado, tú también' },
    ],
  },
]);

  /* Package */
  const title = ['packageTitles.basic'];
  const includedTitle = ['packageTitles.included'];
  const learnTitle = ['packageTitles.learning'];
  const timeNumber = 3;
  const timeText = 'Meses';
  const price = 200;
  const contactButtonText = 'packageTitles.contact';

  /* Cards */
  const includedItems = [
    {
      messages: [`Clases en vivo por Zoom `],
    },
    {
      messages: [`2 horas de clases teóricas a la semana`],
    },
  ];

  const learnItems = [
    {
      messages: [
        `Dominar la gramática y el vocabulario esencial , incluyendo estructuras 
    básicas y avanzadas, para construir oraciones correctas y expresar ideas con
    precisión.`,
      ],
    },
    {
      messages: [
        `Desarrollar las cuatro habilidades lingüísticas : hablar (conversación 
    fluida), escuchar (comprensión auditiva), leer (análisis de textos) y escribir
    (redacción clara y coherente).`,
      ],
    },
  ];
</script>

<template>
  <MethodComponent>
    <template #title>
      <TitlesParagraph
        tag="h1"
        :texts="['Con el Método Mengel®:']"
        text-color="white"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />
      <TitlesParagraph
        tag="h1"
        :texts="['el idioma se ordena, y tú']"
        text-color="#FFCC33"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />
      <TitlesParagraph
        tag="h1"
        :texts="['también']"
        text-color="#FFCC33"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />
    </template>
    <template #subtitle>
      <TitlesParagraph
        tag="p"
        :texts="[
          'Cuando el alemán deja de ser un caos y se convierte en un camino lógico y motivador',
        ]"
        :font-family="fontFamily"
      />
    </template>
  </MethodComponent>

  <MethodFeatureBoxes :items="featuresData" />

  <div class="germanSection">
    <CardCoursesPack
      src-image="images/courses/learGerman-language-team.webp"
      :includedItems="includedItems"
      :learn-items="learnItems"
      :time-number="timeNumber"
      :time-text="timeText"
      :price="price"
    >
      <template #title>
        <TitlesParagraph
          tag="h3"
          :texts="title"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
          :custom-class="'package__title'"
        />
        <TitlesParagraph
          tag="h4"
          :texts="includedTitle"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
        />
      </template>
      <template #learnTitle>
        <TitlesParagraph
          tag="h4"
          :texts="learnTitle"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
        />
      </template>
      <template #actions>
        <button class="package__contact">{{ $t(contactButtonText) }}</button>
      </template>
    </CardCoursesPack>
  </div>
</template>

<style scoped>
  .germanSection {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 25px;
  }

  .package__contact {
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--tertiary-color);
  }
</style>
