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
    fontWeight: '500'
  },
  {
    iconName:   "IconWorld",
    title:      ["why.titleTransversal"],
    text:       ["why.transversalMethods"],
    fontWeight: '500'
  },
  {
    iconName:   "IconWorld",
    title:      ["why.titleForWhom"],
    text:       ["why.forWhom"],
    fontWeight: '500'
  },
  {
    iconName:   "IconWorld",
    title:      ["why.titleObjective"],
    text:       ["why.objective"],
    fontWeight: '500'
  },
  {
    iconName:   "IconWorld",
    title:      ["why.titleResults"],
    text:       ["why.results"],
    fontWeight: '500'
  },
]

</script>

<template>
  <div>
    <NavBar></NavBar>
    <HeaderComponent></HeaderComponent>
  </div>
  <section class="section">
    <div class="section__box">
      <div class="section__card">
        <TitleComponent tag="h2" :texts="whyLanguage" :text-size="1.5" />
      </div>
      <div class="section__card" 
        v-for="(info, index) in cardInfo" 
        :key="index">
        <IconCard v-bind="info"/>
      </div>
    </div>
  </section>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<style scoped>
.section {
  display: flex;
  background-color: var(--primary-color);
  padding: 0 35px;
}

.section__box {
  background-color: red;
  width: 1420px;
  display: flex;
  flex-wrap: wrap;
}

.section__card {
  flex-grow: 1;
  flex-shrink: 1;
  border: 2px solid black;
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