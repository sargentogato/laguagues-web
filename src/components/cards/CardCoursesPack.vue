<script setup lang="ts">
  import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
  import type { PropType } from 'vue';

  interface LearningItems {
    messages: string[];
  }

  const props = defineProps({
    title: {
      type: Array as PropType<string[]>,
      required: true,
    },
    srcImage: {
      type: String,
      required: true,
    },
    includedItems: {
      type: Array as PropType<LearningItems[]>,
      required: true,
    },
    timeNumber: {
      type: Number,
      required: true,
    },
    timeText: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });

  const learnTitle = ['packageTitles.learning'];
  const includedTitle = ['packageTitles.included'];
  const contactButtonText = 'packageTitles.contact';

  const learnItemsOne = [
    {
      messages: [`Aprende a construir oraciones correctas.`],
    },
    {
      messages: [`Expresar ideas con precisión`],
    },
    {
      messages: [`Aprender desde estructuras básicas hasta avanzadas`],
    },
  ];

  const learnItemsTwo = [
    {
      messages: [`Hablar: Logra una conversación fluida`],
    },
    {
      messages: [`Escuchar: Mejora tu comprensión auditiva.`],
    },
    {
      messages: ['Leer: Domina el análisis de textos.'],
    },
    {
      messages: ['Escribir: Consigue una redacción clara y coherente.'],
    },
  ];
</script>

<template>
  <article class="package__box card">
    <figure class="package__image">
      <img
        :src="srcImage"
        alt="Language Team"
      />
    </figure>
    <div class="package__info">
      <div class="package__info-box">
        <TitlesParagraph
          tag="h3"
          :texts="title"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
          customProperty="package__title"
        />
        <TitlesParagraph
          tag="h4"
          :texts="includedTitle"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
        />

        <ul class="package__includes">
          <li
            class="package__item"
            v-for="(include, index) in includedItems"
            :key="index"
          >
            <div class="package__bullets">
              <div class="bullets"></div>
            </div>
            <TitlesParagraph
              tag="p"
              :texts="include.messages"
              text-color="black"
              font-weight="400"
            />
          </li>
        </ul>

        <!-- What you will learn -->
        <TitlesParagraph
          tag="h4"
          :texts="learnTitle"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
        />
        <TitlesParagraph
          tag="h5"
          :texts="[
            'Con el Método Mengel®, te enfocarás en dos pilares clave para lograr la fluidez:',
          ]"
          text-color="black"
          font-weight="400"
        />

        <div class="package__learning-points">
          <!-- <div class="package__bullets">
            <div class="bullets"></div>
          </div> -->
          <TitlesParagraph
            tag="p"
            :texts="['Dominar la gramática y el vocabulario']"
            text-color="black"
            font-weight="bold"
          />
        </div>

        <ul class="package__learn">
          <li
            class="package__item"
            v-for="(learnItem, index) in learnItemsOne"
            :key="index"
          >
            <div class="package__bullets">
              <div class="bullets"></div>
            </div>
            <TitlesParagraph
              tag="p"
              :texts="learnItem.messages"
              text-color="black"
              font-weight="400"
            />
          </li>
        </ul>
        <!-- What you will learn second section -->

        <div class="package__learning-points">
          <!-- <div class="package__bullets">
            <div class="bullets"></div>
          </div> -->
          <TitlesParagraph
            tag="p"
            :texts="['Desarrollar las 4 habilidades lingüísticas']"
            text-color="black"
            font-weight="bold"
          />
        </div>

        <ul class="package__learn">
          <li
            class="package__item"
            v-for="(learnItem, index) in learnItemsTwo"
            :key="index"
          >
            <div class="package__bullets">
              <div class="bullets"></div>
            </div>
            <TitlesParagraph
              tag="p"
              :texts="learnItem.messages"
              text-color="black"
              font-weight="400"
            />
          </li>
        </ul>

        <div class="package__timePricing">
          <div class="package__pricing">{{ price }}</div>
          <div class="package__timeBox">
            <div class="package__timeText">{{ timeText }}:</div>
            <div class="package__timeNumber">{{ timeNumber }}</div>
          </div>
        </div>

        <div class="package__actions">
          <button class="package__contact">{{ $t(contactButtonText) }}</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
  .package__box {
    width: 80%;
  }
  .package__info {
    display: flex;
    justify-content: space-between;
  }

  .package__info-box {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 20px;
  }

  :deep(.package__title) {
    font-size: var(--title-package-card);
  }

  .package__contact {
    border: 1px solid var(--tertiary-color);
    border-radius: 5px;
    padding: var(--padding-buttons);
    width: 100%;
  }

  .package__includes,
  .package__learn {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .package__includes {
    min-height: 222px;
  }

  .package__learn {
    margin-left: 25px;
  }

  .package__item,
  .package__learning-points {
    display: flex;
    gap: 15px;
  }

  .package__bullets {
    align-items: center;
    display: flex;
  }

  .package__bullets > .bullets {
    background-color: black;
    border: solid black;
    border-radius: 50%;
    height: 5px;
    width: 5px;
  }

  .package__price-box,
  .package__price-period {
    display: flex;
  }

  .package__timePricing,
  .package__timeBox {
    display: flex;
    gap: 5px;
  }

  .package__timePricing {
    justify-content: space-between;
  }

  .package__actions {
    display: flex;
    padding-top: 15px;
  }

  .package__contact {
    border-radius: var(--border-radius-buttons);
    padding: var(--padding-buttons);
  }

  @media (min-width: 768px) {
    .package__box {
      width: 440px;
    }
  }
</style>
