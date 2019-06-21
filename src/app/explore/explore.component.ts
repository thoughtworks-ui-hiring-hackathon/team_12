import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import {DataService} from '../shared/data.service';
import {Movie} from '../movie'
import {observable,Subject} from 'rxjs' 

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  results:Movie[];
  searchTerm$ = new Subject<string>();
  constructor(private movieService:MovieServiceService,private dataService:DataService) { 

    this.movieService.searchMovies(this.searchTerm$)
    .subscribe(results => {
      this.results = results.results;
    });
  }
  ngOnInit() {
  }
}



