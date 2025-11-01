<script setup lang="ts">
  import type { PropType } from 'vue';
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';

  const props = defineProps({
    topTitlePartOne: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    topTitlePartTwo: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    topTitlePartThree: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    topSubtitle: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    topSubtitleTwo: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    messageOne: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    messageTwo: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    whyIsDifferent: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    whyChooseAs: {
      type:     Array as PropType<string[]>,
      required: true,
    },
    fontFamily: {
      type: String,
    },
  });

  const lineHeightTitles = '1';
</script>

<template>
  <div class="metod">
    <div class="metod__box">
      <TitlesParagraph
        tag="h1"
        :texts="topTitlePartOne"
        text-color="white"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />
      <TitlesParagraph
        tag="h1"
        :texts="topTitlePartTwo"
        text-color="#FFCC33"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />
      <TitlesParagraph
        tag="h1"
        :texts="topTitlePartThree"
        text-color="#FFCC33"
        font-weight="bold"
        :font-family="fontFamily"
        :line-height="lineHeightTitles"
      />

      <div class="metod__subtitle">
        <TitlesParagraph
          tag="p"
          :texts="topSubtitle"
          :font-family="fontFamily"
        />
      </div>
    </div>
  </div>

  <div class="metod__text-box">
    <div class="metod__messages">
      <div class="metod__message-one">
        Aquí va el primer mensaje
      </div>
      <div class="metod__message-two">
        <div class="metod__different">Qué lo hace diferente</div>
        <div class="metod__choose">Qué lo hace diferente</div>
        <div class="metod__get">Qué lo hace diferente</div>
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
    /* background-color: rgb(75, 75, 55); */
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
