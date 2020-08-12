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
import { isBlocked, block } from '../../block';
import { DEBOUNCE_TIME_FOR_LONG_PRESS } from '../../constants';

/**
 * Hook function for key press event for native.
 *
 * @return {string} - Pressed key event object { type: '...', code: '...', key: '...', keyCode: '...', ... }
 */
export const useKeyPress = (store) => {
  let tvEventHandler;

  let totalLongPressStartTime = 0;
  let longPressStartTime = 0;
  let listenForKeyUp = false;
  let keyEvent = null;
  let longPress = false;
  let debounceCount = 0;

  const enableTVEventHandler = () => {
    tvEventHandler = new TVEventHandler();
    tvEventHandler.enable(this, (cmp, evt) => {
      // eventKeyAction is an integer value representing button press(key down) and release(key up). "key up" is 1, "key down" is 0.
      if (evt && evt.eventKeyAction === 0) {
        // 0 is key down event
        keyEvent = {
          type: 'keydown',
          code: '',
          key: evt.eventType,
          keyCode: evt.eventType,
        };

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
                keyEvent,
                longPress,
                debounceCount,
                Date.now() - totalLongPressStartTime,
              ),
            );
          }
        }
      } else if (evt && evt.eventKeyAction === 1) {
        // 1 is key up event
        listenForKeyUp = false;
        debounceCount = 0;
        const totalLongPressedTime = Date.now() - totalLongPressStartTime;

        if (totalLongPressedTime < DEBOUNCE_TIME_FOR_LONG_PRESS) {
          store.dispatch(
            setKeyEvent(keyEvent, longPress, 0, totalLongPressedTime),
          );
        }
        store.dispatch(removeKeyEvent());
        longPress = false;
      } else if (evt && evt.eventKeyAction === -1) {
        // 'blur', 'focus' events as evt.eventType
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
};
