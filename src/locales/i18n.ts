// import  eng from './eng';
import { createI18n } from 'vue-i18n';
import eng from './eng.json';
import es from './es.json'

export default createI18n({
  locale:          'eng',
  fallbackLocale:  'eng',
  legacy:          false,
  globalInjection: true,
  messages:        { eng, es }
})
