import {Reducer} from 'redux';
import {UserTypes} from '~/modules/User/store/ducks/types';
import {MoviesTypes, MoviesState} from './types';

const INITIAL_STATE: MoviesState = {
  moviesList: [],
  loading: false,
  searchedMovies: [],
  moviesByGenre: [],
  creditsDetails: {
    id: '',
    cast: [{name: ''}],
    crew: [
      {
        known_for_department: '',
        name: '',
      },
    ],
  },
  movie: {
    poster_path: '',
    original_title: '',
    original_language: '',
    genres: [
      {
        id: 0,
        name: '',
      },
    ],
    id: '',
    release_date: '',
    runtime: 0,
    status: '',
    tagline: '',
    title: '',
    vote_average: 0,
    vote_count: 0,
    overview: '',
    homepage: '',
  },
};

const reducer: Reducer<MoviesState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case UserTypes.LOGOUT:
      return INITIAL_STATE;
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
    case MoviesTypes.GET_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: payload.movie,
      };
    case MoviesTypes.GET_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        movie: [],
      };
    case MoviesTypes.GET_MOVIES_BY_GENRE:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.GET_MOVIES_BY_GENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesByGenre: payload.moviesByGenre,
      };
    case MoviesTypes.GET_MOVIES_BY_GENRE_ERROR:
      return {
        ...state,
        loading: false,
        moviesByGenre: [],
      };
    case MoviesTypes.GET_MOVIE_CREDITS:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.GET_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        creditsDetails: payload.creditsDetails,
      };
    case MoviesTypes.GET_MOVIE_CREDITS_ERROR:
      return {
        ...state,
        loading: false,
        creditsDetails: [],
      };
    case MoviesTypes.CLEAN_LIST:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;
