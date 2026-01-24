<script setup lang="ts">
import HeaderImages from './HeaderImages.vue';
import HeaderText from './HeaderText.vue';
import headerData from '@/data/headerDataComponent';

const textImageBox = "header.textImageBox"
</script>

<template>
  <header class="header">
    <HeaderText :title="headerData.title" :subtitle="headerData.subtitle" :messages="headerData.messages"/>
    <HeaderImages :images="headerData.images" :textImageBox="textImageBox" />
  </header>
</template>


<style scoped>
.header {
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: var(--padding-header-y);
}

@media screen and (min-width:780px) {
  .header {
    flex-direction: row;
  }
}
</style>