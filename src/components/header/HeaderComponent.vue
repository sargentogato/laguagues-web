<template>
  <div class="header">
    <div class="header-box">
      <HeaderText :title="title" :messages="messages" :interval="interval" />
      <HeaderImages :images="images" :textImageBox="textImageBox"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderImages from './HeaderImages.vue';
import HeaderText from './HeaderText.vue';

const title = "header.title";
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
  padding: 64px 0 0 34px;
  display: flex;
  justify-content: center;
}


.header-box {
  display: flex;
  gap:120px;
}
</style>