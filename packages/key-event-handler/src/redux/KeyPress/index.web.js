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

/**
 * Hook function for key press event for web.
 *
 * @return {string} - Pressed key event object { type: '...', code: '...', key: '...', keyCode: '...', ... }
 */
export const useKeyPress = (store) => {
  const downHandler = (event) => {
    store.dispatch(setKeyEvent(event));
  };

  const upHandler = () => {
    store.dispatch(removeKeyEvent());
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
