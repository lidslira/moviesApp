import {all, takeLatest, call, put} from 'redux-saga/effects';
import {
  movieDetails,
  moviesByGenre,
  searchMovies,
  showMoviesList,
} from '~/shared/services/movies';
import {
  getMovieErrorAction,
  getMoviesByGenreErrorAction,
  getMoviesByGenreSuccessAction,
  getMovieSuccessAction,
  searchMoviesErrorAction,
  searchMoviesSuccessAction,
  setMoviesErrorAction,
  setMoviesSuccessAction,
} from './actions';

import {
  GetMovieProps,
  GetMoviesByGenreProps,
  MoviesTypes,
  SearchMoviesProps,
} from './types';

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

function* getMovieSagas(action: GetMovieProps) {
  try {
    const response: ResponseGenerator = yield call(
      movieDetails,
      action.payload.id,
    );

    if (response.status >= 200 && response.status < 300) {
      yield put(getMovieSuccessAction(response.data.results));
    } else {
      yield put(getMovieErrorAction());
    }
  } catch {
    yield put(getMovieErrorAction());
  }
}

function* getMoviesByGenreSagas(action: GetMoviesByGenreProps) {
  try {
    const response: ResponseGenerator = yield call(
      moviesByGenre,
      action.payload.id,
    );

    if (response.status >= 200 && response.status < 300) {
      yield put(getMoviesByGenreSuccessAction(response.data.results));
    } else {
      yield put(getMoviesByGenreErrorAction());
    }
  } catch {
    yield put(getMoviesByGenreErrorAction());
  }
}
export default function* watchSaga() {
  yield all([
    takeLatest(MoviesTypes.SET_MOVIES, setMoviesSagas),
    takeLatest(MoviesTypes.SEARCH_MOVIES, searchMoviesSagas),
    takeLatest(MoviesTypes.GET_MOVIE, getMovieSagas),
    takeLatest(MoviesTypes.GET_MOVIES_BY_GENRE, getMoviesByGenreSagas),
  ]);
}
