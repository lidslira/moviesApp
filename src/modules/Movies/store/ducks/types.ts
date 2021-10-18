import {Action} from 'redux';
import {CreditsProps, MoviesProps} from '~/dtos';

export enum MoviesTypes {
  SET_MOVIES = '@movies/SET_MOVIES',
  SET_MOVIES_SUCCESS = '@movies/SET_MOVIES_SUCCESS',
  SET_MOVIES_ERROR = '@movies/SET_MOVIES_ERROR',

  SEARCH_MOVIES = '@movies/SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = '@movies/SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_ERROR = '@movies/SEARCH_MOVIES_ERROR',

  GET_MOVIE = '@movies/GET_MOVIE',
  GET_MOVIE_SUCCESS = '@movies/GET_MOVIE_SUCCESS',
  GET_MOVIE_ERROR = '@movies/GET_MOVIE_ERROR',

  GET_MOVIE_CREDITS = '@cast/GET_MOVIE_CREDITS',
  GET_MOVIE_CREDITS_SUCCESS = '@cast/GET_MOVIE_CREDITS_SUCCESS',
  GET_MOVIE_CREDITS_ERROR = '@cast/GET_MOVIE_CREDITS_ERROR',

  GET_MOVIES_BY_GENRE = '@genres/GET_MOVIE_BY_GENRES',
  GET_MOVIES_BY_GENRE_SUCCESS = '@genres/GET_MOVIES_BY_GENRE_SUCCESS',
  GET_MOVIES_BY_GENRE_ERROR = '@genres/GET_MOVIES_BY_GENRE_ERROR',

  CLEAN_LIST = '@movies/CLEAN_LIST',
}

export interface MoviesState {
  moviesList: [];
  loading: boolean;
  searchedMovies: [];
  movie: MoviesProps;
  moviesByGenre: [];
  creditsDetails: CreditsProps;
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

export interface GetMovieProps extends Action {
  type: MoviesTypes.GET_MOVIE;
  payload: {id: string};
}

export interface GetMovieSuccessProps extends Action {
  type: MoviesTypes.GET_MOVIE_SUCCESS;
  payload: {movie: MoviesProps};
}

export interface GetMovieErrorProps extends Action {
  type: MoviesTypes.GET_MOVIE_ERROR;
}

export interface GetMoviesByGenreProps extends Action {
  type: MoviesTypes.GET_MOVIES_BY_GENRE;
  payload: {id: string};
}

export interface GetMoviesByGenreSuccessProps extends Action {
  type: MoviesTypes.GET_MOVIES_BY_GENRE_SUCCESS;
  payload: {moviesByGenre: MoviesProps};
}

export interface GetMoviesByGenreErrorProps extends Action {
  type: MoviesTypes.GET_MOVIES_BY_GENRE_ERROR;
}

export interface GetMovieCreditsProps extends Action {
  type: MoviesTypes.GET_MOVIE_CREDITS;
  payload: {id: string};
}

export interface GetMovieCreditsSuccessProps extends Action {
  type: MoviesTypes.GET_MOVIE_CREDITS_SUCCESS;
  payload: {creditsDetails: CreditsProps};
}

export interface GetMovieCreditsErrorProps extends Action {
  type: MoviesTypes.GET_MOVIE_CREDITS_ERROR;
}

export interface CleanListProps extends Action {
  type: MoviesTypes.CLEAN_LIST;
}
