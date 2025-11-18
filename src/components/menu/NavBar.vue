<script setup lang="ts">
  import { ref } from 'vue';
  import LogoImage from '../logo/LogoImage.vue';
  import LogoText from '../logo/LogoText.vue';
  import SelectLang from './SelectLang.vue';
  import ToggleButton from './ToggleButton.vue';

  const isOpen = ref(false);
  const classToApply = ref('');
  const menu = ref<HTMLElement | null>();
  const listeningEvent = ref<((e: MouseEvent) => void) | null>(null);
  const childRef = ref();

  const avoidTransitionMediaQueries = () => {
    setTimeout(() => {
      classToApply.value = '';
    }, 500);
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

  function handerlClickOutsideMenu(eventTriggered: MouseEvent) {
    if (menu.value && !menu.value.contains(eventTriggered.target as Node)) {
      openCloseMenu();
      childRef.value.handleClick();
    }
  }

const handleMenuItemClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
    // Check if the clicked element is a RouterLink or a child of one
  if (target.closest('.menu__item-link')) {
      //closest es una función de JS que busca en el elemento si la clase de css está presente
      if (isOpen.value) { // Only close if the menu is open
        openCloseMenu();
        childRef.value.handleClick();
      }
    }
  };
  
  const startEventListenerToCloseMenu = () => {
    listeningEvent.value = handerlClickOutsideMenu;

    document.addEventListener('click', listeningEvent.value);
  };

  const cleanEventListener = () => {
    if (listeningEvent.value) {
      document.removeEventListener('click', listeningEvent.value);
      listeningEvent.value = null;
    }
  };
</script>

<template>
  <nav
    id="menu"
    ref="menu"
    aria-label="Menu principal"
    class="menu menu-top"
  >
  <RouterLink :to="{name: 'Home'}">
    <div class="menu__logo">
      <LogoImage />
      <LogoText />
    </div>
  </RouterLink>

    <ul
      class="menu__items"
      :class="classToApply"
      @click="handleMenuItemClick"
    >
      <li class="menu__item">
        <RouterLink
          class="menu__item-link"
          :to="{ name: 'Home' }"
          data-text="Home"
        >
          Home
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink
          class="menu__item-link"
          :to="{ name: 'GermanCourses' }"
        >
          {{ $t('menu.german') }}
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink
          class="menu__item-link"
          :to="{ name: 'EnglishCourses' }"
        >
          {{ $t('menu.english') }}
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink
          class="menu__item-link"
          :to="{ name: 'ItalianCourses' }"
        >
          {{ $t('menu.italian') }}
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink
          class="menu__item-link"
          :to="{ name: 'SpanishCourses' }"
        >
          {{ $t('menu.spanish') }}
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink
          class="menu__item-link"
          :to="{ name: 'LegalTranslation' }"
        >
          {{ $t('menu.legalTranslation') }}
        </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink
          class="menu__item-link"
          :to="{ name: 'WorkshopCourses' }"
        >
          {{ $t('menu.culinaryWorkshop') }}
        </RouterLink>
      </li>
    </ul>
    <SelectLang />
    <ToggleButton
      ref="childRef"
      @openClosed="openCloseMenu"
    />
  </nav>
</template>

<style scoped>
  .menu {
    align-items: center;
    background-color: var(--white);
    background-color: var(--primary-color);
    display: flex;
    justify-content: space-between;
    max-height: 56px;
    position: relative;
  }

  .menu-top {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .menu__logo {
    align-items: center;
    display: flex;
    gap: 5px;
    padding-left: var(--logo-padding-left);
  }

  .menu__items {
    animation: grow 1s;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 20px;
    opacity: 0;
    padding: var(--padding-menu-items);
    position: absolute;
    top: 100%;
    transform: translateY(var(--translate-y));
    visibility: hidden;
    width: 100%;
  }

  .menu__item {
    display: flex;
    width: fit-content;
  }

  .menu__item-link {
    color: var(--white);
  }

  .menu__item-link:hover {
    color: var(--secondary-color);
  }

  .menu--hidden {
    background-color: var(--white);
    background-color: var(--tertiary-color);
    transform: translateY(var(--translate-y));
    transition: var(--menu-animation);
    z-index: 1;
  }

  .menu--visible {
    background-color: var(--white);
    background-color: var(--tertiary-color);
    opacity: 1;
    transform: translateY(0);
    transition: var(--menu-animation);
    visibility: visible;
    z-index: 3;
  }

  @media screen and (min-width: 1200px) {
    .menu {
      max-height: 80px;
      padding: 15px 32px;
    }

    .menu__logo {
      padding-left: 0;
    }

    .menu--hidden {
      transform: unset;
    }

    .menu__items {
      animation: unset;
      flex-direction: row;
      gap: 28px;
      opacity: 1;
      padding: 0;
      position: unset;
      top: 0;
      transform: translateY(var(--translate-y));
      transform: unset;
      transition: var(--menu-animation);
      visibility: visible;
      width: unset;
    }

    .menu__item-text {
      font-size: var(--font-size-items-menu);
    }

    .menu__btn {
      display: block;
    }

    .menu__tooggleButton {
      display: none;
    }
  }
</style>
