import './i18n';
import React from 'react';
import I18n from 'i18n-js';
import PropTypes from 'prop-types';
import useStorage from './services';
import LOCALES from './languages/index';
import translate from './translate';

const LocaleContext = React.createContext();

export const LocaleContextProvider = ({ children }) => {
  const [locale, changeLocale] = useStorage('@language', LOCALES.ENGLISH);
  I18n.locale = locale.name;

  const changeLocaleLang = (locales) => {
    I18n.locale = locales.name;
    changeLocale(locales);
  };
  const p = {
    ...I18n,
    localeProvider: locale,
    getString: translate,
    changeLocale: changeLocaleLang,
  };
  return <LocaleContext.Provider value={p}>{children}</LocaleContext.Provider>;
};
LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LocaleContext;
