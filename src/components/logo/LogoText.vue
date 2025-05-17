<template>
  <div class="logo__text-box">
    <span class="logo__text-one">Languages</span>
    <span class="logo__text-two">Team</span>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.logo__text-box {
  display: flex;
  gap: 5px;
  font-weight: 600;
}

.logo__text-one {
  color: var(--white);
}

.logo__text-two {
  color: var(--secondary-color);
}

span[class^="logo__text"] {
  display: none;
}


@media screen and (min-width: 768px) {
  span[class^="logo__text"] {
    display: block;
  }
}
</style>