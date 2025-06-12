import enCategories from './en/categories';
import enHeader from './en/header';
import enMenu from './en/menu';
import enWhyLanguageTeam from './en/whyLanguageTeam';

import esCategories from './es/categories';
import esHeader from './es/header';
import esMenu from './es/menu';
import esWhyLanguageTeam from './es/whyLanguageTeam';



type LangMessages = {
  menu: Record<keyof typeof enMenu, string>;
  header: Record<keyof typeof enHeader, string>;
  why: Record<keyof typeof enWhyLanguageTeam, string>;
  categories: Record<keyof typeof enCategories, string>
};

export const messages: Record<string, LangMessages> = {
  en: {
    menu:       enMenu,
    header:     enHeader,
    why:        enWhyLanguageTeam,
    categories: enCategories,
  },
  es: {
    menu:       esMenu,
    header:     esHeader,
    why:        esWhyLanguageTeam,
    categories: esCategories
  },
}; 