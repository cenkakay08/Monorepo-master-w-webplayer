import { useContext } from 'react';
import LocaleContext from './LocaleContext';

const useTranslation = () => {
  return useContext(LocaleContext);
};

export default useTranslation;
