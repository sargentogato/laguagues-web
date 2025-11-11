<script setup lang="ts">
  import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
  import type { PropType } from 'vue';

// 1. Definimos la forma del objeto de TEXTO
interface FeatureTextItem {
  text: string;
  icon?: string; // El icono es opcional en el objeto de texto
}

// 2. Definimos la forma de la CAJA (Item)
interface FeatureItem {
  title:       string[];
  subtitle:    string[];
  defaultIcon?: string; // El icono por defecto es opcional
  texts:       FeatureTextItem[]; // 'texts' es un array de 'FeatureTextItem'
}

defineProps({
  items: {
    type:     Array as PropType<FeatureItem[]>,
    required: true,
  },
});

  const fontFamily =
    "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
</script>

<template>
  <section class="features">
    <div class="features__container">
      <article
        v-for="(item, index) in items"
        :key="index"
        class="feature__box"
      >
        <TitlesParagraph
          tag="h3"
          :texts="item.title"
          text-color="black"
          font-weight="bold"
          :font-family="fontFamily"
          text-align="center"
        />

        <TitlesParagraph
          v-if="item.subtitle && item.subtitle.length > 0"
          tag="p"
          :texts="item.subtitle"
          text-color="#877f7f"
          font-weight="400"
          :font-family="fontFamily"
          text-align="left"
          custom-property="feature__paddings"
        />

        <ul class="feature__items">
          <li
            v-for="(textItem, i) in item.texts"
            :key="i"
            class="feature__item"
          >
            <span class="feature__icon">{{ textItem.icon || item.defaultIcon }}</span>
            <span class="feature__text">{{ textItem.text }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
  :deep(h3) {
    font-size: clamp(1.3rem, 8vw - 3rem, 1.8rem);
  }

  .features {
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    padding: 80px 25px;
  }

  .features__container {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    max-width: 1366px;
    width: 100%;
  }

  .feature__box {
    background-color: #ffffff;
    border-color: rgba(182, 182, 182, 0.5);
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    flex: 1;
    padding: 20px;

    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  
  :deep(.feature__paddings) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .feature__item {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    .features__container {
      flex-direction: column;
    }
  }
</style>