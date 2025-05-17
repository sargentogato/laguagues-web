import enHeader from './en/header.json';
import enMenu from './en/menu.json';

import esHeader from './es/header.json';
import esMenu from './es/menu.json';


type LangMessages = {
  menu: typeof enMenu,
  header: typeof enHeader
}

export const messages: Record<string, LangMessages > = { 
  en: {
    menu:   enMenu,
    header: enHeader
  },
  es: {
    menu:   esMenu,
    header: esHeader,
  }
} 