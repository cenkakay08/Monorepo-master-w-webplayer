import './i18n';
import React, { useState, useEffect } from 'react';
import I18n from 'i18n-js';
import useStorage from './services';
import { LOCALES } from './languages/index';
import translate from './translate';

const LocaleContext = React.createContext();

export const LocaleContextProvider = (props) => {
  const [locale, changeLocale] = useStorage('@language', LOCALES.ENGLISH);
  I18n.locale = locale.name;

  const _changeLocale = (locale) => {
    I18n.locale = locale.name;
    changeLocale(locale);
  };

  return (
    <LocaleContext.Provider
      value={{
        ...I18n,
        localeProvider: locale,
        getString: translate,
        changeLocale: _changeLocale,
      }}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
