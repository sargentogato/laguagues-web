<template>
  <div class="app">
    <NavBar @go-to-category="handleScrollToCategory"></NavBar>

    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component" ref="pageComponentRef"></component>
        </div>
      </transition>
    </router-view>
    
    <FooterComponent>FOOTER</FooterComponent>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/menu/NavBar.vue';
import FooterComponent from '@/components/sharedComponents/FooterComponent.vue'
import { ref } from 'vue';

const pageComponentRef = ref();

function handleScrollToCategory() {
  pageComponentRef.value?.scrollToCategory?.()
}
</script>

<style scoped>
.app{
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
</style>
