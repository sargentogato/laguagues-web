<script setup lang="ts">
import { computed } from 'vue';
import IconFacebook from './IconFacebook.vue';
import IconForWho from './IconForWho.vue';
import IconInstagram from './IconInstagram.vue';
import IconMethod from './IconMethod.vue';
import IconObjectives from './IconObjectives.vue';
import IconResults from './IconResults.vue';
import IconWorld from './IconWorld.vue';
import IconCircleArrow from './IconCircleArrow.vue';

const iconMap = {
  IconWorld,
  IconMethod,
  IconForWho,
  IconObjectives,
  IconResults,
  IconFacebook,
  IconInstagram,
  IconCircleArrow
}

export type IconName = keyof typeof iconMap

const props = defineProps({
  iconName: {
    type:     String as () => IconName,
    required: true,
  },
  iconBgColor: {
    type:    String,
    default: '#ffff'
  }
})

const iconComponent = computed(() => iconMap[props.iconName] || null);

const iconBgColor = computed(() => props.iconBgColor)
</script>

<template>
  <component 
    :is="iconComponent"
    :style="{fill: iconBgColor}"
  />
</template>