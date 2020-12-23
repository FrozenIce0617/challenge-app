import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import * as apiService from '../../api';
import actions from './actions';

export function* getAllPlaces() {
  yield takeEvery(actions.getAllPlaces.type, function* () {
    try {
      const {
        data: { data },
      }: AxiosResponse<apiService.GetAllRecipes> = yield call(
        apiService.getAllPlaces,
      );
      yield put(actions.getAllPlacesSuccess(data));
    } catch (error) {
      yield put(actions.getAllPlacesFailed(error));
    }
  });
}

export function* savePlace() {
  yield takeEvery(actions.savePlace.type, function* ({
    payload,
  }: ReturnType<typeof actions.savePlace>) {
    try {
      const {
        data: { data },
      }: AxiosResponse<apiService.SavePlace> = yield call(
        apiService.savePlace,
        payload,
      );
      yield put(actions.savePlaceSuccess(data));
    } catch (error) {
      yield put(actions.savePlaceFailed(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getAllPlaces), fork(savePlace)]);
}
