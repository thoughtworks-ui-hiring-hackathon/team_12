import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(private movieSearch: MovieServiceService) { }

  ngOnInit() {
    this.movieSearch.fetchMovie('popular').subscribe(response => {
      this.movies = response;
    });
  }
}
