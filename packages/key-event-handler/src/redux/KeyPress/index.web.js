/**
 * @file Contains KeyPress hook for web.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import { useEffect } from 'react';
 * @import { removeKeyEvent, setKeyEvent, addListener, removeListener } from '../actions';
 */
import { useEffect } from 'react';
import {
  removeKeyEvent,
  setKeyEvent,
  addListener,
  removeListener,
} from '../actions';
import { DEBOUNCE_TIME_FOR_LONG_PRESS } from '../../constants';
import { isBlocked, block } from '../../block';

/**
 * Hook function for key press event for web.
 *
 * @return {string} - Pressed key event object { type: '...', code: '...', key: '...', keyCode: '...', ... }
 */
export const useKeyPress = (store) => {
  let totalLongPressStartTime = 0;
  let longPressStartTime = 0;
  let listenForKeyUp = false;
  let keyEvent = null;
  let longPress = false;
  let debounceCount = 0;

  const downHandler = (event) => {
    keyEvent = event;
    if (!listenForKeyUp) {
      // started pressing
      totalLongPressStartTime = Date.now();
      longPressStartTime = Date.now();
      listenForKeyUp = true;
    } else if (!isBlocked()) {
      // still pressing
      longPress = true;
      block();
      if (Date.now() - longPressStartTime >= DEBOUNCE_TIME_FOR_LONG_PRESS) {
        longPressStartTime = 0;
        debounceCount += 1;
        store.dispatch(
          setKeyEvent(
            event,
            longPress,
            debounceCount,
            Date.now() - totalLongPressStartTime,
          ),
        );
      }
    }
  };

  const upHandler = () => {
    listenForKeyUp = false;
    debounceCount = 0;
    const totalLongPressedTime = Date.now() - totalLongPressStartTime;

    if (totalLongPressedTime < DEBOUNCE_TIME_FOR_LONG_PRESS) {
      store.dispatch(setKeyEvent(keyEvent, longPress, 0, totalLongPressedTime));
    }
    store.dispatch(removeKeyEvent());
    longPress = false;
  };

  // Add event listeners
  useEffect(() => {
    if (!store.getState().keys.eventListenerAttached) {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);

      store.dispatch(addListener());
    }

    // Remove event listeners on cleanup
    return () => {
      if (store.getState().keys.eventListenerAttached) {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);

        store.dispatch(removeListener());
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
};
