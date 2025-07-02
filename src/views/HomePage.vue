<script setup lang="ts">
  import HeaderComponent from '@/components/header/HeaderComponent.vue';
  import SectionCards from '../components/sectionCards/SectionCards.vue';
  import SectionCategories from '@/components/sectionCategories/SectionCategories.vue';
  import { ref, defineExpose } from 'vue';
  import type { ComponentPublicInstance } from 'vue';

  const sectionCategories = ref<ComponentPublicInstance | null>(null);

  defineExpose({
    scrollToCategory: () => {
      console.log("HomePage");
      
      sectionCategories.value?.$el?.scrollIntoView({ behavior: 'smooth' });
    },
  });
</script>

<template>
  <HeaderComponent />
  <SectionCards />
  <SectionCategories ref="sectionCategories" />
</template>
