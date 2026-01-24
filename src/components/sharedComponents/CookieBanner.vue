<script setup lang="ts">
import { onMounted, ref } from 'vue';

const STORAGE_KEY = 'cookie_consent_given';
const isVisible = ref(false);

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    isVisible.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem(STORAGE_KEY, 'true');
  
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" class="cookie-banner">
    <p class="cookie-text">
      {{ $t('cookieBanner.text') }}
    </p>

    <div class="cookie-actions">
      <button @click="acceptCookies" class="cookie-button">
        {{ $t('cookieBanner.accept') }}
      </button>
      <RouterLink
        :to="{ name: 'PrivacyPage' }"
        class="cookie-link"
      >
        {{ $t('cookieBanner.moreInfo') }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cookie-banner {
  background-color: hsl(0, 0%, 18%, 0.9);
  bottom: 0;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  left: 0;
  padding-bottom: 25px;
  padding-top: 25px;
  position: fixed;
  width: 100%;
  z-index: 2;
}

.cookie-text {
  flex-basis: 100%;
  flex-grow: 1;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
  min-width: 300px;
  padding: 0 10px;
  text-shadow: 0 0 5px rgba(0, 0, 0);
  text-align: center;
}

.cookie-actions {
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.cookie-link {
  color: #c0c0c0;
  text-decoration: underline;
}

.cookie-button {
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 16px;
}

.cookie-button:hover {
  background-color: #45a049;
}
</style>