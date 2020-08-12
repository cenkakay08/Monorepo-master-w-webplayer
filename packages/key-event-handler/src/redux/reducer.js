/**
 * @file This file contains reducer object of redux for keysReducer.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import { INIT, SET_KEY_EVENT, REMOVE_KEY_EVENT, ADD_LISTENER, REMOVE_LISTENER} from './actions';
 */
import {
  INIT,
  SET_KEY_EVENT,
  REMOVE_KEY_EVENT,
  ADD_LISTENER,
  REMOVE_LISTENER,
} from './actions';

/**
 * Initial state for reducer.
 */
export const initialKeyState = {
  pressedKeyEvent: '',
  pressedKeyAbstractName: '',
  eventListenerAttached: false,
  longPress: false,
  debounceCount: 0,
  longPressTime: 0,
};

/**
 * Reducer object of keys, triggers when store.dispatch function is called
 * and performs specific actions according to type property of action json object that passed with dispatch function.
 * @param {*} state
 * @param {JSON} action
 */
export const keysReducer = (state = initialKeyState, action) => {
  switch (action.type) {
    case INIT:
      return state;
    case SET_KEY_EVENT:
      return {
        ...state,
        pressedKeyEvent: action.payload.pressedKeyEvent,
        pressedKeyAbstractName: action.payload.pressedKeyAbstractName,
        longPress: action.payload.longPress,
        debounceCount: action.payload.debounceCount,
        longPressTime: action.payload.longPressTime,
      };
    case REMOVE_KEY_EVENT:
      return {
        ...state,
        pressedKeyEvent: '',
        pressedKeyAbstractName: '',
        longPress: false,
        debounceCount: 0,
        longPressTime: 0,
      };
    case ADD_LISTENER:
      return { ...state, eventListenerAttached: true };
    case REMOVE_LISTENER:
      return { ...state, eventListenerAttached: false };

    default:
      return state;
  }
};
