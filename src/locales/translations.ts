import enCategories from './en/categories';
import enFooter from './en/footer';
import enHeader from './en/header';
import enMenu from './en/menu';
import enWhyLanguageTeam from './en/whyLanguageTeam';

import esCategories from './es/categories';
import esFooter from './es/footer';
import esHeader from './es/header';
import esMenu from './es/menu';
import esWhyLanguageTeam from './es/whyLanguageTeam';

import itCategories from './it/categories';
import itFooter from './it/footer';
import itHeader from './it/header';
import itMenu from './it/menu';
import itWhyLanguageTeam from './it/whyLanguageTeam';

import deCategories from './de/categories';
import deFooter from './de/footer';
import deHeader from './de/header';
import deMenu from './de/menu';
import deWhyLanguageTeam from './de/whyLanguageTeam';

import ptCategories from './pt/categories';
import ptFooter from './pt/footer';
import ptHeader from './pt/header';
import ptMenu from './pt/menu';
import ptWhyLanguageTeam from './pt/whyLanguageTeam';

import frCategories from './fr/categories';
import frFooter from './fr/footer';
import frHeader from './fr/header';
import frMenu from './fr/menu';
import frWhyLanguageTeam from './fr/whyLanguageTeam';

type LangMessages = {
  menu: Record<keyof typeof enMenu, string>;
  header: Record<keyof typeof enHeader, string>;
  why: Record<keyof typeof enWhyLanguageTeam, string>;
  categories: Record<keyof typeof enCategories, string>
  footer: Record<keyof typeof enFooter, string>
};

export const messages: Record<string, LangMessages> = {
  en: {
    menu:       enMenu,
    header:     enHeader,
    why:        enWhyLanguageTeam,
    categories: enCategories,
    footer:     enFooter
  },
  es: {
    menu:       esMenu,
    header:     esHeader,
    why:        esWhyLanguageTeam,
    categories: esCategories,
    footer:     esFooter
  },
  it: {
    menu:       itMenu,
    header:     itHeader,
    why:        itWhyLanguageTeam,
    categories: itCategories,
    footer:     itFooter
  },
  de: {
    menu:       deMenu,
    header:     deHeader,
    why:        deWhyLanguageTeam,
    categories: deCategories,
    footer:     deFooter
  },
  pt: {
    menu:       ptMenu,
    header:     ptHeader,
    why:        ptWhyLanguageTeam,
    categories: ptCategories,
    footer:     ptFooter
  },
  fr: {
    menu:       frMenu,
    header:     frHeader,
    why:        frWhyLanguageTeam,
    categories: frCategories,
    footer:     frFooter
  },
}; 