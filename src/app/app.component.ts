import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../app/services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links = [{
    name: 'Home',
    path: 'home'
  },
  {
    name: 'Explore',
    path: 'explore'
  }];
  activeLink = this.links[0].path;
  background = '';

  constructor(private movieSearch: MovieServiceService) {

  }
  ngOnInit() {
    this.movieSearch.fetchMovie('popular').subscribe(res => {
      console.log('result', res);
    });
  }

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

}
