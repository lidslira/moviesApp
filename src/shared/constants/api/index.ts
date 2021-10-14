export const API_KEY = 'api_key=e9dc00c9c53d87465925d6a3e2a5e143';
export const BASE_PATH = 'https://api.themoviedb.org/3';
export const MOVIES_PATH = `/discover/movie?sort_by=popularity.desc&${API_KEY}`;
export const SEARCH_PATH = `search/movie?${API_KEY}&query=`;
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

// example of api request:
// https://api.themoviedb.org/3/movie/550?api_key=e9dc00c9c53d87465925d6a3e2a5e143

// search
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

// DETAILS PATH: https://api.themoviedb.org/3/movie/343611?api_key={api_key}
