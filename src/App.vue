<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  <FooterComponent>FOOTER</FooterComponent>
</template>

<script setup lang="ts">
import NavBar from '@/components/menu/NavBar.vue';
import FooterComponent from'@/components/FooterComponent.vue'
</script>

<style scoped></style>
