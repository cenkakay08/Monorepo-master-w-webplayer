import I18n from 'i18n-js';
import LOCALES from './languages/index';
import LangEn from './languages/eng.json';
import LangTr from './languages/tr.json';

// default locale
I18n.defaultLocale = LOCALES.ENGLISH.name;

// Enable fallbacks  to `en`
I18n.fallbacks = true;

// current locale
I18n.locale = LOCALES.ENGLISH.name;

I18n.translations = {
  en: LangEn,
  tr: LangTr,
};
