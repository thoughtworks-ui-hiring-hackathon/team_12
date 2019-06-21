import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { RATINGS } from '../app.constant';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  ratings = RATINGS;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/details/' + this.movie.id]).then(() => {
      console.log('navigated to movie details');
    });
  }


}
