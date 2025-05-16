import { computed, onMounted, onBeforeUnmount, watch } from 'vue';
<template>
  <div class="header__text-box">
    <div class="header__text">
      <h1 class="header__title-top" :style="{color:textColor }">
        {{ $t(`${title}`) }}
      </h1>
      <Transition name="slide-fade" mode="out-in" :style="{ color: textColor }">
        <h1 :key="currentMessageIndex" role="status" aria-live="polite" class="header__title-bottom">
          {{ $t(`${currentMessage}`) }}
        </h1>
      </Transition>
      <h3 class="header__subtitle" :style="{ color: subtitleColor }">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim delectus fugiat voluptatibus
        necessitatibus recusandae beatae nesciunt impedit omnis, optio voluptates corporis accusamus
        assumenda eos nulla perferendis, velit consequuntur unde provident.
      </h3>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import useMessagesRotator from '@/composables/useMessagesRotator';
import type { PropType } from 'vue';

const props = defineProps({
  title: {
    type:    String,
    default: "",
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
  subtitleColor: {
    type:    String,
    default: '#ffff'
  }
})

if (import.meta.env.DEV) {
  if (props.messages.length === 0) {
    console.warn('Messages props is empty');
  }

  if (props.interval < 2000) {
    console.error('Interval must be at least 2000ms');
  }
}


const { currentMessageIndex, currentMessage  } = useMessagesRotator(props.messages, props.interval);
</script>

<style scoped>
.header__text {
  max-width: 430px;
}

.header__text-box {
  flex-basis: 40%;
  flex-grow: 1;
      display: flex
;
    justify-content: flex-end;
}

.header__title-bottom {
  min-height: 1.5em;
  transition: translate 0.3s ease;
}

[class^='header__title'] {
  font-size: 4rem;
  font-weight: 600;
  line-height: 61px;
}

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
</style>
