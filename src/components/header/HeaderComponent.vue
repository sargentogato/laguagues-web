<template>
  <div class="header">
    <HeaderText :title="title" :messages="messages" />
    <HeaderImages />
  </div>
</template>

<script setup lang="ts">
import HeaderImages from './HeaderImages.vue';
import HeaderText from './HeaderText.vue';

const title = "header.title";
const messages = ["header.message1", "header.message2", "header.message3"]



</script>



<style scoped>
.header {
  display: flex;
  gap: 8.3%;
}
</style>