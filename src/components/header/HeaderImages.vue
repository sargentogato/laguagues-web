<template>
  <div class="header__image-box">
    <div
      class="image__title"
      :style="{ color: textColor }"
    >
      {{ $t(`${textImageBox}`) }}
    </div>
    <div class="image__items-box">
      <div
        v-for="(image, index) in props.images"
        :key="index"
        class="image__item"
      >
        <img
          :src="image.src"
          alt=""
          class="image__picture"
        />
        <p
          class="image__caption"
          :style="{ color: textColor }"
        >
          {{ $t(`${image.caption}`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

  interface IImagesItems {
    src: string,
    caption: string
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
    font-size: 3rem;
    padding: 5px 0 0 80px;
  } 
  
  .image__items-box {
    display: flex;
  }
  
  .image__item {
    position: relative;
    
    .image__caption {
      position: absolute;
      margin: auto;
      bottom: 25%;
    }
  }
  
</style>
