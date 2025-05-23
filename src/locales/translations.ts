import enHeader from './en/header';
import enMenu from './en/menu';
import enWhyLanguageTeam from './en/whyLanguageTeam';

import esHeader from './es/header';
import esMenu from './es/menu';
import esWhyLanguageTeam from './es/whyLanguageTeam';



type LangMessages = {
  menu: Record<keyof typeof enMenu, string>;
  header: Record<keyof typeof enHeader, string>;
  why: Record<keyof typeof enWhyLanguageTeam, string>;
};

export const messages: Record<string, LangMessages> = {
  en: {
    menu:   enMenu,
    header: enHeader,
    why:    enWhyLanguageTeam,
  },
  es: {
    menu:   esMenu,
    header: esHeader,
    why:    esWhyLanguageTeam,
  },
}; 