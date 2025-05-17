import { createI18n } from 'vue-i18n';
import { messages }from './translations';

export default createI18n({
  locale:          'en',
  fallbackLocale:  'en',
  legacy:          false,
  globalInjection: true,
  messages:        messages
})
