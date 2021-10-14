import {Reducer} from 'redux';
import {MoviesTypes, MoviesState} from './types';

const INITIAL_STATE: MoviesState = {
  moviesList: [],
  loading: false,
};

const reducer: Reducer<MoviesState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case MoviesTypes.GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesList: payload.moviesList,
      };
    case MoviesTypes.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        moviesList: [],
      };
    default:
      return state;
  }
};

export default reducer;
