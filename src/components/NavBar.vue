<template>
  <nav id="menu" aria-label="Menu principal" class="menu">
    <div class="menu__logo">
      LOGO
    </div>

    <ul ref="menuRef" class="menu__items" :class="classToApply">
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
const classToApply = ref("");

const avoidTransitionMediaQueries = () => {
  setTimeout(() => {
    classToApply.value = "";
  }, 500);
};

const openCloseMenu = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    classToApply.value = "menu--visible";
  } else {
    classToApply.value = "menu--hidden";
    avoidTransitionMediaQueries();
  }
};



</script>

<style scoped>
.menu {
  align-items: center;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  max-height: 56px;
  position: relative;
}

.menu__logo {
  align-items: center;
  display: flex;
  gap: 5px;
  padding-left: var(--logo-padding-left);

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
  padding: var(--padding-menu-items);
  position: absolute;
  top: 101%;
  visibility: hidden;
  width: 100vw;
  transform: translateY(var(--translate-y));
  font-weight: 500;
}

.menu__item {
  display: flex;
  width: fit-content;
}

.menu__item-link {
  color: var(--black)
}

.menu__item-text:hover {
  color: var(--secondary-color)
}

.menu--hidden {
  background-color: var(--white);
  transform: translateY(var(--translate-y));
  transition: var(--menu-animation);
  z-index: 1;
}

.menu--visible {
  transition: var(--menu-animation);
  background-color: var(--white);
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  z-index: 3;
}

/* Media Queries */
@media screen and (min-width: 576px) {
  .menu {
    min-height: 80px;
  }

  .menu__logo {
    img {
      width: 150px;
    }
  }
}

@media screen and (min-width: 768px) {
  .menu {
    max-height: 80px;
    padding: 15px 32px;
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