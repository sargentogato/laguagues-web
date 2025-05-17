<template>
  <div class="header">
      <HeaderText :title="title" :subtitle="subtitle" :messages="messages" :interval="interval" />
      <HeaderImages :images="images" :textImageBox="textImageBox"/>
  </div>
</template>

<script setup lang="ts">
import HeaderImages from './HeaderImages.vue';
import HeaderText from './HeaderText.vue';

const title = "header.title";
const subtitle = "header.subtitle"
const messages = ["header.message1", "header.message2", "header.message3"];
const interval = 3000;

const images = [
  {
    src:     "images/header/language-team-h1.webp",
    caption: "header.textImageHeader1",
  },
  {
    src:     "images/header/language-team-h2.webp",
    caption: "header.textImageHeader2",
  },
  {
    src:     "images/header/language-team-h3.webp",
    caption: "header.textImageHeader3"
  },
]

const textImageBox = "header.textImageBox"

</script>



<style scoped>
.header {
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: var(--padding-header-y);
  /* padding-left: var(--padding-header-x);
  padding-right: var(--padding-header-x); */
}
</style>