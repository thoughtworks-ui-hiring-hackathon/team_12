import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from '../movie';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  apiUrl = 'https://api.themoviedb.org/3/movie';
  apiKey = '4c0ce895939930c4fb2ba54f686b6b87';
  imageurl = 'https://image.tmdb.org/t/p/w500/';
  genreAPI = 'https://api.themoviedb.org/3/genre/movie';

  constructor(private http: HttpClient) { }

   GetMovies(type: string) {
    const url = `${this.apiUrl}/${type}?api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url).map(res => res.results);
  }
 
    GetGenres(type:string){
    const url = `${this.genreAPI}/${type}?api_key=${this.apiKey}`;
    return this.http.get<any[]>(url).map(res=>res['genres']);
   }

   getTrendingMovie(){
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url).map(res => res.results);
   }

}


