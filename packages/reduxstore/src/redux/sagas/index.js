import { all, fork, call } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import watchApp from './app';
import startChannel from './network';

/* ------------- Watchers ------------- */
export default function* root() {
  yield all([yield fork(watchApp), yield call(startChannel)]);
}
