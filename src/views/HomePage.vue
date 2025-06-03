<script setup lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import IconCard from '@/components/IconCard.vue';
import type { IconName } from "@/components/icons/IconBase.vue";
import NavBar from '@/components/menu/NavBar.vue';
import TitleComponent from '@/components/TitleComponent.vue';

const whyLanguage = ["why.title"];

const cardInfo: Array<{
  iconName: IconName;
  title: string[];
  text: string[];
  fontWeight: string;
}> = [
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
  <div>
    <NavBar></NavBar>
    <HeaderComponent></HeaderComponent>

    <section class="section">
      <div class="section__box">
        <div class="section__card">
          <TitleComponent 
            tag="h2" 
            :texts="whyLanguage"
            text-transform="uppercase" 
            :line-height="1"/>
        </div>
        <div class="section__card" v-for="(info, index) in cardInfo" :key="index">
          <IconCard v-bind="info" />
        </div>
      </div>
    </section>
  </div>
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
  width: 1420px;
}

.section__card {
  flex-grow: 1;
  flex-shrink: 1;
}

.section__card:deep(h2) {
  font-size: clamp(1.8rem, 8vw - 1.75rem, 2.5rem);
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