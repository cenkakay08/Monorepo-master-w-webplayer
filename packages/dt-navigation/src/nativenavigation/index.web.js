import { useCallback } from 'react';
import history from './history';

const buildUrl = (pathname, params) => {
  const base = window.location.href;
  const url = new URL(pathname, base);

  const searchParams = new URLSearchParams(params);
  url.search = searchParams.toString();
  const newUrl = url.toString();

  const finalUrl = newUrl.replace(url.origin, '');

  return finalUrl;
};

const useNativeNavigation = () => {
  const { push, replace: historyReplace, goBack } = history;
  /**
   * Navigate current screem with given @param {Routes} to and pass @param {JSON} params
   */
  const navigate = useCallback((to, qsParams = {}) => {
    const path = buildUrl(to, qsParams);
    push(path);
  }, []);

  /**
   * Replace current screen with @param {Routes} to
   * Screens navigation data pass via @param {JSON} qsParams,
   */
  const replace = useCallback((to, qsParams = {}) => {
    const path = buildUrl(to, qsParams);
    historyReplace(path);
  }, []);

  return {
    navigate,
    replace,
    goBack,
  };
};
export default { useNativeNavigation };
