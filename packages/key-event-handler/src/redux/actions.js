/**
 * @file This file contains reducer object of redux for keysReducer.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import { NAME } from '../constants';
 * @import { GetAbstractKeyName } from '../util';
 */
import { NAME } from '../constants';
import { GetAbstractKeyName } from '../util';

/** Action type INIT */
export const INIT = `${NAME}/INIT`;
/** Action type SET_KEY_EVENT */
export const SET_KEY_EVENT = `${NAME}/SET_KEY_EVENT`;
/** Action type REMOVE_KEY_EVENT */
export const REMOVE_KEY_EVENT = `${NAME}/REMOVE_KEY_EVENT`;
/** Action type ADD_LISTENER */
export const ADD_LISTENER = `${NAME}/ADD_LISTENER`;
/** Action type REMOVE_LISTENER */
export const REMOVE_LISTENER = `${NAME}/REMOVE_LISTENER`;

/**
 * Returns INIT type action json object to dispatch.
 * @returns {JSON} action json object
 */
export const init = () => {
  return { type: INIT };
};

/**
 * Takes keyEvent object and returns SET_KEY_EVENT type action object to dispatch.
 * @param {*} keyEvent
 * @returns {JSON} action json object
 */
export const setKeyEvent = (keyEvent) => {
  return {
    type: SET_KEY_EVENT,
    payload: {
      pressedKeyEvent: keyEvent,
      pressedKeyAbstractName: GetAbstractKeyName(keyEvent.keyCode),
    },
  };
};

/**
 * Returns REMOVE_KEY_EVENT type action json object to dispatch.
 * @returns {JSON} action json object
 */
export const removeKeyEvent = () => {
  return { type: REMOVE_KEY_EVENT };
};

/**
 * Returns ADD_LISTENER type action json object to dispatch.
 * @returns {JSON} action json object
 */
export const addListener = () => {
  return { type: ADD_LISTENER };
};

/**
 * Returns REMOVE_LISTENER type action json object to dispatch.
 * @returns {JSON} action json object
 */
export const removeListener = () => {
  return { type: REMOVE_LISTENER };
};
