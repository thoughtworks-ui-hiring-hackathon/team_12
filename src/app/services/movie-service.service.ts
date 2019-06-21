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

  constructor(private http: HttpClient) { }

  fetchMovie(type: string) {
    const url = `${this.apiUrl}/${type}?api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url).map(res =>
      this.parseResult(res));
  }

  private parseResult(response: { results: Movie[] }) {
    return response.results;
  }

}


