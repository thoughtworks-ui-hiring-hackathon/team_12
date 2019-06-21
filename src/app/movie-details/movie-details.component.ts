import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Crew } from '../movie';
import { MovieServiceService } from '../services/movie-service.service';
import { DIRECTOR_LABEL, RATINGS } from '../app.constant';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Movie;
  relatedMovies: Movie[];
  director: Crew;
  ratings = RATINGS;
  paramMovieId;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieServiceService) {
    this.paramMovieId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getMovieDetails();
    this.getRelatedMovies();
  }

  getMovieDetails() {
    this.movieService.getMovieDetails(this.paramMovieId).subscribe(response => {
      this.movieDetails = response;
      this.director = this.movieDetails.credits.crew ?
        this.movieDetails.credits.crew.find(crew => {
          return crew.department === DIRECTOR_LABEL;
        }) : null;
    });
  }

  getRelatedMovies() {
    this.movieService.getRelatedMovies(this.paramMovieId).subscribe(response => {
      this.relatedMovies = response;
    });
  }
}
