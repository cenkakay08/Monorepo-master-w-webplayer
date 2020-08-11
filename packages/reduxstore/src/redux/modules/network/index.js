/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions(
  {
    init: null,
    onlineS: ['status'],
    offlineS: ['status'],
  },
  { prefix: '@Network/' },
);

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  offline: false,
  online: false,
  isInitiated: true,
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
  [Types.INIT]: (state) => state,

  [Types.ONLINE_S]: (state) =>
    produce(state, (draft) => {
      draft.isInitiated = false;
      draft.online = true;
      draft.offline = false;
    }),

  [Types.OFFLINE_S]: (state) =>
    produce(state, (draft) => {
      draft.isInitiated = false;
      draft.offline = true;
      draft.online = false;
    }),
});
/* eslint-enable no-param-reassign */
