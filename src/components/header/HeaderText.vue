import { computed, onMounted, onBeforeUnmount, watch } from 'vue';
<template>
  <div class="header__text-box">
    <h1 class="header__title-top">
      {{ $t(`${title}`) }}
    </h1>
    <Transition name="slide-fade" mode="out-in">
      <h1 :key="currentMessageIndex" role="status" aria-live="polite" class="header__title-bottom">
        {{ $t(`${currentMessage}`) }}
      </h1>
    </Transition>
    <h3 class="header__subtitle">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim delectus fugiat voluptatibus
      necessitatibus recusandae beatae nesciunt impedit omnis, optio voluptates corporis accusamus
      assumenda eos nulla perferendis, velit consequuntur unde provident.
    </h3>
  </div>

</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

interface IProps {
  title?: string,
  messages?: string[],
  interval?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  interval: 2000,
  messages: () => []
});

if (import.meta.env.DEV) {
  if (props.messages.length === 0) {
    console.warn("Messages props is empty");
  }

  if (props.interval < 2000) {
    console.error("Interval must be at least 2000ms");
  }
}

const currentMessageIndex = ref(0);
let intervalRotation: number | undefined;

const currentMessage = computed(() => {
  return props.messages[currentMessageIndex.value] || "";
});

const startRotation = (): void => {
  intervalRotation = window.setInterval(() => {
    currentMessageIndex.value = (currentMessageIndex.value + 1) % props.messages.length;
  }, props.interval);
};

const stopRotation = (): void => {
  window.clearInterval(intervalRotation);
};

onMounted(() => {
  if (props.messages.length > 1) startRotation();
});

onBeforeUnmount(stopRotation);

watch(() => props.interval, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    stopRotation();
    startRotation();
  }
});

watch(() => props.messages, (newMessasges) => {
  if (newMessasges.length === 0) {
    startRotation();
  } else if (newMessasges.length > 1 && !intervalRotation) {
    startRotation();
  }
})


</script>

<style scoped>
.header__title-bottom {
  min-height: 1.5em;
  transition: translate 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-enter-active {
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;
}

.slide-fade-leave-active {
  transition:
    opacity 0.3s cubic-bezier(1, 0.5, 0.8, 1),
    transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>