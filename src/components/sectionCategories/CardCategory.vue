<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  srcImage: {
    type:     String,
    required: true
  },
  imageAlt: {
    type:     String,
    required: true
  },
  title: {
    type:     String,
    required: true,
  },
  text: {
    type:     String,
    required: true
  },
  fontWeight: {
    type:    String,
    default: '300',
  },
})

const dynamicStyles = computed(() => ({
  fontWeight: props.fontWeight
}))
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="srcImage" :alt="imageAlt">
    </div>
    <div class="card__text-box">
      <div class="card__title" :style="dynamicStyles">{{ $t(`${title}`) }}</div>
      <div class="card__text">{{ $t(`${text}`) }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 360px;
  width: 100%;
  flex-grow: 1;
  border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid hsl(260, 70%, 15%, 0.1);
}

.card:hover {
  transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card__text-box {
  padding: 24px;
}

.card__title {
  padding-bottom: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--secondary-color);
  text-align: center;
}

.card__image img {
  height: 187px;
}

.card__text {
  padding-top: 10px;
}

@media screen and (min-width:576px) {
  .card {
    width: 45%;
  }
}

@media screen and (min-width:992px) {
  .card {
    width: 25%;
  }
}

@media screen and (min-width:1200px) {
  .card {
    flex-grow: 0;
    width: 23%;;
  }
}
</style>