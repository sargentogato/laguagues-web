<script setup lang="ts">
  import CardCoursesPack from '@/components/cards/CardCoursesPack.vue';
  import MethodComponent from '@/components/packagesCourses/MethodComponent.vue';
  import MethodFeatureBoxes from '@/components/packagesCourses/MethodFeatureBoxes.vue';
  import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';

  const lineHeightTitles = '1';

  //fuente para los títulos
  const fontFamily =
    "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

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
    <template #messageOne>Aquí va el primer mensaje</template>
    <template #featureBoxes>
      <MethodFeatureBoxes>
        <template #featureLeft>
          <TitlesParagraph
            tag="h3"
            :texts="['💡 ¿Qué lo hace diferente?']"
            text-color="black"
            font-weight="bold"
            :font-family="fontFamily"
            text-align="center"
          />
          <TitlesParagraph
            tag="p"
            :texts="[
              `A diferencia de otros métodos que te obligan a memorizar sin entender o saltan de un
            tema a otro, el Método Mengel® se distingue por:`,
            ]"
            text-color="black"
            font-weight="400"
            :font-family="fontFamily"
          />
          <ul>
            <li>Un orden pedagógico específico, pensado para hispanohablantes</li>
            <li>Ejercicios exclusivos diseñados para fijar lo aprendido sin frustración</li>
          </ul>
        </template>

        <template #featureCenter>
          <h3>✅ ¿Por qué elegirnos?</h3>
          <ul>
            <li>✔️ Método único, desarrollado especialmente para hispanohablantes</li>
            <li>✔️ No te abruma: te organiza</li>
          </ul>
        </template>

        <template #featureRight>
          <p>Como un puzle perfecto</p>
          <p>
            Cada pieza en su lugar correcto. Cada regla con su momento. Cada paso con su propósito.
          </p>
          <p>El alemán ordenado, tú también</p>
        </template>
      </MethodFeatureBoxes>
    </template>
  </MethodComponent>
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
