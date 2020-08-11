/**
 * @file File for store of key-event-handler package.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import { NAME } from './constants';
 */
import { NAME } from './constants';
import { keysStore } from '../../shared/src/setup';
import { AbstractKeyNames } from './abstractKeyNames';

/**
 * Wrapper object to use store getters and setters easily.
 *
 * @example
 * globalStore.getState()[NAME];	// getter method for getting store state values, NAME is global constant variable in constants.js file at the root directory of the package
 * globalStore.dispatch(action);	// setter method for updating store state values via actions
 */
export let globalStore = {
  dispatch: () => ({}),
  getState: () => {
    return { [NAME]: {} };
  },
};

/**
 * Function to update store with given store parameter.
 * @param {*} store
 */
export const updateStore = (store) => (globalStore = store);
/**
 * Function to get store.
 * @returns {*} keys store
 */
export const getStore = () => globalStore.getState()[NAME];
/**
 * Function to update store state
 * @param {JSON} action Json object with type and payload properties.
 */
export const dispatch = (action) => globalStore.dispatch(action);
/**
 * Function to get abstract name of the pressed key.
 * @returns {string} from AbstractKeyNames.js file
 */
export const getPressedKeyAbstractName = () =>
  globalStore.getState()[NAME].pressedKeyAbstractName;
