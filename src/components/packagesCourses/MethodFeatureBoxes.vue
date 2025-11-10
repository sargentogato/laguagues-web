<script setup lang="ts"></script>

<template>
  <section class="features">
    <div class="features-container">
      <article class="feature-box">
        <slot name="featureLeft" />
      </article>
      <article class="feature-box">
        <slot name="featureCenter" />
      </article>
      <article class="feature-box">
        <slot name="featureRight" />
      </article>
    </div>
  </section>
</template>

<style scoped>
  .features {
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    padding: 80px 25px;
  }

  .features-container {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    max-width: 1200px;
    width: 100%;
  }

  .feature-box {
    background-color: #ffffff;
    border-color: rgba(182, 182, 182, 0.5);
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    flex: 1;
    padding: 20px;

box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  @media (max-width: 768px) {
    .features-container {
      flex-direction: column;
    }
  }
</style>
