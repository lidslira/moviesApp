import {Reducer} from 'redux';
import {MoviesTypes, MoviesState} from './types';

const INITIAL_STATE: MoviesState = {
  moviesList: [],
  loading: false,
  searchedMovies: [],
};

const reducer: Reducer<MoviesState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case MoviesTypes.SET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.SET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesList: payload.moviesList,
      };
    case MoviesTypes.SET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        moviesList: [],
      };
    case MoviesTypes.SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        searchedMovies: payload.searchedMovies,
      };
    case MoviesTypes.SEARCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        searchedMovies: [],
      };
    case MoviesTypes.CLEAN_LIST:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
