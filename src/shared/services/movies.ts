import {
  API_KEY,
  DETAILS_PATH,
  MOVIES_PATH,
  SEARCH_PATH,
} from '../constants/api';
import request from './request';

export const showMoviesList = async () => {
  try {
    const response = await request.get(MOVIES_PATH);
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
    const response = await request.get(DETAILS_PATH, '', id, API_KEY);
    return response;
  } catch {
    return null;
  }
};
