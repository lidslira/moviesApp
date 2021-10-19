import {action} from 'typesafe-actions';
import {CreditsProps, MoviesProps} from '~/dtos';
import {
  MoviesTypes,
  SetMoviesProps,
  SetMoviesSuccessProps,
  SetMoviesErrorProps,
  SearchMoviesProps,
  SearchMoviesSuccessProps,
  SearchMoviesErrorProps,
  CleanListProps,
  GetMovieProps,
  GetMovieSuccessProps,
  GetMovieErrorProps,
  GetMoviesByGenreProps,
  GetMoviesByGenreSuccessProps,
  GetMoviesByGenreErrorProps,
  GetMovieCreditsProps,
  GetMovieCreditsErrorProps,
  GetMovieCreditsSuccessProps,
} from './types';

export const setMoviesAction = (page: number): SetMoviesProps =>
  action(MoviesTypes.SET_MOVIES, {page});

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

export const getMovieAction = (id: string): GetMovieProps =>
  action(MoviesTypes.GET_MOVIE, {id});

export const getMovieSuccessAction = (
  movie: MoviesProps,
): GetMovieSuccessProps => action(MoviesTypes.GET_MOVIE_SUCCESS, {movie});

export const getMovieErrorAction = (): GetMovieErrorProps =>
  action(MoviesTypes.GET_MOVIE_ERROR);

export const getMoviesByGenreAction = (id: string): GetMoviesByGenreProps =>
  action(MoviesTypes.GET_MOVIES_BY_GENRE, {id});

export const getMoviesByGenreSuccessAction = (
  moviesByGenre: MoviesProps,
): GetMoviesByGenreSuccessProps =>
  action(MoviesTypes.GET_MOVIES_BY_GENRE_SUCCESS, {moviesByGenre});

export const getMoviesByGenreErrorAction = (): GetMoviesByGenreErrorProps =>
  action(MoviesTypes.GET_MOVIES_BY_GENRE_ERROR);

export const getMovieCreditsAction = (id: string): GetMovieCreditsProps =>
  action(MoviesTypes.GET_MOVIE_CREDITS, {id});

export const getMovieCreditsSuccessAction = (
  creditsDetails: CreditsProps,
): GetMovieCreditsSuccessProps =>
  action(MoviesTypes.GET_MOVIE_CREDITS_SUCCESS, {creditsDetails});

export const getMovieCreditsErrorAction = (): GetMovieCreditsErrorProps =>
  action(MoviesTypes.GET_MOVIE_CREDITS_ERROR);

export const cleanListAction = (): CleanListProps =>
  action(MoviesTypes.CLEAN_LIST);
