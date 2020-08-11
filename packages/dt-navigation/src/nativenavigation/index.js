import { navigate, goBack, replace } from './react-navigation-context';

const useNativeNavigation = () => {
  return {
    navigate,
    replace,
    goBack,
  };
};

export { useNativeNavigation };
