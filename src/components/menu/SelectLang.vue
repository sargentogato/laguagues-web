<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { reactive, ref, watch } from 'vue';
  // 1. Importamos la nueva función y la lista de idiomas
  import { loadLocaleMessages, supportedLocales } from '@/locales/i18n';

  const { locale } = useI18n();
  const activeLocale = ref(locale.value);

  const flags = reactive<Record<string, string>>({
    de: 'images/langs/de.webp',
    es: 'images/langs/es.webp',
    en: 'images/langs/en.webp',
    it: 'images/langs/it.webp',
    pt: 'images/langs/pt.webp',
    fr: 'images/langs/fr.webp',
  });

  // 2. La función ahora es asíncrona y llama a nuestro cargador
  const changeLang = async (lang: string) => {
    // Si el idioma ya es el activo, no hacemos nada
    if (activeLocale.value === lang) return;
    
    await loadLocaleMessages(lang);
    activeLocale.value = lang;
  };

  // 3. (Opcional pero recomendado) Un watcher para mantener la UI sincronizada 
  // si el idioma cambia desde otra parte de la app.
  watch(locale, (newLocale) => {
    activeLocale.value = newLocale;
  });
</script>

<template>
  <div class="btn__box">
    <!-- Iteramos sobre la lista de idiomas soportados que exportamos desde i18n.ts -->
    <button
      v-for="lang in supportedLocales"
      :key="`locale-${lang}`"
      @click="changeLang(lang)"
      class="btn"
      :class="{ 'btn--active': lang === activeLocale }"
    >
      <img
        :src="flags[lang]"
        :alt="lang"
        class="btn__img"
      />
    </button>
  </div>
</template>


<style scoped>
  .btn__box {
    display: flex;
    gap: 8px;
  }

  .btn {
    background-color: transparent;
    border: none;
    height: var(--flags-height-size);
    width: var(--flags-width-size);
  }

  .btn__img {
    height: var(--flags-height-size);
  }

  .btn--active {
    box-shadow: var(--shadow-box-flags);
    transition: box-shadow 0.3s ease;
  }
</style>
