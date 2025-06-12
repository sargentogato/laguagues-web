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
    default:  'h1'
  },
  texts: {
    type:     Array as PropType<string[]>,
    required: true
  },
  textColor: {
    type:    String,
    default: '#fff'
  },
  fontWeight: {
    type:    String,
    default: 'normal',
  },
  textTransform: {
    type: String,
  },
  lineHeight: {
    type:    String,
    default: '1.5',
  },
})

/* return implicito, por eso los ({}) */
const dynamicStyles = computed(() => ({
  color:         props.textColor,
  fontWeight:    props.fontWeight,
  textTransform: props.textTransform,
  lineHeight:    props.lineHeight
}))

</script>
