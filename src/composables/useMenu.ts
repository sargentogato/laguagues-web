import { ref } from 'vue';

export const useMenu = () => {
  const isOpen = ref(false);
  const classToApply = ref('');
  const menu = ref<HTMLElement | null>();
  const listeningEvent = ref<((e: MouseEvent) => void) | null>(null);

  const avoidTransitionMediaQueries = () => {
    setTimeout(() => {
      classToApply.value = '';
    }, 500);
  };

  function handerlClickOutsidMenu(eventTriggered: MouseEvent) {
    if (menu.value && !menu.value.contains(eventTriggered.target as Node)) {
      openCloseMenu();
    }
  }

  const handleMenuItemClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // Check if the clicked element is a RouterLink or a child of one
    if (target.closest('.menu__item-link')) {
      //closest es una función de JS que busca en el elemento si la clase de css está presente
      if (isOpen.value) {
        // Only close if the menu is open
        openCloseMenu();
        // childRef.value.handleClick();
      }
    }
  };

  const startEventListenerToCloseMenu = () => {
    listeningEvent.value = handerlClickOutsidMenu;

    document.addEventListener('click', listeningEvent.value);
  };

  const cleanEventListener = () => {
    if (listeningEvent.value) {
      document.removeEventListener('click', listeningEvent.value);
      listeningEvent.value = null;
    }
  };

  const openCloseMenu = () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
      classToApply.value = 'menu--visible';
      startEventListenerToCloseMenu();
    } else {
      classToApply.value = 'menu--hidden';
      avoidTransitionMediaQueries();
      cleanEventListener();
    }
  };

  return {
    //variables
    isOpen,
    classToApply,
    menu,

    //functions
    openCloseMenu,
    handleMenuItemClick,
  };
};
