import { all } from 'redux-saga/effects';

import placeSagas from './place/saga';
import sessionSagas from './session/saga';

export default function* rootSaga() {
  yield all([placeSagas(), sessionSagas()]);
}
