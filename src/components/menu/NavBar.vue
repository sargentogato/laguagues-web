<script setup lang="ts">
import { ref } from 'vue';
import LogoImage from '../logo/LogoImage.vue';
import LogoText from '../logo/LogoText.vue';
import SelectLang from './SelectLang.vue';
import ToggleButton from './ToggleButton.vue';

const isOpen = ref(false);
const classToApply = ref("");
const menu = ref<HTMLElement | null>();
const listeningEvent = ref<((e: MouseEvent) => void) | null>(null);
const childRef = ref();

const avoidTransitionMediaQueries = () => {
  setTimeout(() => {
    classToApply.value = "";
  }, 500);
};

const openCloseMenu = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    classToApply.value = "menu--visible";
    startEventListenerToCloseMenu();
  } else {
    classToApply.value = "menu--hidden";
    avoidTransitionMediaQueries();
    cleanEventListener();
  }
};

function handerlClickOutside(eventTriggered: MouseEvent) {
  if (menu.value && !menu.value.contains(eventTriggered.target as Node)) {
    openCloseMenu();
    childRef.value.handleClick();
  }
}

const startEventListenerToCloseMenu = () => {
  listeningEvent.value = handerlClickOutside;

  document.addEventListener('click', listeningEvent.value);
};

const cleanEventListener = () => {
  if (listeningEvent.value) {
    document.removeEventListener('click', listeningEvent.value);
    listeningEvent.value = null;
  }
}
</script>

<template>
  <nav id="menu" ref="menu" aria-label="Menu principal" class="menu menu-top">

    <div class="menu__logo">
      <LogoImage />
      <LogoText />
    </div>

    <ul class="menu__items" :class="classToApply">
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Aventura">{{ $t("menu.adventure") }}</p>
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Destinos">{{ $t('menu.destiny') }}</p>
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Alojamiento">{{ $t('menu.ourCourses') }}</p>
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Sobre Nosotros">
            {{ $t('menu.aboutUs') }}
          </p>
        </a>
      </li>
    </ul>
    <SelectLang />
    <ToggleButton ref="childRef" @openClosed="openCloseMenu" />

  </nav>
</template>

<style scoped>
.menu {
  align-items: center;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  max-height: 56px;
  position: relative;
  background-color: var(--primary-color);
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
  gap: 20px;
  opacity: 0;
  padding: var(--padding-menu-items);
  position: absolute;
  top: 100%;
  visibility: hidden;
  width: 100%;
  transform: translateY(var(--translate-y));
  font-weight: 500;
}

.menu__item {
  display: flex;
  width: fit-content;
}

.menu__item-link {
  color: var(--white)
}

.menu__item-text:hover {
  color: var(--secondary-color)
}

.menu--hidden {
  background-color: var(--white);
  transform: translateY(var(--translate-y));
  transition: var(--menu-animation);
  z-index: 1;
  background-color: var(--tertiary-color);

}

.menu--visible {
  transition: var(--menu-animation);
  background-color: var(--white);
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  z-index: 3;
  background-color: var(--tertiary-color);
}

@media screen and (min-width: 768px) {
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
    transform: translateY(var(--translate-y));
    transition: var(--menu-animation);
    animation: unset;
    flex-direction: row;
    gap: 28px;
    opacity: 1;
    padding: 0;
    position: unset;
    top: 0;
    transform: unset;
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