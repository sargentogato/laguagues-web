<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
import { useScrollAnimation } from '../../composables/useScrollAnimation';
import type { IconName } from '../icons/IconBase.vue';
import IconBase from '../icons/IconBase.vue';

  const props = defineProps({
    srcImage: {
      type:     String,
      required: true,
    },
    altImage: {
      type:     String,
      required: true,
    },
    link: {
      type:    String,
      require: true,
    },
    title: {
      type:     String,
      required: true,
    },
    text: {
      type:     String,
      required: true,
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
      default: '',
    },
    imageClass: {
      type:    String,
      default: '',
    },
    indexAnimationDelay: {
      type:    Number,
      default: 0,
    },
    icon: {
      type:    String as () => IconName,
      default: 'IconCircleArrow',
    },
    IconBgColor: {
      type:    String,
      default: '#ffff',
    },
  });

  const titleStylesDynamic = computed(() => ({
    fontWeight: props.fontWeightTitle,
  }));

  const textStylesDynamic = computed(() => {
    return { fontWeight: props.fontWeightText };
  });

  const animationStyle = computed(() => {
    return {
      animationDelay: `${props.indexAnimationDelay * 100}ms`,
    };
  });

  /* Ref on template */
  const animateSection = ref<HTMLElement | null>(null);
  const { registerElements } = useScrollAnimation();

  onMounted(() => {
    if (animateSection.value instanceof HTMLElement) {
      registerElements(animateSection.value);
    } else {
      console.warn('Element no yet available for animation', animateSection.value);
    }
  });
</script>

<template>
  <div
    ref="animateSection"
    class="card appear-animation"
    :style="animationStyle"
  >
    <div class="card__image">
      <RouterLink
        :class="cardImageCorrection"
        :to="{ name: `${link}` }"
      >
        <IconBase
          :iconName="icon"
          class="card__icon-circle-arrow"
        />
        <img
          :src="srcImage"
          :alt="$t(`${altImage}`)"
          :class="imageClass"
        />
      </RouterLink>
    </div>
    <div class="card__text-box">
      <div
        class="card__title"
        :style="titleStylesDynamic"
      >
        {{ $t(`${title}`) }}
      </div>
      <div
        class="card__text"
        :style="textStylesDynamic"
      >
        {{ $t(`${text}`) }}
      </div>
    </div>
    <RouterLink
      :to="{ name: `${link}` }"
      class="card__button-link"
    >
      <button class="card__button">Más información</button>
    </RouterLink>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    max-width: 360px;
  }

  .card__image--correction {
    display: flex;
    justify-content: center;
  }

  .last-responsive-image {
    width: 80%;
  }

  .card__icon-circle-arrow {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
  }

  .card__text-box {
    flex-grow: 1;
    margin-bottom: 25px;
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
  .card__button-link {
    text-align: center;
  }

  .card__button {
    background-color: var(--primary-color);
    border: 1px solid rgb(255, 255, 255);
    border-radius: var(--border-radius-buttons);
    bottom: 25px;
    color: var(--white);
    cursor: pointer;
    left: 0;
    margin: auto;
    padding: var(--padding-buttons);
    position: relative;
    right: 0;
    width: 80%;
  }

  .card__button:hover {
    background-color: var(--secondary-color);
    color: black;
    font-weight: bold;
  }

  @media screen and (min-width: 576px) {
    .card {
      width: 45%;
    }

    .category__title {
      text-align: left;
      width: 55%;
    }

    .last-responsive-image {
      width: 100%;
    }
  }

  @media screen and (min-width: 992px) {
    .card {
      width: 25%;
    }
  }

  @media screen and (min-width: 1200px) {
    .card {
      flex-grow: 0;
      width: 23%;
    }
  }
</style>
