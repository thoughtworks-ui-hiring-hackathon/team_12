import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { DataService } from '../shared/data.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  latestMovies: Movie[];
  trendingMovies: Movie[];
  mostWatchedMovies: Movie[];
  genres: any[];
  constructor(private movieSearch: MovieServiceService, private dataService: DataService) { }

  ngOnInit() {
    // keep listening genres list
    this.dataService.currentGenresList.subscribe(res => {
      this.genres = res;
    });

    // make a service call to retrieve latest movie list from TMDB
    this.movieSearch.GetMovies('now_playing').subscribe(response => {
      this.latestMovies = (response);
      this.retireveMovieType(this.latestMovies);
    });

    // make a service call to retrieve trending movie list from TMDB
    this.movieSearch.getTrendingMovie().subscribe(response => {
      this.trendingMovies = (response);
      this.retireveMovieType(this.trendingMovies);
    });

    // make a service call to retrieve popular movie list from TMDB
    this.movieSearch.GetMovies('popular').subscribe(response => {
      this.mostWatchedMovies = (response);
      this.retireveMovieType(this.mostWatchedMovies);
    });
  }

  // This method is bascailly to retreive movie type based on genres
  retireveMovieType(response: any) {
    return (
      response.map(x => {
        let movieType = '';
        x.genre_ids.forEach(id => {
          movieType = movieType + this.genres.filter(item => item.id === id)[0].name + ', ';
        });
        x.movieType = movieType.substring(0, movieType.length - 2);
      })
    );
  }


}
