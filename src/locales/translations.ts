import enMenu from './en/menu.json';
import esMenu from './es/menu.json';

type LangMessages = {
  menu: typeof enMenu
}

export const messages: Record<string, LangMessages > = { 
  en: {
    menu: enMenu
  },
  es: {
    menu: esMenu
  }
} 