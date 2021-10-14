import {all, fork} from 'redux-saga/effects';
import movies from '~/modules/Movies/store/ducks/sagas';

export default function* rootSaga() {
  yield all([fork(movies)]);
}
