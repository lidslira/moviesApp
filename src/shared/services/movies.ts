import {MOVIES_PATH, SEARCH_PATH} from '../constants/api';
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
