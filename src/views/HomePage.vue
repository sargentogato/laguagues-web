<script setup lang="ts">
  import HeaderComponent from '@/components/header/HeaderComponent.vue';
  import IconsSection from '@/components/iconsSection/IconsSection.vue';
  import CoursesSection from '@/components/coursesSection/coursesSection.vue';
  import { ref } from 'vue';
  import type { ComponentPublicInstance } from 'vue';

  const sectionCategories = ref<ComponentPublicInstance | null>(null);

  defineExpose({
    scrollToCategory: () => {
      sectionCategories.value?.$el?.scrollIntoView({ behavior: 'smooth' });
    },
  });
</script>

<template>
  <HeaderComponent />
  <IconsSection />
  <CoursesSection ref="sectionCategories" />
</template>
