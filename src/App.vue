<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  <FooterComponent>FOOTER</FooterComponent>
</template>

<script setup lang="ts">
import NavBar from '@/components/menu/NavBar.vue';
import FooterComponent from'@/components/sharedComponents/FooterComponent.vue'
</script>

<style scoped></style>
