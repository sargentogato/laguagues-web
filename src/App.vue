<script setup lang="ts">
import NavBar from '@/components/menu/NavBar.vue';
import FooterComponent from '@/components/sharedComponents/FooterComponent.vue';
</script>

<template>
  <div class="app">
    <NavBar />

    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    
    <FooterComponent />
  </div>
</template>


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
