<script setup lang="ts">
  import CardCoursesPack from '@/components/cards/CardCoursesPack.vue';
import MethodComponent from '@/components/packagesCourses/MethodComponent.vue';
import MethodFeatureBoxes from '@/components/packagesCourses/MethodFeatureBoxes.vue';
import MethodPhilosophyBox from '@/components/packagesCourses/MethodPhilosophyBox.vue';
import boxesDataCourse from '@/data/boxesDataCourse';
import cardDataCourse from '@/data/cardDataCourse';
import englishCourse from '@/data/englishDataCourse';

// Creamos una copia profunda de los datos originales para no modificarlos globalmente.
const modifiedBoxesData = JSON.parse(JSON.stringify(boxesDataCourse));

modifiedBoxesData[2].texts[3].text = 'englishCourse.orderedEnglish';
</script>

<template>
  <MethodComponent
    :main-title="englishCourse.mainTitle"
    :highlighted-titles="englishCourse.highlightedTitles"
    :subtitle="englishCourse.subtitle"
  />

  <MethodPhilosophyBox
    :title="englishCourse.philosophyTitle"
    :subtitle="englishCourse.philosophyP1"
    :highlight-paragraph="englishCourse.philosophyP2Highlight"
    :text="englishCourse.philosophyP3"
  />
  <MethodFeatureBoxes :items="modifiedBoxesData" />

  <div class="germanSection">
    <CardCoursesPack
      :title="cardDataCourse.basic"
      src-image="images/courses/learGerman-language-team.webp"
      :includedItems="cardDataCourse.basicIncluded"
      :time-number="cardDataCourse.timeNumber"
      :time-text="cardDataCourse.timeText"
      :price="cardDataCourse.priceBasic"
    />
    <CardCoursesPack
      :title="cardDataCourse.premium"
      src-image="images/courses/learGerman-language-team.webp"
      :includedItems="cardDataCourse.premiumIncluded"
      :time-number="cardDataCourse.timeNumber"
      :time-text="cardDataCourse.timeText"
      :price="cardDataCourse.pricePremium"
    />
    <CardCoursesPack
      :title="cardDataCourse.platinum"
      src-image="images/courses/learGerman-language-team.webp"
      :includedItems="cardDataCourse.platinumIncluded"
      :time-number="cardDataCourse.timeNumber"
      :time-text="cardDataCourse.timeText"
      :price="cardDataCourse.pricePlatinum"
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
</style>
