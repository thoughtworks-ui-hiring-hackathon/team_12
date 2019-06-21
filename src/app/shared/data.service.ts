import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private genresListSource = new BehaviorSubject([]);
  currentGenresList = this.genresListSource.asObservable();

  constructor() { }

   SetGenresList(genres: []) {
    this.genresListSource.next(genres)
  }
}
