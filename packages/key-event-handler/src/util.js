/**
 * @file Contains util methods for key-event-handler package.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import {KeyMap} from './keymaps';
 */
import KeyMap from './keymaps';

/**
 * This function gets the abstract name of pressed key that are defined in keymap files.
 *
 * @param {(string|number)} pKey - Pressed key code from related device (keyboard, android or apple tv remote or 3rd party device remote)
 * @return {string} Abstract name of the pressed key
 */
const GetAbstractKeyName = (pKey) => {
  const keys = Object.keys(KeyMap);
  keys.map((key) => {
    if (KeyMap[key] === pKey) {
      return key;
    }
    return null;
  });
};

export default GetAbstractKeyName;
