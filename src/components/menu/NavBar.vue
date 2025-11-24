<script setup lang="ts">
  import LogoImage from '../logo/LogoImage.vue';
  import LogoText from '../logo/LogoText.vue';
  import SelectLang from './SelectLang.vue';
  import ToggleButton from './ToggleButton.vue';
  import { useMenu } from '@/composables/useMenu';

const {
  isOpen,
  classToApply,
  menu,
  openCloseMenu,
  handleMenuItemClick } = useMenu();
</script>

<template>
  <nav
    id="menu"
    ref="menu"
    aria-label="Menu principal"
    class="menu menu-top"
  >
    <RouterLink :to="{ name: 'Home' }">
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
      @openClosed="openCloseMenu"
      :is-active="isOpen"
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
