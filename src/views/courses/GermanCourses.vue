<script setup lang="ts">
import CardCoursesPack from '@/components/cards/CardCoursesPack.vue'
import { ref } from 'vue';

const title = ref(["Principiantes(temporal Title)"])
const subtitle = ref(["Qué incluye el paquete (temporal)"])

</script>

<template>
  <div class="germanSection">
    <CardCoursesPack 
      src-image="images/courses/learGerman-language-team.webp"
      :title="title"
      :subtitle="subtitle"
    />
  </div>
</template>


<style scoped>
.germanSection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

:deep(.package__title) {
  font-size: var(--title-package-card);
}

</style>