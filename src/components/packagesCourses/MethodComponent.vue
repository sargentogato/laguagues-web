<script setup lang="ts">
import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
import type { PropType } from 'vue';

defineProps({
  mainTitle: {
    type:     Array as PropType<string[]>,
    required: true,
  },
  highlightedTitles: {
    type: Array as PropType<string[]>,
  },
  subtitle: {
    type:     Array as PropType<string[]>,
    required: true,
  },
});

const lineHeightTitles = '1';
const fontFamily =
  "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
</script>

<template>
  <div class="metod">
    <div class="metod__box">
      
      <TitlesParagraph
        tag="h1"
        :texts="mainTitle"
        text-color="white"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />
      
      <TitlesParagraph
        v-for="(title, index) in highlightedTitles"
        :key="index"
        tag="h1"
        :texts="[title]" text-color="#FFCC33"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />

      <div class="metod__subtitle">
        <TitlesParagraph
          tag="p"
          :texts="subtitle"
          :font-family="fontFamily"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .metod {
    align-items: center;
    background-color: var(--primary-color);
    min-height: 400px;
  }

  .metod,
  .metod__text-box {
    display: flex;
    justify-content: center;
  }

  .metod__box,
  .metod__messages {
    max-width: 1200px;
  }
  .metod__box {
    max-width: 1200px;
    max-height: fit-content;
    top: 80px;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }

  .metod__box:deep(h1) {
    font-size: clamp(1.875rem, 8vw - 1rem, 3.5rem);
  }

  .metod__subtitle {
    padding-top: 25px;
  }

  .metod__subtitle:deep(p) {
    font-size: 1.25rem;
  }

  .metod__text-box {
    background-color: yellow;
  }
</style>
