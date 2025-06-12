<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useScrollAnimation } from '../../composables/useScrollAnimation';
import type { IconName } from '@/components/icons/IconBase.vue';
import IconBase from '@/components/icons/IconBase.vue';
import TitleComponent from '@/components/sharedComponents/TitlesParagraph.vue';

const props = defineProps({
  iconName: {
    type:     String as () => IconName,
    required: true
  },
  title: {
    type:     Array as () => string[],
    required: true
  },
  text: {
    type:     Array as () => string[],
    required: true
  },
  fontWeight: {
    type:     String,
    required: false,
  },
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
  <div ref="animateSection" class="card-box appear-animation">
    <div class="card__icon">
      <div class="icon-box">
        <IconBase :iconName="iconName" />
      </div>
    </div>
    <div class="card-text">
      <TitleComponent tag="h3" :texts="title" text-transform="uppercase" />
      <TitleComponent tag="p" :texts="text" :font-weight="fontWeight" text-color="var(--secondary-color)" />
    </div>
  </div>
</template>


<style scoped>
.card-box {
  display: flex;
  gap: 20px;
}

.icon-box {
  width: var(--icon-size);
}

.card__icon {
  align-items: center;
  background-color: var(--tertiary-color);
  display: flex;
  height: 85px;
  justify-content: center;
  min-width: 85px;
}

.card-text:deep(h3){
  font-size:clamp(1.2rem, 8vw - 1.4rem, 1.2rem);
}

.card-text:deep(p){
  font-size:clamp(1rem, 8vw - 1.4rem, 1.1rem);
}
</style>