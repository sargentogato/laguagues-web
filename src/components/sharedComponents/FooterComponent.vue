<template>
  <footer ref="endOfWeb" class="footer" aria-label="end">
    Footer
  </footer>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import { ref, onMounted } from 'vue';

const endOfWeb = ref();
const { registerElements } = useScrollAnimation()

onMounted(() => {
  registerElements(endOfWeb.value);
})

</script>

<style scoped>
  .footer {
    background-color: red;
    min-height: 300px;
  }
</style>