import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import * as apiService from '../../api';
import actions from './actions';

export function* getAllSessions() {
  yield takeEvery(actions.getAllSessions.type, function* () {
    try {
      const {
        data: { data },
      }: AxiosResponse<apiService.GetAllSession> = yield call(
        apiService.getAllSessions,
      );
      yield put(actions.getAllSessionsSuccess(data));
    } catch (error) {
      console.log(error);
      yield put(actions.getAllSessionsFailed(error));
    }
  });
}

export function* saveSession() {
  yield takeEvery(actions.saveSession.type, function* ({
    payload,
  }: ReturnType<typeof actions.saveSession>) {
    try {
      const {
        data: { data },
      }: AxiosResponse<apiService.SaveSession> = yield call(
        apiService.saveSession,
        payload,
      );
      yield put(actions.saveSessionSuccess(data));
    } catch (error) {
      console.log(error);
      yield put(actions.saveSessionFailed(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getAllSessions), fork(saveSession)]);
}
