import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

export const useMessagesRotator = (messages: string[], interval: number) => {
  const currentMessageIndex = ref(0);
  let intervalRotation: number | undefined;

  const currentMessage = computed(() => {
    return messages[currentMessageIndex.value] || '';
  });

  const startRotation = (): void => {
    intervalRotation = window.setInterval(() => {
      currentMessageIndex.value = (currentMessageIndex.value + 1) % messages.length;
    }, interval);
  };

  const stopRotation = (): void => {
    window.clearInterval(intervalRotation);
  };

  onMounted(() => {
    if (messages.length > 1) startRotation();
  });

  onBeforeUnmount(stopRotation);

  //Delete the old interval and start a new one if the interval time changes
  watch(
    () => interval,
    (newInterval, oldInterval) => {
      if (newInterval !== oldInterval) {
        stopRotation();
        startRotation();
      }
    },
  );

  watch(
    () => messages,
    (newMessages) => {
      if (newMessages.length === 0) {
        stopRotation(); // Detiene si no hay mensajes
      } else if (newMessages.length > 1 && !intervalRotation) {
        startRotation(); // Inicia solo si hay >1 mensaje y todavía no se ha inciado el intervalo
      }
    },
  );

  return {
    currentMessageIndex,
    currentMessage,
  };
};
