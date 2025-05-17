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
  background-color: var(--tertiary-color);
  flex-basis: 60%;
  flex-grow: 1;
  flex-shrink: 3;
}

.image__title {
  font-size: var(--image-header-title-mobile);
  padding-bottom: 25px;
  padding-left: 20px;
  padding-top: 25px;
  text-transform: uppercase;
}

.image__items-box {
  display: flex;
}

.image__item {
  position: relative;
}

.image__caption-box {
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 50%;
  width: 80%;

  .image__caption {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
  }
}

@media screen and (min-width:400px) {
  .image__caption-box {
    top: 60%;

    .image__caption {
      font-size: 1.2rem;
    }
  }
}

@media screen and (min-width:576px) {
  .image__caption-box {
    top: 80%;
  }
}

@media screen and (min-width:779px) {
  .image__caption-box {
    top: 60%;

    .image__caption {
      font-size: 1rem;
    }
  }
}

@media screen and (min-width:1200px) {
  .image__caption-box {
    .image__caption {
      font-size: 1.5rem;
    }
  }
}
</style>
