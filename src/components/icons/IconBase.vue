<script setup lang="ts">
import { computed } from 'vue';
import IconCircleArrow from './IconCircleArrow.vue';
import IconFacebook from './IconFacebook.vue';
import IconForWho from './IconForWho.vue';
import IconInstagram from './IconInstagram.vue';
import IconMethod from './IconMethod.vue';
import IconObjectives from './IconObjectives.vue';
import IconResults from './IconResults.vue';
import IconWorld from './IconWorld.vue';

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
    type: String,
  }
})

const iconComponent = computed(() => iconMap[props.iconName] || null);

const iconBgColor = computed(() => {
  if (props.iconBgColor) {
    return props.iconBgColor
  }

  return {}
})

defineOptions({ inheritAttrs: false })
</script>

<template>
  <component 
    :is="iconComponent"
    :style="{fill: iconBgColor}"
    v-bind="$attrs"
  />
</template>