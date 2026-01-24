import { onMounted } from 'vue';

export const useScrollAnimation = () => {
  let observer: IntersectionObserver | null = null;

  const registerElements = (selectedElement: HTMLElement):void => {
    if (observer) observer.observe(selectedElement);
  }

  const createObserver = (): void => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear-active');

            if (entry.target.ariaLabel === 'end') {
              console.log('Desconectin observer');
              disconnectObserver();
            } else {
              observer?.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: '0px 0px 50px 0px',
      },
    );
  }

  const disconnectObserver = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
      console.log("Observer disconnected");
    }
  }

  onMounted(() => {
    try {
      createObserver();
    } catch (error) {
      console.error("Error during onMounted", error)
    }
  });

  return {
    registerElements,
  } as const
}