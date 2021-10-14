import {Action} from 'redux';
import {MoviesProps} from '~/dtos';

export enum MoviesTypes {
  SET_MOVIES = '@movies/SET_MOVIES',
  SET_MOVIES_SUCCESS = '@movies/SET_MOVIES_SUCCESS',
  SET_MOVIES_ERROR = '@movies/SET_MOVIES_ERROR',

  SEARCH_MOVIES = '@movies/SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = '@movies/SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_ERROR = '@movies/SEARCH_MOVIES_ERROR',
}

export interface MoviesState {
  moviesList: [];
  loading: boolean;
  searchedMovies: [];
}

export interface SetMoviesProps extends Action {
  type: MoviesTypes.SET_MOVIES;
}

export interface SetMoviesSuccessProps extends Action {
  type: MoviesTypes.SET_MOVIES_SUCCESS;
  payload: {moviesList: MoviesProps};
}

export interface SetMoviesErrorProps extends Action {
  type: MoviesTypes.SET_MOVIES_ERROR;
}

export interface SearchMoviesProps extends Action {
  type: MoviesTypes.SEARCH_MOVIES;
  payload: {text: string};
}

export interface SearchMoviesSuccessProps extends Action {
  type: MoviesTypes.SEARCH_MOVIES_SUCCESS;
  payload: {searchedMovies: MoviesProps};
}

export interface SearchMoviesErrorProps extends Action {
  type: MoviesTypes.SEARCH_MOVIES_ERROR;
}
