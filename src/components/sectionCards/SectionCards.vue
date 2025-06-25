<script setup lang="ts">
import type { IconName } from "@/components/icons/IconBase.vue";
import IconCard from '@/components/sharedComponents/IconCard.vue';
import TitlesTextComponent from '@/components/sharedComponents/TitlesParagraph.vue';

const whyLanguage = ["why.title"];

const cardInfo: Array<{iconName: IconName; title: string[]; text: string[]; fontWeight: string;}> = [
  {
    iconName:   "IconWorld",
    title:      ["why.titleLanguage"],
    text:       ["why.languageTeam"],
    fontWeight: '500',
  },
  {
    iconName:   "IconMethod",
    title:      ["why.titleTransversal"],
    text:       ["why.transversalMethods"],
    fontWeight: '500',
  },
  {
    iconName:   "IconForWho",
    title:      ["why.titleForWhom"],
    text:       ["why.forWhom"],
    fontWeight: '500',
  },
  {
    iconName:   "IconObjectives",
    title:      ["why.titleObjective"],
    text:       ["why.objective"],
    fontWeight: '500',
  },
  {
    iconName:   "IconResults",
    title:      ["why.titleResults"],
    text:       ["why.results"],
    fontWeight: '500',
  },
  ]
</script>

<template>
  <section class="section">
    <div class="section__box">
      <div class="section__card">
        <TitlesTextComponent
          tag="h2" 
          :texts="whyLanguage"
          text-transform="uppercase" 
          :line-height="'1'"
        />
      </div>
      <div class="section__card" v-for="(info, index) in cardInfo" :key="index">
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