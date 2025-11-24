import { createI18n, type Composer, type I18n } from 'vue-i18n';
import enMessages from './en'; // Carga estática solo para el idioma base
import type { LangMessages } from './types';

// Lista de idiomas soportados para el menú de selección
export const supportedLocales = ['de', 'en', 'es', 'fr', 'it', 'pt'];

// Mapa para las importaciones dinámicas.
// Esto ayuda a que los empaquetadores como Vite/Webpack sepan qué archivos incluir.
const lazyLocaleMessages: Record<string, () => Promise<{ default: LangMessages }>> = {
  es: () => import('./es/index.ts'),
  de: () => import('./de/index.ts'),
  fr: () => import('./fr/index.ts'),
  it: () => import('./it/index.ts'),
  pt: () => import('./pt/index.ts'),
};

const i18n: I18n = createI18n({
  locale:          'en', // Idioma por defecto
  fallbackLocale:  'en',
  legacy:          false,
  globalInjection: true,
  // Carga solo los mensajes del idioma base al inicio
  messages:        {
    en: enMessages,
  },
});

/**
 * Carga y establece un nuevo idioma de forma perezosa.
 * @param {string} locale - El código del idioma a cargar (ej. "es").
 */
export async function loadLocaleMessages(locale: string) {
  const global = i18n.global as Composer;
  // Si el idioma ya está cargado, simplemente cámbialo
  if (global.availableLocales.includes(locale)) {
    global.locale.value = locale;
    return;
  }

  // Si el idioma está en nuestra lista de carga perezosa, impórtalo
  const loader = lazyLocaleMessages[locale];
  if (loader) {
    const messages = await loader();
    // Añade los mensajes al pool de i18n y establece el idioma
    global.setLocaleMessage(locale, messages.default);
    global.locale.value = locale;
  } else {
    console.warn(`[i18n] Locale '${locale}' not found.`);
  }
}

export default i18n;
