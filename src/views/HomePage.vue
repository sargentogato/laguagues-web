<template>
  <div>
    <NavBar></NavBar>
    <HeaderPage></HeaderPage>
  </div>
</template>

<script setup lang="ts">
import HeaderPage from '@/components/header/HeaderComponent.vue';
import type { IconName } from "@/components/IconBase.vue";
import IconBase from '@/components/IconBase.vue';
import NavBar from '@/components/menu/NavBar.vue';

const inconNames:Record<string, IconName> = {
  IconWorld:      "IconWorld",
  IconForWho:     "IconForWho",
  IconGoals:      "IconGoals",
  IconMethod:     "IconMethod",
  IconObjectives: "IconObjectives",
  IconResults:    "IconResults",
}

</script>

<style lang="scss" scoped></style>