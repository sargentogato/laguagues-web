<script setup lang="ts">
import IconCircleArrow from '@/components/icons/IconCircleArrow.vue';
import { computed, onMounted, ref } from 'vue';
import { useScrollAnimation } from '../../composables/useScrollAnimation';

const props = defineProps({
  srcImage: {
    type:     String,
    required: true
  },
  altImage: {
    type:     String,
    required: true
  },
  link: {
    type:    String,
    require: true
  },
  title: {
    type:     String,
    required: true,
  },
  text: {
    type:     String,
    required: true
  },
  fontWeightTitle: {
    type:    String,
    default: '300',
  },
  fontWeightText: {
    type:    String,
    default: '100',
  },
  cardImageCorrection: {
    type:    String,
    default: ''
  },
  imageClass: {
    type:    String,
    default: ''
  },
  indexAnimationDelay: {
    type:    Number,
    default: 0
  }
});

const titleStylesDynamic = computed(() => ({
  fontWeight: props.fontWeightTitle
}));

const textStylesDynamic = computed(() => {
 return { fontWeight: props.fontWeightText }
});

const animationStyle = computed(() => {
  return {
    animationDelay: `${props.indexAnimationDelay * 100}ms`
  }
})

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
  <div ref="animateSection" class="card appear-animation" :style="animationStyle">
    <div class="card__image">
      <RouterLink :class="cardImageCorrection" :to="{name: `${link}`}">
          <IconCircleArrow class="card__icon-circle-arrow"/>
          <img :src="srcImage" :alt="$t(`${altImage}`)" :class="imageClass">
      </RouterLink>
    </div>
    <div class="card__text-box">
      <div class="card__title" :style="titleStylesDynamic">{{ $t(`${title}`) }}</div>
      <div class="card__text" :style="textStylesDynamic">{{ $t(`${text}`) }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid hsl(260, 70%, 15%, 0.1);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05);
  max-width: 360px;
  overflow: hidden;
  transition: box-shadow 0.5s ease-in-out;
  width: 100%;
}

.card:hover {
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5), -5px 4px 8px rgba(0, 0, 0, 0.5);
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

.card__image {
  position: relative;
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