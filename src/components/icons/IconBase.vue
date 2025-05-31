<script setup lang="ts">
import { computed } from 'vue';
import IconForWho from './IconForWho.vue';
import IconMethod from './IconMethod.vue';
import IconObjectives from './IconObjectives.vue';
import IconResults from './IconResults.vue';
import IconWorld from './IconWorld.vue';

const iconMap = {
  IconWorld,
  IconMethod,
  IconForWho,
  IconObjectives,
  IconResults
}

export type IconName = keyof typeof iconMap

const props = defineProps({
  iconName: {
    type:     String as () => IconName,
    required: true,
  }
})

const iconComponent = computed(() => iconMap[props.iconName] || null);
</script>

<template>
  <component 
    :is="iconComponent"
  />
</template>

<style scoped>
svg {
  fill: var(--secondary-color);
}

</style>