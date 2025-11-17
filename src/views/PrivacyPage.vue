<script setup lang="ts">
import TitlesParagraph from '@/components/sharedComponents/TitlesParagraph.vue';
import policyData from '@/data/privacyDataPolicy';

// Constantes de estilo
const textColor = '#333';
const fontWeight = '400';
const fontFamily = "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
</script>

<template>
  <div class="privacy-container">
    <article class="privacy-content">
      <TitlesParagraph
        tag="h1"
        :texts="policyData.title"
        :textColor="textColor"
        fontWeight="bold"
        :fontFamily="fontFamily"
      />

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="policyData.introTitle"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="policyData.introParagraphs"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="policyData.responsibleInfo"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
          customProperty="responsible-box"
        />
      </section>

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="policyData.infoTitle"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="policyData.infoParagraphs"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
      </section>

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="policyData.purposeTitle"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="policyData.purposeParagraphs"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="policyData.purposeList"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
          customProperty="list-items"
        />
      </section>

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="policyData.conservationTitle"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="policyData.conservationParagraphs"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
      </section>

      <section>
        <TitlesParagraph
          tag="h2"
          :texts="policyData.changesTitle"
          :textColor="textColor"
          fontWeight="600"
          :fontFamily="fontFamily"
        />
        <TitlesParagraph
          tag="p"
          :texts="policyData.changesParagraphs"
          :textColor="textColor"
          :fontWeight="fontWeight"
          :fontFamily="fontFamily"
        />
      </section>

    </article>
  </div>
</template>

<style scoped>
.privacy-container {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.privacy-content {
  max-width: 800px;
  width: 100%;
}

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
  margin-bottom: 15px;
}

:deep(.responsible-box) {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid var(--tertiary-color, #ccc);
  white-space: pre-line; /* Respeta los saltos de línea */
}

:deep(.list-items) {
  margin-left: 20px;
  position: relative;
}

:deep(.list-items::before) {
  content: '•';
  position: absolute;
  left: -20px;
  color: var(--tertiary-color, #333);
  font-weight: bold;
}
</style>