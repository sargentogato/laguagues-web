<script setup lang="ts">
import type { PropType } from 'vue';
import TitlesParagraph from '../sharedComponents/TitlesParagraph.vue';


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
  subtitle: {
    type:     Array as PropType<string[]>,
    required: true
  },
  includedTitle: {
    type:     Array as PropType<string[]>,
    required: true
  },
  includedItems: {
    type:     Array as PropType<string[]>,
    required: true
  },
  learnTitle: {
    type:     Array as PropType<string[]>,
    required: true
  },
  learnItems: {
    type:     Array as PropType<string[]>,
    required: true
  },
  priceTitle: {
    type:     Array as PropType<string[]>,
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
  textColor: {
    type:     String,
    required: true
  },
  fontWeight: {
    type:    String,
    default: '300',
  },
  textTransform: {
    type: String,
  },
})

</script>

<template>
  <article class="package__box">
    <figure class="package__image">
      <img
        :src="srcImage"
        :alt="altImage"
      />
    </figure>
    <div class="package__info">
      <div class="package__info-box">
        <TitlesParagraph
          tag="h1"
          :texts="title"
          :text-color="`${textColor}`"
          :font-weight="`${fontWeight}`"
          :text-transform="`${textTransform}`"

          :custom-class="'package__title'"
        />
        <TitlesParagraph
          tag="h3"
          :texts="subtitle"
          :text-color="`${textColor}`"
          :font-weight="`${fontWeight}`"
          :text-transform="`${textTransform}`"
          :custom-class="'package__subtitle'"
        />
        <h3 class="package__subtitle">Qué incluye el paquete</h3>
        <ul class="package__includes">
          <li class="package__item">
            <div class="package__bullets">
              <div class="bullets"></div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit at eum,
              laudantium maiores placeat nisi dolorem quibusdam id hic ratione quos minus iusto
              cumque! Dolorem autem ea maiores quae veritatis.as fasdfa sdf asdfasdfasd fasdfas
              res placeat nisi dolorem quibusdam id hic ratione quos minus iusto
              cumque! Dolorem autem ea maiores quae veritatis.as fasdfa sdf asdfasdfasd fasdfas
            </p>
          </li>
        </ul>
        <h3 class="package__section">Qué aprenderas</h3>
        <ul class="package__learn">
          <li class="package__item">
            <div class="package__bullets">
              <div class="bullets"></div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit at eum,
              laudantium maiores placeat nisi dolorem quibusdam id hic ratione quos minus iusto
              cumque! Dolorem autem ea maiores quae veritatis.
            </p>
          </li>
        </ul>

        <div class="package__pricing">
          <h3 class="package__price">Cuanto Cuesta</h3>
          <div class="package__price-box">
            <span class="package__price-period">3 meses</span>
            <span class="package__price-amount"> €299</span>
          </div>
        </div>
        <div class="package__info">
          <button class="package__contact">Contacta</button>
          <button class="package__more-info">Más información</button>
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
  }

  .package__includes {
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
</style>

