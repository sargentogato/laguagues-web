<template>
  <div id="toggleButton" class="menu__tooggleButton">
    <button class="hamburger hamburger--spin" type="button" :class="{'is-active': isActive}" @click="handlerEmits(); handleClick()">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const isActive: Ref<boolean, boolean> = ref(false);
const emit = defineEmits<{
  (e:'openClosed'): void
  (e: 'handleClick', fn:() => void) : void
}>();

const handleClick = () => {
  console.log("desde fuera");
  isActive.value = !isActive.value;
}

const handlerEmits = () => {
  emit('openClosed');
}

defineExpose({
  handleClick
})

</script>


<style scoped>
/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  margin: 0;
  overflow: visible;
  padding: 15px 15px;
  text-transform: none;
  transition-duration: 0.5s;
  transition-property: opacity, filter;
  transition-timing-function: linear;
 }

.hamburger:hover {
  opacity: 0.7;
 }

.hamburger.is-active:hover {
  opacity: 0.7;
 }

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: var(--secondary-color);
 }

.hamburger-box {
  display: inline-block;
  height: 24px;
  position: relative;
  width: 40px;
 }

.hamburger-inner {
  display: block;
  margin-top: -2px;
  top: 50%;
 }

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  background-color: var(--secondary-color);
  border-radius: 4px;
  height: 4px;
  position: absolute;
  transition-duration: 0.15s;
  transition-property: transform;
  transition-timing-function: ease;
  width: 40px;
 }

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
 }

.hamburger-inner::before {
  top: -10px;
 }

.hamburger-inner::after {
  bottom: -10px;
 }

.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
 }

.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
 }

.hamburger--spin .hamburger-inner::after {

  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
 }

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
 }

.hamburger--spin.is-active .hamburger-inner::before {
  opacity: 0;
  top: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
 }

.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);

transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
 }
</style>