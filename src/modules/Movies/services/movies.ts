import {
  API_KEY,
  CREDITS_PATH,
  DETAILS_PATH,
  GENRES_PATH,
  MOVIES_PATH,
  SEARCH_PATH,
} from '../constants/api';
import request from './request';

export const showMoviesList = async (page: number) => {
  try {
    const response = await request.get(MOVIES_PATH, '', `&page=${page}`);
    return response;
  } catch {
    return null;
  }
};

export const searchMovies = async (text: string) => {
  try {
    const response = await request.get(SEARCH_PATH, {text});
    return response;
  } catch {
    return null;
  }
};

export const movieDetails = async (id: string) => {
  try {
    const response = await request.get(DETAILS_PATH, '', id, '', API_KEY);
    return response;
  } catch {
    return null;
  }
};

export const moviesByGenre = async (id: string) => {
  try {
    const response = await request.get(GENRES_PATH, '', id);
    return response;
  } catch {
    return null;
  }
};

export const movieCreditsDetails = async (id: string) => {
  try {
    const response = await request.get(DETAILS_PATH, '', id, CREDITS_PATH);
    return response;
  } catch {
    return null;
  }
};
