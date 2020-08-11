import { combineReducers } from 'redux';
import { keysReducer } from 'key-event-handler';
import appReducer from './app';
import networkReducer from './network';

const rootReducer = combineReducers({
  app: appReducer,
  keys: keysReducer,
  network: networkReducer,
});

export default rootReducer;
