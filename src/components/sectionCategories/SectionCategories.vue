<script setup lang="ts">
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';
import { ref } from 'vue';
import categories from '../../locales/es/categories';

const title = ref(['categories.title']);
const cardTitle = ref(['categories.cardTitle'])
const cardText = ref(['categories.cardText'])

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
      </div>
      <div class="card">
        <div class="card__image">
          <img src="../../../public/images/categories/language-team-Germany.webp" alt="">
        </div>
        <div class="card__title">{{ $t(`${cardTitle}`) }}</div>
        <div class="card__text">{{ $t(`${cardText}`) }}</div>
      </div>
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

.category__title:deep(h2){
  font-size: var(--title-sections);
  padding-bottom: 50px;
}

.category__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 100%;
  flex-grow: 1;
}

.card__title {
  padding: 20px 0;
  text-transform: uppercase;
}

@media screen and (min-width:576px) {
  .card {
    width: 45%;
  }
}

@media screen and (min-width:992px) {
  .card {
    width: 25%;
  }
}

@media screen and (min-width:1200px) {
  .card {
    flex-grow: 0;
    width: 23%;;
  }
}
</style>