<script setup lang="ts">
import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
import type { PropType } from 'vue';


const props = defineProps({
  srcImage: {
    type:     String,
    required: true
  },
  altImage: {
    type:     String,
    default:  "Language Team",
    required: true
  },
  title: {
    type:     Array as PropType<string[]>,
    required: true
  },
  includedTitle: {
    type:     Array as PropType<string[]>,
    required: true
  },
  includedItems: {
    type:     Array as PropType<{ messages: string[] }[]>,
    required: true,
  },
  learnTitle: {
    type:     Array as PropType<string[]>,
    required: true
  },
  learnItems: {
    type:     Array as PropType<{ messages: string[] }[]>,
    required: true
  },
  timeNumber: {
    type:     Number,
    required: true
  },
  timeText: {
    type:     String,
    required: true
  },
  price: {
    type:     Number,
    required: true
  },
  textBtnOne: {
    type: String
  },
  textBtnTwo: {
    type: String
  },
})

</script>

<template>
  <article class="package__box card">
    <figure class="package__image">
      <img
        :src="srcImage"
        :alt="altImage"
      />
    </figure>
    <div class="package__info">
      <div class="package__info-box">
        <TitlesParagraph
          tag="h3"
          :texts="title"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
          :custom-class="'package__title'"
        />
        <TitlesParagraph
          tag="h4"
          :texts="includedTitle"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
          :custom-class="'package__subtitle'"
        />
        <ul class="package__includes">
          <li class="package__item" v-for="(include, index ) in includedItems" :key="index">
            <div class="package__bullets">
              <div class="bullets"></div>
            </div>
            <TitlesParagraph 
              tag="p"
              :texts="include.messages"
              text-color="black"
              font-weight="400"
            />
          </li>
        </ul>
        <TitlesParagraph
          tag="h4"
          :texts="learnTitle"
          text-color="black"
          font-weight="bold"
          text-transform="uppercase"
        />
        <ul class="package__learn">
          <li class="package__item" v-for="(include, index ) in learnItems" :key="index">
            <div class="package__bullets">
              <div class="bullets"></div>
            </div>
            <TitlesParagraph 
              tag="p"
              :texts="include.messages"
              text-color="black"
              font-weight="400"
            />
          </li>
        </ul>

        <div class="package__pricing">
          <div class="package__price-box">
            <span class="package__price-amount"> €{{ price }}</span>
            <div class="package__price-period">
              <span class="package__time">{{ timeNumber }}</span>
              <span class="package__period">{{ timeText }}</span>
            </div>
          </div>
        </div>
        <div class="package__info">
          <button class="package__contact">{{ textBtnOne }}</button>
          <button class="package__more-info">{{ textBtnTwo }}</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
  .package__box {
    width: 580px;
  }

  .package__info-box {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 10px 20px;
  }

 :deep(.package__title) {
  font-size:var(--title-package-card);
 }

  .package__includes,
  .package__learn {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .package__item {
    display: flex;
    gap: 15px;
  }

  .package__bullets {
    display: flex;
    align-items: center;
  }

  .package__bullets > .bullets {
    width: 10px;
    height: 10px;
    border: solid black;
    background-color: black;
    border-radius: 50%;
  }

  .package__price-box,
  .package__price-period {
    display: flex;
  }

  .package__price-period{
    gap: 5px;
  } 

  .package__price-box{
    justify-content: space-between;
  }

  .package__info {
    display: flex;
    justify-content: space-between;
  }

  .package__contact, 
  .package__more-info {
    padding: var(--padding-buttons);
    border-radius: var(--border-radius-buttons);
  }
</style>

