<script setup lang="ts">
import { useMessagesRotator } from '@/composables/useMessagesRotator';
import type { PropType } from 'vue';
import { computed } from 'vue';


const props = defineProps({
  tag: {
    type:     String,
    required: true,
    default:  'h1'
  },
  messages: {
    type:    Array as PropType<string[]>,
    default: () => [],
  },
  textColor: {
    type:    String,
    default: '#fff'
  },
  fontWeight: {
    type:    String,
    default: '500',
  },
  lineHeight: {
    type:    String,
    default: '1.5',
  },
  textTransform: {
    type: String,
  },
  interval: {
    type:    Number,
    default: 2000,
  },
})

if (import.meta.env.DEV) {
  if (props.messages.length === 0) {
    console.warn('Messages props is empty');
  }

  if (props.interval < 2000) {
    console.error('Interval must be at least 2000ms');
  }
}

const dynamicStyles = computed(() => ({
  color:         props.textColor,
  fontWeight:    props.fontWeight,
  textTransform: props.textTransform,
  lineHeight:    props.lineHeight
}))

const { currentMessageIndex, currentMessage } = useMessagesRotator(props.messages, props.interval);


</script>

<template>
  <Transition name="slide-fade" mode="out-in">
    <component :is="tag" :key="currentMessageIndex" role="status" aria-live="polite" class="header__title-bottom" :style="dynamicStyles">
      {{ $t(`${currentMessage}`) }}
    </component>
  </Transition>
</template> 

<style scoped>
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
</style>