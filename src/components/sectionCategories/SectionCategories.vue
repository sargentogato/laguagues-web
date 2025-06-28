<script setup lang="ts">
  import { ref } from 'vue';
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';
import CardCategory from './CardCategory.vue';

const title = ref(['categories.sectionTitle']);

  const dataCard = [
    {
      srcImages: 'images/categories/language-team-Germany.webp',
      altImages: 'Poner un descripción en los locales',
      titleCard: 'categories.titleGermanCard',
      textCard:  'categories.textGermanCard',
    },
    {
      srcImages: 'images/categories/language-team-Itali.webp',
      altImages: 'Poner un descripción en los locales',
      titleCard: 'categories.titleItalianCard',
      textCard:  'categories.textItalianCard',
    },
    {
      srcImages: 'images/categories/language-team-Spain.webp',
      altImages: 'Poner un descripción en los locales',
      titleCard: 'categories.titleSpanishCard',
      textCard:  'categories.textSpanishCard',
    },
    {
      srcImages: 'images/categories/language-team-England.webp',
      altImages: 'Poner un descripción en los locales',
      titleCard: 'categories.titleEnglishCard',
      textCard:  'categories.textEnglishCard',
    },
    {
      srcImages: 'images/categories/language-team-workshop.jpg',
      altImages: 'Poner un descripción en los locales',
      titleCard: 'categories.titleWorkshopCard',
      textCard:  'categories.textWorkshopCard',
    },
    {
      srcImages: 'images/categories/language-team-translations.webp',
      altImages: 'Poner un descripción en los locales',
      titleCard: 'categories.titleTraductionsCard',
      textCard:  'categories.textTraductionsCard',
    },
  ];

</script>

<template>
  <section class="category">
    <div class="category__box">
      <div class="category__title">
        <TitlesParagraph
          tag="h2"
          :texts="title"
          :text-color="'var(--black)'"
          font-weight="600"
          text-transform="uppercase"
          line-height="var(--line-height-titles)"
        />
      </div>
      <div class="category__cards">
        <template
          v-for="(card, index) in dataCard"
          :key="index"
        >
          <CardCategory
            :src-image="card.srcImages"
            :imageAlt="card.altImages"
            :title="card.titleCard"
            :text="card.textCard"
            font-weight-title="600"
            font-weight-text="400"
            :image-class="index === dataCard.length - 1 ? 'last-responsive-image' : ''"
            :card-image-correction="index === dataCard.length - 1 ? 'card__image--correction' : ''"
            :index-animation-delay="index"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .category {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 20px;
    padding-bottom: 60px;
    padding-top: 100px;
  }

  .category__box {
    flex-basis: var(--section-width);
  }
  
  .category__title {
    text-align: center;
  }

  .category__title:deep(h2) {
    font-size: var(--title-sections);
    padding-bottom: 50px;
  }

  .category__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  :deep(.card__image--correction) {
    display: flex;
    justify-content: center;
  }

  :deep(.last-responsive-image) {
    width: 80%;
  }

  @media screen and (min-width: 992px) {
    .category__title {
      width: 55%;
      text-align: left;
    }

    :deep(.last-responsive-image) {
      width: 100%;
    }
  }
</style>
