import {all, takeLatest, call, put} from 'redux-saga/effects';
import {searchMovies, showMoviesList} from '~/shared/services/movies';
import {
  searchMoviesErrorAction,
  searchMoviesSuccessAction,
  setMoviesErrorAction,
  setMoviesSuccessAction,
} from './actions';

import {MoviesTypes, SearchMoviesProps} from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* setMoviesSagas() {
  try {
    const response: ResponseGenerator = yield call(showMoviesList);

    if (response.status >= 200 && response.status < 300) {
      yield put(setMoviesSuccessAction(response.data.results));
    } else {
      yield put(setMoviesErrorAction());
    }
  } catch {
    yield put(setMoviesErrorAction());
  }
}

function* searchMoviesSagas(action: SearchMoviesProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchMovies,
      action.payload.text,
    );
    if (response.status >= 200 && response.status < 300) {
      yield put(searchMoviesSuccessAction(response.data.results));
    } else {
      yield put(searchMoviesErrorAction());
    }
  } catch {
    yield put(searchMoviesErrorAction());
  }
}
export default function* watchSaga() {
  yield all([
    takeLatest(MoviesTypes.SET_MOVIES, setMoviesSagas),
    takeLatest(MoviesTypes.SEARCH_MOVIES, searchMoviesSagas),
  ]);
}
