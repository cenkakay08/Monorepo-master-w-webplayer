import { DEBOUNCE_TIME_FOR_LONG_PRESS } from './constants';

let keysLock = false;

export const block = (timeout = DEBOUNCE_TIME_FOR_LONG_PRESS) => {
  keysLock = true;
  setTimeout(() => {
    keysLock = false;
  }, timeout);
};

export const isBlocked = () => {
  return keysLock;
};
