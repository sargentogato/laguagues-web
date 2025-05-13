<template>
  <div class="header">
    <div class="header__text-box">
      <h1 class="header__title-top">
        Mejor comunicación
      </h1>
      <h1 class="header__title-bottom">
        Texto que cambia
      </h1>
      <h3 class="header__subtitle">Subtitle</h3>
    </div>

    <div class="header__image-box">
      <div class="image__title">Image Title</div>
      <div class="image__items-box">
        <div class="image__item">
          <img src="" alt="" class="image__picture">
          <p class="image__caption">Caption</p>
        </div>
        <div class="image__item">
          <img src="" alt="" class="image__picture">
          <p class="image__caption">Caption</p>
        </div>
        <div class="image__item">
          <img src="" alt="" class="image__picture">
          <p class="image__caption">Caption</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  display: flex;
  background-color: yellow;

  &__text-box {
    background-color: red;
  }
}
</style>