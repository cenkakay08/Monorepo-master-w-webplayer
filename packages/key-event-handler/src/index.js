/**
 * @file Entry point for package and manages all exports from package local to outside of the package.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import KeyBinder from './components/KeyBinder';
 * @import { keysReducer } from './redux/reducer';
 */
import KeyBinder from './components/KeyBinder';
import { keysReducer } from './redux/reducer';

export { KeyBinder, keysReducer };
