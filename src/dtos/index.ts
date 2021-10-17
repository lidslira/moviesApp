export interface GenresProps {
  id: number;
  name: string;
}

export interface MoviesProps {
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  poster_path: string;
  original_title: string;
  original_language: string;
  homepage: string;
  id: string;
  overview: string;
  release_date: string;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface CastProps {
  name: string;
}

export interface CrewProps {
  name: string;
}

export interface CreditsProps {
  id: string;
  cast: CastProps[];
  crew: CrewProps[];
}
