<template>
  <div class="header__image-box">
    <div class="image__title" :style="{ color: textColor }">
      {{ $t(`${textImageBox}`) }}
    </div>
    <div class="image__items-box">
      <div v-for="(image, index) in props.images" :key="index" class="image__item">
        <img :src="image.src" alt="" class="image__picture" />

        <div class="image__caption-box">
          <p class="image__caption" :style="{ color: textColor }">
            {{ $t(`${image.caption}`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface IImagesItems {
  src: string,
  caption: string;
}


const props = defineProps({
  images: {
    type:    Array as PropType<IImagesItems[]>,
    default: () => [],
  },
  textImageBox: {
    type:     String,
    required: true
  },
  textColor: {
    type:    String,
    default: '#ffff',
  },
});
</script>

<style scoped>
.header__image-box {
  flex-basis: 60%;
  flex-grow: 1;
  background-color: var(--tertiary-color);
}

.image__title {
  font-size: var(--image-header-title-mobile);
  padding-left: 20px;
  /* padding: 5px 0 0 80px; */
}

.image__items-box {
  display: flex;
}

.image__item {
  position: relative;
}

.image__caption-box {
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  width: 80%;
  margin: auto;
  
  .image__caption {
    font-size: 1rem;
    font-weight: 500;
  }
}
</style>
