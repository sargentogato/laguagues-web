<script setup lang="ts"></script>

<template>
  <div class="metod">
    <div class="metod__box">
      <slot name="title"></slot>
      <div class="metod__subtitle">
        <slot name="subtitle"></slot>
      </div>
    </div>
  </div>

  <div class="metod__text-box">
    <div class="metod__messages">
      <div class="metod__message-one">
        <slot name="messageOne"></slot>
      </div>
      <div class="metod__message-two">
        <slot name="messageTwo"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .metod {
    align-items: center;
    background-color: var(--primary-color);
    min-height: 400px;
  }

  .metod,
  .metod__text-box {
    display: flex;
    justify-content: center;
  }

  .metod__box,
  .metod__messages {
    max-width: 1200px;
  }
  .metod__box {
    max-width: 1200px;
    max-height: fit-content;
    top: 80px;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }

  .metod__box:deep(h1) {
    font-size: clamp(1.875rem, 8vw - 1rem, 3.5rem);
  }

  .metod__subtitle {
    padding-top: 25px;
  }

  .metod__subtitle:deep(p) {
    font-size: 1.25rem;
  }

  .metod__text-box {
    background-color: yellow;
  }
</style>
