<script setup lang="ts">
import CardCourses from '@/components/cards/CardCourses.vue';
import categoriesData from '@/data/categoriesData';
import { ref } from 'vue';
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';

const title = ref(['categories.sectionTitle']);
const { dataCard } = categoriesData;

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
          <CardCourses
            :src-image="card.srcImages"
            :alt-image="card.altImages"
            :title="card.titleCard"
            :text="card.textCard"
            :link="card.link"
            font-weight-title="600"
            font-weight-text="400"
            :image-class="index === dataCard.length - 1 ? 'last-responsive-image' : ''"
            :card-image-correction="index === dataCard.length - 1 ? 'card__image--correction' : ''"
            :index-animation-delay="index"
            :button-text="card.buttonText"
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

  :deep(.card__icon-circle-arrow ) {
    width: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
  }

  :deep(.card__icon-circle-arrow) circle {
    stroke-width: 2px;
    stroke: var(--secondary-color);
    fill: var(--secondary-color);
  }

  :deep(.card__icon-circle-arrow) path {
    stroke-width: 1.5px;
    stroke:var(--white);
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
