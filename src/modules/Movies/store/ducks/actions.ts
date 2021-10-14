import {action} from 'typesafe-actions';
import {MoviesProps} from '~/dtos';
import {
  MoviesTypes,
  SetMoviesProps,
  SetMoviesSuccessProps,
  SetMoviesErrorProps,
  SearchMoviesProps,
  SearchMoviesSuccessProps,
  SearchMoviesErrorProps,
} from './types';

export const setMoviesAction = (): SetMoviesProps =>
  action(MoviesTypes.SET_MOVIES);

export const setMoviesSuccessAction = (
  moviesList: MoviesProps,
): SetMoviesSuccessProps =>
  action(MoviesTypes.SET_MOVIES_SUCCESS, {moviesList});

export const setMoviesErrorAction = (): SetMoviesErrorProps =>
  action(MoviesTypes.SET_MOVIES_ERROR);

export const searchMoviesAction = (text: string): SearchMoviesProps =>
  action(MoviesTypes.SEARCH_MOVIES, {text});

export const searchMoviesSuccessAction = (
  searchedMovies: MoviesProps,
): SearchMoviesSuccessProps =>
  action(MoviesTypes.SEARCH_MOVIES_SUCCESS, {searchedMovies});

export const searchMoviesErrorAction = (): SearchMoviesErrorProps =>
  action(MoviesTypes.SEARCH_MOVIES_ERROR);
