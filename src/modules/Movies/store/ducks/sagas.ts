import {all, takeLatest, call, put} from 'redux-saga/effects';
import {showMoviesList} from '~/shared/services/movies';
import {getMoviesErrorAction, getMoviesSuccessAction} from './actions';

import {MoviesTypes} from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getMoviesSagas() {
  try {
    const response: ResponseGenerator = yield call(showMoviesList);

    if (response.status >= 200 && response.status < 300) {
      yield put(getMoviesSuccessAction(response.data));
    } else {
      yield put(getMoviesErrorAction());
    }
  } catch {
    yield put(getMoviesErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(MoviesTypes.GET_MOVIES, getMoviesSagas)]);
}
