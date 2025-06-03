import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export const useScrollAnimation = () => {
  //Almacenar los elementos a animar
  const elements: Ref<HTMLElement[]> = ref([]);
  // Variable para controlar si el listener está activo
  const isListenerActive = ref(true);

  const registerElements = (seletedElements: HTMLElement) => {
    if (seletedElements) elements.value.push(seletedElements);
  };

  const isElementVisible = (selectedElement: HTMLElement) => {
    const viewportRelativePosition = selectedElement.getBoundingClientRect();
    return viewportRelativePosition.top < window.innerHeight * 0.85;
  };

  function handleScroll() {
    if (!isListenerActive.value) return;
    console.log('SCROLL');

    elements.value.forEach((element) => {
      if (element.ariaLabel === 'end' && isElementVisible(element)) {
        removeListener();
      }

      if (isElementVisible(element)) {
        element.classList.add('appear-active');
      }
    });
  }

  const removeListener = () => {
    console.log('REMOVER');
    isListenerActive.value = false;
    window.removeEventListener('scroll', handleScroll);
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    registerElements,
  };
}