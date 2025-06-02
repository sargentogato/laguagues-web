<template>
  <div class="header__text-box">
    <div class="header__text">
      <h1 class="header__title-top" :style="{ color: textColor }">
        {{ $t(`${title}`) }}
      </h1>
      <Transition name="slide-fade" mode="out-in" :style="{ color: textColor }">
        <h1 :key="currentMessageIndex" role="status" aria-live="polite" class="header__title-bottom">
          {{ $t(`${currentMessage}`) }}
        </h1>
      </Transition>
      <h3 class="header__subtitle" :style="{ color: textColor }">
        {{ $t(`${subtitle}`) }}
      </h3>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useMessagesRotator } from '@/composables/useMessagesRotator';
import type { PropType } from 'vue';

const props = defineProps({
  title: {
    type:     String,
    default:  "",
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
  interval: {
    type:    Number,
    default: 2000,
  },
  textColor: {
    type:    String,
    default: '#ffff'
  },
});

if (import.meta.env.DEV) {
  if (props.messages.length === 0) {
    console.warn('Messages props is empty');
  }

  if (props.interval < 2000) {
    console.error('Interval must be at least 2000ms');
  }
}

const { currentMessageIndex, currentMessage } = useMessagesRotator(props.messages, props.interval);
</script>

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

[class^='header__title'] {
  font-size: clamp(
    2.2rem,
    8vw - 1.75rem,
    3.8rem
  );
  font-weight: 600;
  line-height: var(--line-height-titles);
  text-transform: uppercase;
}

.header__subtitle {
  font-weight: normal;
  padding-top: var(--padding-header-y);
  font-size:clamp(0.8rem, 8vw - 1.75rem, 1.1rem);
}

/* Text Effect */
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: opacity 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(1, 0.5, 0.8, 1);
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
</style>
