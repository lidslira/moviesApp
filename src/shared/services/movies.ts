import {MOVIES_PATH} from '../constants/api';
import request from './request';

export const showMoviesList = async () => {
  try {
    const response = await request.get(MOVIES_PATH);
    return response;
  } catch {
    return null;
  }
};
