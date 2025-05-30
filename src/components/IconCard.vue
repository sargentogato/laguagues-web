<script setup lang="ts">
import type { IconName } from './icons/IconBase.vue';
import IconBase from "./icons/IconBase.vue";
import TitleComponent from './TitleComponent.vue';

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
  }
})

</script>

<template>
  <div class="card-box">
    <div class="card__icon">
      <div class="icon-box">
        <IconBase :iconName="iconName" />
      </div>
    </div>
    <div class="card-text">
      <TitleComponent tag="h3" :texts="title" :text-size="1.5" />
      <TitleComponent tag="p" :texts="text" :fontWeight="fontWeight" />
    </div>
  </div>
</template>


<style scoped>
.icon-box {
  width: 25px;
}
</style>