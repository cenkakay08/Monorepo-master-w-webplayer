import { combineReducers } from 'redux';
import appReducer from './app';
import { keysReducer } from 'key-event-handler';
import networkReducer from './network';

const rootReducer = combineReducers({
  app: appReducer,
  keys: keysReducer,
  network: networkReducer,
});

export default rootReducer;
