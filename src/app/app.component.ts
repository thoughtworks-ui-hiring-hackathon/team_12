import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/shared/data.service';
import { MovieServiceService } from '../app/services/movie-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  constructor(private dataService: DataService,private movieSearch:MovieServiceService) {

  }
  
  ngOnInit() {
    this.movieSearch.GetGenres('list').subscribe(res => {
     this.dataService.SetGenresList(res);
    });

    this.movieSearch.getMovieDetails('320288').subscribe(res => {
      console.log('movie detail',res);
     });
  }

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

}
