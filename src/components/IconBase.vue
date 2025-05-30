<script setup lang="ts">
import { computed } from 'vue';
import IconForWho from './icons/IconForWho.vue';
import IconWorld from './icons/IconWorld.vue';
import IconGoals from './icons/IconGoals.vue';
import IconMethod from './icons/IconMethod.vue';
import IconObjectives from './icons/IconObjectives.vue';
import IconResults from './icons/IconResults.vue';

const iconMap = {
  IconWorld,
  IconForWho,
  IconGoals,
  IconMethod,
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
