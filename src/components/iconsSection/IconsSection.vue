<script setup lang="ts">
import IconCard from '@/components/cards/IconCard.vue';
import TitlesTextComponent from '@/components/sharedComponents/TitlesParagraph.vue';
import iconData from '@/data/iconDataSection';
</script>

<template>
  <section class="section">
    <div class="section__box">
      <div class="section__card">
        <TitlesTextComponent
          tag="h2" 
          :texts="iconData.whyLanguage"
          text-transform="uppercase" 
          :line-height="'1'"
        />
      </div>
      <div class="section__card" v-for="(info, index) in iconData.cardInfo" :key="index">
        <IconCard v-bind="info" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  background-color: var(--primary-color);
  display: flex;
  padding: 0 35px;
  padding-bottom: 165px;
  padding-top: 165px;
}

.section__box {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  flex-basis: var(--section-width)
}

.section__card {
  flex-grow: 1;
  flex-shrink: 1;
}

.section__card:deep(h2) {
  font-size: var(--title-sections);
}

@media screen and (min-width:768px) {
  .section {
    justify-content: center;
  }
  .section__card {
    flex-basis: 33.3%;
  }
}
</style>