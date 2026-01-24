<script setup lang="ts">
import type { PropType } from 'vue';
import DynamicText from '../sharedComponents/DynamicText.vue';
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';

const intervalTime = 3500;

defineProps({
  title: {
    type:     Array as PropType<string[]>,
    default:  () => ["Write a Title"],
    required: true
  },
  subtitle: {
    type:    Array as PropType<string[]>,
    default: () => [],
  },
  messages: {
    type:    Array as PropType<string[]>,
    default: () => [],
  },
});

</script>

<template>
  <div class="header__text-box">
    <div class="header__text">
      <TitlesParagraph 
        tag="h1" :texts="title" 
        font-weight="600" 
        text-transform="uppercase" 
        line-height="var(--line-height-titles)" 
      />

      <DynamicText
        tag="h1"
        :messages="messages"
        fontWeight="600"
        textTransform="uppercase"
        line-height="var(--line-height-titles)"
        :interval="intervalTime"
      />

      <TitlesParagraph 
        tag="p" 
        :texts="subtitle" 
      />
    </div>
  </div>
</template>

<style scoped>
.header__text-box {
  display: flex;
  flex-basis: 48.5%;
  flex-grow: 1;
  justify-content: flex-start;
  padding-left: var(--padding-header-x);
  padding-right: var(--padding-header-x);
}

.header__text {
  max-width: 500px;
}

.header__text:deep(h1) {
  font-size: clamp(
    2.2rem,
    8vw - 1.75rem,
    3.5rem
  );
}

.header__text:deep(p) {
  font-size: clamp(1rem, 8vw - 1.75rem, 1.1rem);
  font-weight: normal;
  padding-top: var(--padding-header-y);
}

@media screen and (min-width:772px) {
  .header__text {
    padding-top: 50px;
  }
}

@media screen and (min-width: 1200px) {
  .header__text-box {
    justify-content: flex-end;
  }
}

/* Animations - Loading pages*/
.header__text-box {
  animation-duration: var(--animation-duration);
  animation-name: header__text-box;
}

@keyframes header__text-box {
  from {
    transform: translateX(-100%);
  }
}
</style>
