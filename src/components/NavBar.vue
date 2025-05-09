<template>
  <nav id="menu" aria-label="Menu principal" class="menu">
    <div class="menu__logo">
      LOGO
    </div>

    <ul ref="menuRef" class="menu__items" :class="isOpen ? 'menu--visible' : 'menu--hidden'">
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Aventura">Aventura</p>
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Destinos">Destinos</p>
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Alojamiento">Nuestros cursos</p>
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__item-link">
          <p class="menu__item-text" data-text="Sobre Nosotros">
            Sobre Nosotros
          </p>
        </a>
      </li>
    </ul>

    <ToggleButton @openClosed="openCloseMenu" />

  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ToggleButton from './ToggleButton.vue';

const isOpen = ref(false);

const openCloseMenu = () => {
  isOpen.value = !isOpen.value;
};

</script>

<style scoped lang="scss">
.menu {
  align-items: center;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  max-height: 56px;
  position: relative;
}

.menu__logo {
  align-items: center;
  display: flex;
  gap: 5px;
  padding-left: $logo-padding-left;

  img {
    width: 120px;
  }
}

.menu__items {
  animation: grow 1s;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  padding: $padding-menu-items;
  position: absolute;
  top: 101%;
  transform: translateY(var(--translate-y));
  transition: $menu-animation;
  visibility: hidden;
  width: 100vw;

  .menu__item {
    display: flex;
    width: fit-content;

    &:hover {
      font-weight: 600;
    }
  }
}

.menu--hidden {
  background-color: $white;
  transform: translateY($translate-y);
  transition: $menu-animation;
  z-index: 1;
}

.menu--visible {
  background-color: $white;
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  z-index: 3;
}
</style>