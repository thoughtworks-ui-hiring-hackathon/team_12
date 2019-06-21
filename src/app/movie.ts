export interface Movie {
  id: string;
  title: string;
  popularity: string;
  poster_path: string;
  overview: string;
  release_date: string;
  isFav: string;
  movieType:string;
  genre_ids:string;
  credits:credit
}

export interface credit{
   casts:cast[];
   crews:crew[];
}

export interface crew {
    credit_id:string;
    department:string;
    naame:string;
    profile_path:string;
}

export interface cast{

    cast_id:string;
    credit_id:string;
    name:string;
    profile_path:string;
}