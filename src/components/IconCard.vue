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
  },
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
      <TitleComponent tag="h3" :texts="title" textTransform="uppercase"/>
      <TitleComponent tag="p" :texts="text" :fontWeight="fontWeight" />
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
  font-size:clamp(1.2rem, 8vw - 1.4rem, 1.5rem);
}

.card-text:deep(p){
  font-size:clamp(1rem, 8vw - 1.4rem, 1.2rem);
}
</style>