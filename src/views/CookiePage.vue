<script setup lang="ts">
import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
// Asumo que el archivo de datos se llama cookiesDataPolicy.ts, ajusta la ruta si es necesario
import cookiesData from '@/data/cookiesDataPolicy'; 

// Constantes de estilo (mismas que en PrivacyPolicy)
const textColor = '#333';
const fontWeight = '400';
const fontFamily = "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
</script>

<template>
  <div class="cookies-container">
    <article class="cookies-content">
      
      <TitlesParagraph
        tag="h1"
        :texts="cookiesData.title"
        :textColor="textColor"
        fontWeight="bold"
        :fontFamily="fontFamily"
      />

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="cookiesData.section1Title"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="cookiesData.section1P1"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
      </section>

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="cookiesData.section2Title"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="cookiesData.section2P1"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />

        <div class="cookie-type-block">
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.typesTechTitle"
            :textColor="textColor"
            fontWeight="bold"
            :fontFamily="fontFamily"
          />
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.typesTechContent"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="indented-text"
          />
        </div>

        <div class="cookie-type-block">
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.typesAnalyticTitle"
            :textColor="textColor"
            fontWeight="bold"
            :fontFamily="fontFamily"
          />
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.typesAnalyticContent"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="indented-text"
          />
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.typesAnalyticProvider"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="list-items"
          />
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.typesAnalyticPurpose"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="list-items"
          />
          
           <TitlesParagraph
            v-if="cookiesData.typesOtherPlaceholder"
            tag="p"
            :texts="cookiesData.typesOtherPlaceholder"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="responsible-box"
          />
        </div>
      </section>

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="cookiesData.section3Title"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="cookiesData.section3P1"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="cookiesData.thirdPartyList1"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
          customProperty="list-items"
        />
        <TitlesParagraph
          tag="p"
          :texts="cookiesData.thirdPartyList2"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
          customProperty="list-items"
        />
        <TitlesParagraph
          tag="p"
          :texts="cookiesData.thirdPartyList3"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
          customProperty="list-items"
        />
      </section>

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="cookiesData.section4Title"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="cookiesData.section4P1"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
        
        <div class="browser-list">
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.managementChrome"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="list-items"
          />
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.managementFirefox"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="list-items"
          />
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.managementSafari"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="list-items"
          />
          <TitlesParagraph
            tag="p"
            :texts="cookiesData.managementEdge"
            :textColor="textColor"
            :fontWeight="fontWeight"
            :fontFamily="fontFamily"
            customProperty="list-items"
          />
        </div>

        <TitlesParagraph
          tag="p"
          :texts="cookiesData.section4P2"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
          customProperty="responsible-box"
        />
      </section>

    </article>
  </div>
</template>

<style scoped>
.cookies-container {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.cookies-content {
  max-width: 800px;
  width: 100%;
}

.cookie-type-block {
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 2px solid transparent; 
  /* Opcional: añadir un borde sutil si quieres distinguir los bloques visualmente */
}

.browser-list {
  margin-bottom: 20px;
}

/* Estilos profundos para afectar a los elementos generados por TitlesParagraph */
:deep(h1) {
  font-size: 2rem;
  margin-bottom: 25px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

:deep(h2) {
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 15px;
}

:deep(p) {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

/* Reutilización de los estilos de caja "responsible-box" para notas importantes */
:deep(.responsible-box) {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid var(--tertiary-color, #ccc);
  white-space: pre-line;
  margin-top: 15px;
}

/* Estilo para las listas (usado en navegadores y terceros) */
:deep(.list-items) {
  margin-left: 20px;
  position: relative;
  margin-bottom: 5px; /* Menor margen entre items de lista */
}

:deep(.list-items::before) {
  content: '•';
  position: absolute;
  left: -20px;
  color: var(--tertiary-color, #333);
  font-weight: bold;
}

/* Clase auxiliar para indentar descripciones de tipos de cookies */
:deep(.indented-text) {
  margin-left: 10px;
  color: #555;
}
</style>