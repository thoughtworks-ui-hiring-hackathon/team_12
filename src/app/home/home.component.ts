import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies = [
    {
      id: 1,
      name: 'Bahubali',
      type: 'Action- Adventure'
    }
  ];
  constructor(private movieSearch: MovieServiceService) { }

  ngOnInit() {
    this.movieSearch.fetchMovie('popular').subscribe(response => {
      this.movies = response;
    });
  }
}
