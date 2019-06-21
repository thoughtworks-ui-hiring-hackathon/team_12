import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../app/services/movie-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie-app-scaffolding-angular';
  
  constructor(private movieSearch : MovieServiceService){

  }
  ngOnInit(){
    this.movieSearch.fetchMovie('popular').subscribe(res=>{
      console.log('result',res);
    })
  }
}
