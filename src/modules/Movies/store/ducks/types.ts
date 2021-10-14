import {Action} from 'redux';
import {MoviesProps} from '~/dtos';

export enum MoviesTypes {
  GET_MOVIES = '@movies/GET_MOVIES',
  GET_MOVIES_SUCCESS = '@movies/GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR = '@movies/GET_MOVIES_ERROR',
}

export interface MoviesState {
  moviesList: [];
  loading: boolean;
}

export interface GetMoviesProps extends Action {
  type: MoviesTypes.GET_MOVIES;
}

export interface GetMoviesSuccessProps extends Action {
  type: MoviesTypes.GET_MOVIES_SUCCESS;
  payload: {moviesList: MoviesProps};
}

export interface GetMoviesErrorProps extends Action {
  type: MoviesTypes.GET_MOVIES_ERROR;
}
