<script setup lang="ts">
  import NavBar from '@/components/menu/NavBar.vue';
  import FooterComponent from '@/components/sharedComponents/FooterComponent.vue';
  import CookieBanner from '@/components/sharedComponents/CookieBanner.vue';
  import { useI18n } from 'vue-i18n';
  import { watchEffect } from 'vue';

const { locale } = useI18n();

watchEffect(() => {
  document.documentElement.lang = locale.value
})
  
</script>

<template>
  <div class="app">
    <a
      href="#main-content"
      class="skip-link"
    >
      Saltar al contenido principal
    </a>
    <NavBar />

    <main id="main-content">
      <router-view v-slot="{ Component, route }">
        <transition
          name="fade"
          mode="out-in"
        >
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </main>

    <FooterComponent />
    <CookieBanner />
  </div>
</template>

<style scoped>
  .app {
    position: relative;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-active,
  .fade-leave-to {
    opacity: 0;
  }

  .skip-link {
    position: absolute;
    top: -9999px;
    left: -9999px;
    background-color: var(--white); /* O tu color de fondo preferido */
    color: var(--primary-color); /* O tu color de texto principal */
    padding: 15px 20px;
    z-index: 9999;
    text-decoration: none;
    font-weight: bold;
    border-radius: 0 0 5px 0;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
</style>
