<script setup lang="ts">
import { ref } from 'vue';
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';
import CardCategory from './CardCategory.vue';


const title = ref(['categories.title']);

const dataCard = [
  {
    srcImages: 'images/categories/language-team-Germany.webp',
    title:     'categories.title',
    text:      'categories.cardText',
    altImages: 'Poner un descripción en los locales'
  },
  {
    srcImages: 'images/categories/language-team-Itali.webp',
    title:     'categories.title',
    text:      'categories.cardText',
    altImages: 'Poner un descripción en los locales'
  },
  {
    srcImages: 'images/categories/language-team-Spain.webp',
    title:     'categories.title',
    text:      'categories.cardText',
    altImages: 'Poner un descripción en los locales'
  },
  {
    srcImages: 'images/categories/language-team-England.webp',
    title:     'categories.title',
    text:      'categories.cardText',
    altImages: 'Poner un descripción en los locales'
  },
  {
    srcImages: 'images/categories/language-team-workshop.jpg',
    title:     'categories.title',
    text:      'categories.cardText',
    altImages: 'Poner un descripción en los locales'
  },
  {
    srcImages: 'images/categories/language-team-Germany.webp',
    title:     'categories.title',
    text:      'categories.cardText',
    altImages: 'Poner un descripción en los locales'
  },
]


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
      <template v-for="(card, index) in dataCard" :key="index">
        <CardCategory 
          :src-image="card.srcImages" 
          :imageAlt="card.altImages" 
          :title="card.title" 
          :text="card.text"
          font-weight="600"
          />
      </template>
      
      <!-- <div class="card">
        <div class="card__image">
          <img src="../../../public/images/categories/language-team-Germany.webp" alt="">
        </div>
        <div class="card__title">{{ $t(`${cardTitle}`) }}</div>
        <div class="card__text">{{ $t(`${cardText}`) }}</div>
      </div>
      <div class="card">
        <div class="card__image">
          <img src="../../../public/images/categories/language-team-Germany.webp" alt="">
        </div>
        <div class="card__title">{{ $t(`${cardTitle}`) }}</div>
        <div class="card__text">{{ $t(`${cardText}`) }}</div>
      </div>
      <div class="card">
        <div class="card__image">
          <img src="../../../public/images/categories/language-team-Germany.webp" alt="">
        </div>
        <div class="card__title">{{ $t(`${cardTitle}`) }}</div>
        <div class="card__text">{{ $t(`${cardText}`) }}</div>
      </div>
      <div class="card">
        <div class="card__image">
          <img src="../../../public/images/categories/language-team-Germany.webp" alt="">
        </div>
        <div class="card__title">{{ $t(`${cardTitle}`) }}</div>
        <div class="card__text">{{ $t(`${cardText}`) }}</div>
      </div>
      <div class="card">
        <div class="card__image">
          <img src="../../../public/images/categories/language-team-Germany.webp" alt="">
        </div>
        <div class="card__title">{{ $t(`${cardTitle}`) }}</div>
        <div class="card__text">{{ $t(`${cardText}`) }}</div>
      </div>
      <div class="card">
        <div class="card__image">
          <img src="../../../public/images/categories/language-team-Germany.webp" alt="">
        </div>
        <div class="card__title">{{ $t(`${cardTitle}`) }}</div>
        <div class="card__text">{{ $t(`${cardText}`) }}</div>
      </div> -->
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
  flex-basis:var(--section-width);
}

.category__title {
  width: 45%;
}

.category__title:deep(h2){
  font-size: var(--title-sections);
  padding-bottom: 50px;
}

.category__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.category__cards:deep(.card__title) {
  /* background-color: yellow; */
}
</style>