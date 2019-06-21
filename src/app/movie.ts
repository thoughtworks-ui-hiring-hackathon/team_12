export interface Movie {
  id: string;
  title: string;
  popularity: string;
  poster_path: string;
  overview: string;
  release_date: string;
  isFav: string;
  credits: Credit;
  movieType: string;
  genres: string;
}

export interface Credit {
  cast: Cast[];
  crew: Crew[];
}

export interface Crew {
  credit_id: string;
  department: string;
  name: string;
  profile_path: string;
}

export interface Cast {
  cast_id: string;
  credit_id: string;
  name: string;
  profile_path: string;
}
