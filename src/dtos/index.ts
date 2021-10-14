export interface GenresProps {
  id: number;
  name: string;
}

export interface MoviesProps {
  adult: boolean;
  genres: GenresProps[];
  poster_path: string;
  original_title: string;
  original_language: string;
  id: number;
  imdb_id: string;
  release_date: string;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}