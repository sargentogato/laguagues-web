<script setup lang="ts">
  import IconBase from '../icons/IconBase.vue';
</script>

<template>
  <icon-base icon-name="IconLogo" />
</template>


<style scoped>
.logo {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  .logo__world {
    color: var(--secondary-color);
    width: var(--logo-size);
  }

  .logo__users {
    bottom: 0;
    color: var(--white);
    position: absolute;
    right: 0;
    width: 20px;
  }
}
</style>