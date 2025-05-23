<template>
  <component 
    :is="tag" 
    v-for="(text, index) in texts" 
    :key="index" 
    :style="dynamicStyles"
  >
    {{ $t(`${text}`) }}
  </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type:     String,
    required: true,
    default:  'div'
  },
  texts: {
    type:     Array as PropType<string[]>,
    required: true
  },
  textColor: {
    type:    String,
    default: '#000'
  },
  textSize: {
    type:    [String, Number],
    default: 1
  }
})

/* return implicito, por eso los ({}) */
const dynamicStyles = computed(() => ({
  fontSize: `${props.textSize}rem`,
  color:    props.textColor
}))

</script>

<style scoped>

</style>