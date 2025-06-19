<script setup lang="ts">
  import { ref } from 'vue';
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';
import CardCategory from './CardCategory.vue';

  const title = ref(['categories.sectionTitle']);

  const dataCard = [
    {
      srcImages:      'images/categories/language-team-Germany.webp',
      sectionTitle:   'categories.cardTitle',
      cardTextGerman: 'categories.cardTextGerman',
      altImages:      'Poner un descripción en los locales',
    },
    {
      srcImages:      'images/categories/language-team-Itali.webp',
      sectionTitle:   'categories.cardTitle',
      cardTextGerman: 'categories.cardTextGerman',
      altImages:      'Poner un descripción en los locales',
    },
    {
      srcImages:      'images/categories/language-team-Spain.webp',
      sectionTitle:   'categories.cardTitle',
      cardTextGerman: 'categories.cardTextGerman',
      altImages:      'Poner un descripción en los locales',
    },
    {
      srcImages:      'images/categories/language-team-England.webp',
      sectionTitle:   'categories.cardTitle',
      cardTextGerman: 'categories.cardTextGerman',
      altImages:      'Poner un descripción en los locales',
    },
    {
      srcImages:      'images/categories/language-team-workshop.jpg',
      sectionTitle:   'categories.cardTitle',
      cardTextGerman: 'categories.cardTextGerman',
      altImages:      'Poner un descripción en los locales',
    },
    {
      srcImages:      'images/categories/language-team-Germany.webp',
      sectionTitle:   'categories.cardTitle',
      cardTextGerman: 'categories.cardTextGerman',
      altImages:      'Poner un descripción en los locales',
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
            :title="card.sectionTitle"
            :text="card.cardTextGerman"
            font-weight="600"
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
    padding-top: 60px;
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

  @media screen and (min-width: 992px) {
    .category__title {
      width: 55%;
      text-align: left;
    }
  }
</style>
