/**
 * @file Contains KeyPress hook for web.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import { useEffect } from "react";
 * @import { TVEventHandler } from "react-native";
 * @import { removeKeyEvent, setKeyEvent, addListener, removeListener } from '../actions';
 */
import { useEffect } from 'react';
import { TVEventHandler } from 'react-native';
import {
  removeKeyEvent,
  setKeyEvent,
  addListener,
  removeListener,
} from '../actions';

/**
 * Hook function for key press event for native.
 *
 * @return {string} - Pressed key event object { type: '...', code: '...', key: '...', keyCode: '...', ... }
 */
export const useKeyPress = (store) => {
  let tvEventHandler;

  const enableTVEventHandler = () => {
    tvEventHandler = new TVEventHandler();
    tvEventHandler.enable(this, (cmp, evt) => {
      // eventKeyAction is an integer value representing button press(key down) and release(key up). "key up" is 1, "key down" is 0.
      if (evt && evt.eventKeyAction === 0) {
        // 0 is key down event
        store.dispatch(
          setKeyEvent({
            type: 'keydown',
            code: '',
            key: evt.eventType,
            keyCode: evt.eventType,
          }),
        );
      } else if (evt && evt.eventKeyAction === 1) {
        // 1 is key up event
        store.dispatch(removeKeyEvent());
      } else if (evt && evt.eventKeyAction === -1) {
        // 'blur', 'focus' events as evt.eventType
        store.dispatch(
          setKeyEvent({
            type: '',
            code: '',
            key: evt.eventType,
            keyCode: evt.eventType,
          }),
        );
      }
    });
  };

  const disableTVEventHandler = () => {
    if (tvEventHandler) {
      tvEventHandler.disable();
    }
  };

  // Add event listeners
  useEffect(() => {
    if (!store.getState().keys.eventListenerAttached) {
      enableTVEventHandler();

      store.dispatch(addListener());
    }

    // Remove event listeners on cleanup
    return () => {
      if (store.getState().keys.eventListenerAttached) {
        disableTVEventHandler();

        store.dispatch(removeListener());
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return;
};
