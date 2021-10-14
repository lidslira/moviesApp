import {action} from 'typesafe-actions';
import {MoviesProps} from '~/dtos';
import {
  MoviesTypes,
  GetMoviesProps,
  GetMoviesSuccessProps,
  GetMoviesErrorProps,
} from './types';

export const getMoviesAction = (): GetMoviesProps =>
  action(MoviesTypes.GET_MOVIES);

export const getMoviesSuccessAction = (
  moviesList: MoviesProps,
): GetMoviesSuccessProps =>
  action(MoviesTypes.GET_MOVIES_SUCCESS, {moviesList});

export const getMoviesErrorAction = (): GetMoviesErrorProps =>
  action(MoviesTypes.GET_MOVIES_ERROR);
