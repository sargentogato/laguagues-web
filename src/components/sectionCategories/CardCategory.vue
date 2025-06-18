<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useScrollAnimation } from '../../composables/useScrollAnimation';

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

/* Ref on template */
const animateSection = ref<HTMLElement | null>(null);
const { registerElements } = useScrollAnimation();

onMounted(() => {
  if (animateSection.value instanceof HTMLElement) {
    registerElements(animateSection.value);
  } else {
    console.warn("Element no yet available for animation", animateSection.value)
  }
})
</script>

<template>
  <div ref="animateSection" class="card appear-animation">
    <div class="card__image">
      <a href="">
        <img :src="srcImage" :alt="imageAlt">
      </a>
    </div>
    <div class="card__text-box">
      <div class="card__title" :style="dynamicStyles">{{ $t(`${title}`) }}</div>
      <div class="card__text">{{ $t(`${text}`) }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid hsl(260, 70%, 15%, 0.1);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05);
  flex-grow: 1;
  max-width: 360px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
}

.card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}

.card__text-box {
  padding: 24px;
}

.card__title {
  border-bottom: 2px solid var(--secondary-color);
  padding-bottom: 12px;
  text-align: center;
  text-transform: uppercase;
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