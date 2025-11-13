<script setup lang="ts">
  import CardCoursesPack from '@/components/cards/CardCoursesPack.vue';
import MethodComponent from '@/components/packagesCourses/MethodComponent.vue';
import MethodFeatureBoxes from '@/components/packagesCourses/MethodFeatureBoxes.vue';
import { ref } from 'vue';

  const mainTitle = ['Con el Método Mengel®:'];
  const highlightedTitles = ['el idioma se ordena, y tú', 'también'];
  const subtitle = [
    'Cuando el alemán deja de ser un caos y se convierte en un camino lógico y motivador',
  ];

  const featuresData = ref([
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
      title:    ['✅ ¿Por qué elegirnos?'],
      subtitle: [
        'Frente a métodos genéricos que te dejan solo, el nuestro es un sistema único que te acompaña, te organiza y se enfoca en que entiendas de verdad:',
      ],
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
      title:    ['🧩 Como un puzle perfecto'],
      subtitle: [
        'Cada pieza en su lugar correcto. Cada regla con su momento. Cada paso con su propósito.',
      ],
      defaultIcon: '🔹', // Icono por defecto para esta caja
      texts:       [
        { text: 'Resultado: seguridad y autonomía durante el aprendizaje' },
        { text: 'Aquí no te lanzamos al alemán, te llevamos de la mano...' },
        { text: '"Si explicas bien las reglas, juegas bien el juego."' },
        { text: 'El alemán ordenado, tú también' },
      ],
    },
  ]);

  /* Package Card Basic*/
  const basic = ['packageTitles.basic'];
  const timeNumber = 3;
  const timeText = 'Meses';
  const priceBasic = 200;
  const basicIncluded = [
    { messages: [`basicPackageIncluded.liveClasses`] },
    { messages: [`basicPackageIncluded.timeClases`] },
  ];

  /* Package Card Premium*/
  const premium = ['packageTitles.premium'];
  const pricePremium = 600;
  const premiumIncluded = [
    { messages: [`premiumPackageIncluded.liveClasses`] },
    { messages: [`premiumPackageIncluded.teoricClasses`] },
    {
      messages: ['premiumPackageIncluded.practicalClasses'],
    },
    {
      messages: ['premiumPackageIncluded.group'],
    },
    {
      messages: ['premiumPackageIncluded.recordedClasses'],
    },
  ];

  /* Package Card Platinum*/
  const platinum = ['packageTitles.platinum'];
  const pricePlatinum = 900;
    const platinumIncluded = [
    { messages: [`platinumPackageIncluded.liveClasses`] },
    { messages: [`platinumPackageIncluded.teoricClasses`] },
    {
      messages: ['platinumPackageIncluded.practicalClasses'],
    },
    {
      messages: ['platinumPackageIncluded.groupTutoring'],
    },
    {
      messages: ['platinumPackageIncluded.group'],
    },
    {
      messages: ['platinumPackageIncluded.subtitledVideos'],
    },
    {
      messages: ['platinumPackageIncluded.recordedClasses'],
    },
  ];
  
</script>

<template>
  <MethodComponent
    :main-title="mainTitle"
    :highlighted-titles="highlightedTitles"
    :subtitle="subtitle"
  />
  <MethodFeatureBoxes :items="featuresData" />

  <div class="germanSection">
    <CardCoursesPack
      :title="basic"
      src-image="images/courses/learGerman-language-team.webp"
      :includedItems="basicIncluded"
      :time-number="timeNumber"
      :time-text="timeText"
      :price="priceBasic"
    />
    <CardCoursesPack
      :title="premium"
      src-image="images/courses/learGerman-language-team.webp"
      :includedItems="premiumIncluded"
      :time-number="timeNumber"
      :time-text="timeText"
      :price="pricePremium"
    />
    <CardCoursesPack
      :title="platinum"
      src-image="images/courses/learGerman-language-team.webp"
      :includedItems="platinumIncluded"
      :time-number="timeNumber"
      :time-text="timeText"
      :price="pricePlatinum"
    />
  </div>
</template>

<style scoped>
  .germanSection {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
    padding: 50px 25px;
  }

  .package__contact {
    border: 1px solid var(--tertiary-color);
    border-radius: 5px;
    width: 100%;
  }
</style>
