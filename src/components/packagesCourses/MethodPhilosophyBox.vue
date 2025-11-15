<script setup lang="ts">
import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
import type { PropType } from 'vue';
import IconBase from '../icons/IconBase.vue';

const fontFamily =
  "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

defineProps({
  title: {
    type:     Array as PropType<string[]>,
    required: true,
  },
  subtitle: {
    type:     Array as PropType<string[]>,
    required: true,
  },
  highlightParagraph: {
    type:     Array as PropType<string[]>,
    required: true,
  },
  text: {
    type:     Array as PropType<string[]>,
    required: true,
  },
});
</script>

<template>
  <section class="method-philosophy">
    <div class="method-philosophy__container">
      <header class="method-philosophy__header">
        <div class="method-philosophy__icon">
          <IconBase icon-name="IconMethod" icon-bg-color="var(--primary-color)" />
        </div>
        <TitlesParagraph
          tag="h2"
          :texts="title"
          text-color="black"
          font-weight="bold"
          :font-family="fontFamily"
          text-align="left"
        />
      </header>

      <div class="method-philosophy__body">
        <TitlesParagraph
          tag="p"
          :texts="subtitle"
          text-color="#877f7f"
          font-weight="400"
          :font-family="fontFamily"
          text-align="left"
          custom-property="method-philosophy__subtitle"
        />

        <TitlesParagraph
          tag="p"
          :texts="highlightParagraph"
          text-color="black"
          font-weight="bold"
          :font-family="fontFamily"
          text-align="left"
        />

        <TitlesParagraph
          tag="p"
          :texts="text"
          text-color="#877f7f"
          font-weight="400"
          :font-family="fontFamily"
          text-align="left"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
  :deep(h2) {
    font-size: var(--titlesBoxesCourses);
}

  .method-philosophy {
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 90px;
}

  .method-philosophy__container {
    background-color: #ffffff;
    border: 1px solid rgba(182, 182, 182, 0.5);
    border-radius: 8px;
    max-width: 1366px;
    padding: 24px 20px;
    width: 100%;

box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
}

  .method-philosophy__header {
    align-items: center;
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
}

  .method-philosophy__icon svg {
    fill: var(--primary-color);
    height: 32px;
    width: 32px;
}

  .method-philosophy__body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-left: 45px;
}

  :deep(.method-philosophy__subtitle) {
    color: #877f7f;
}
</style>
