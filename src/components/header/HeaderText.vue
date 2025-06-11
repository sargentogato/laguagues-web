<script setup lang="ts">
import type { PropType } from 'vue';
import DynamicBanner from '../atoms/DynamicText.vue';


const props = defineProps({
  title: {
    type:     String,
    default:  "Write a Title",
    required: true
  },
  subtitle: {
    type:      String,
    default:   "Add a subtitle",
    reequired: true,
  },
  messages: {
    type:    Array as PropType<string[]>,
    default: () => [],
  },
  textColor: {
    type:    String,
    default: '#ffff'
  },
});

</script>

<template>
  <div class="header__text-box">
    <div class="header__text">
      <h1 class="header__title-top" :style="{ color: textColor }">
        {{ $t(`${title}`) }}
      </h1>
      <DynamicBanner tag="h1" :messages="messages" font-weight="600" line-height="var(--line-height-titles)" text-transform="uppercase" :interval="2000" />
      <h3 class="header__subtitle" :style="{ color: textColor }">
        {{ $t(`${subtitle}`) }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.header__text-box {
  display: flex;
  flex-basis: 40%;
  flex-grow: 1;
  justify-content: flex-start;
  padding-left: var(--padding-header-x);
  padding-right: var(--padding-header-x);
}

.header__text {
  max-width: 500px;
}

.header__title-bottom {
  transition: translate 0.3s ease;
}


:deep([class^='header__title'])
 {
  font-size: clamp(
    2.2rem,
    8vw - 1.75rem,
    3.8rem
  );
}

.header__subtitle {
  font-weight: normal;
  padding-top: var(--padding-header-y);
  font-size: clamp(1rem, 8vw - 1.75rem, 1.1rem);
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

  [class^='header__title'] {
    font-size: var(--header-title-desktop);
  }
}

/* Animations - Loading pages*/
.header__text-box {
  animation-name: header__text-box;
  animation-duration: var(--animation-duration);
}

@keyframes header__text-box {
  from {
    transform: translateY(100%);
  }
}
</style>
