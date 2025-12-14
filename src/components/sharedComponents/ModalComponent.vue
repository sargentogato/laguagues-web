<script setup lang="ts">
defineProps({
  show: {
    type:     Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <teleport to="body">
    <div v-if="show" class="modal" @click.self="closeModal">
      <div class="modal__container">
        <header class="modal__header">
          <slot name="header">
            <h2>Default Header</h2>
          </slot>
          <button class="modal__close-button" @click="closeModal">&times;</button>
        </header>
        <main class="modal__body">
          <slot></slot>
        </main>
        <footer class="modal__footer">
          <slot name="footer">
          </slot>
        </footer>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
@import '@/assets/styles/modal.css';
</style>
