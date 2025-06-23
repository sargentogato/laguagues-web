<template>
  <div class="btn__box">
    <button v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" class="btn" @click="changeLang(locale)">
      <img :src="flags[locale]" alt="locale" class="btn__img">
    </button>
  </div>


</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { reactive } from 'vue';

const { locale } = useI18n();

const flags = reactive<Record<string, string>>({
  es: "images/langs/es.webp",
  en: "images/langs/en.webp",
  it: "images/langs/it.webp",
  de: "images/langs/de.webp",
  pt: "images/langs/pt.webp",
  fr: "images/langs/fr.webp",
});

const changeLang = (lang: string) => {
  locale.value = lang;
}
</script>

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
</style>