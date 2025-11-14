
import { ref } from 'vue';

const boxesDataCourse = ref([
  {
    title:    ['methodFeatures.featuresBox1Title'],
    subtitle: [
      `methodFeatures.featuresBox1Subtitle`,
    ],
    defaultIcon: '🔹', // Icono por defecto para esta caja
    texts:       [
      { text: 'methodFeatures.featuresBox1Item1' },
      { text: 'methodFeatures.featuresBox1Item2' },
      { text: 'methodFeatures.featuresBox1Item3' },
      { text: 'methodFeatures.featuresBox1Item4' },
    ],
  },
  // Caja 2: Usa otro icono por defecto
  {
    title:    ['methodFeatures.featuresBox2Title'],
    subtitle: [
      'methodFeatures.featuresBox2Subtitle',
    ],
    defaultIcon: '✔️', // Icono por defecto para esta caja
    texts:       [
      { text: 'methodFeatures.featuresBox2Item1' },
      { text: 'methodFeatures.featuresBox2Item2' },
      { text: 'methodFeatures.featuresBox2Item3' },
      { text: 'methodFeatures.featuresBox2Item4' },
      { text: 'methodFeatures.featuresBox2Item5' },
    ],
  },
  // Caja 3: Mezcla iconos por defecto y específicos
  {
    title:    ['methodFeatures.featuresBox3Title'],
    subtitle: [
      'methodFeatures.featuresBox3Subtitle',
    ],
    defaultIcon: '🔹', // Icono por defecto para esta caja
    texts:       [
      { text: 'methodFeatures.featuresBox3Item1' },
      { text: 'methodFeatures.featuresBox3Item2' },
      { text: 'methodFeatures.featuresBox3Item3' },
      { text: 'methodFeatures.featuresBox3Item4' },
    ],
  },
]);

export default boxesDataCourse;