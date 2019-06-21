import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

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

   getMovieDetails(id:string){
     const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US&append_to_response=credits`
     return this.http.get<{ results: Movie[] }>(url).map(res => res);
   }

   getRelatedMovies(id:string){
     const url = ` https://api.themoviedb.org/3/movie/${id}/similar?api_key=<<${this.apiKey}>>&language=en-US&page=1`
   }

   getActorDetails(actor_id:string){
     const url = ` https://api.themoviedb.org/3/person/${actor_id}?api_key=${this.apiKey}&language=en-US`
   }
   
   searchMovies(serchQuery:Observable<string>){
     const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${serchQuery}&page=1&include_adult=false`
     return serchQuery.debounceTime(400)
     .distinctUntilChanged()
     .switchMap(term => this.http.get<{ results: Movie[] }>(url).map(res => res));
   }

}


