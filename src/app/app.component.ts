import { Component, OnInit } from '@angular/core';
import { MovieServiceService} from '../app/services/movie-service.service'
import { DataService } from '../app/shared/data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie-app-scaffolding-angular';
  
  constructor(private movieSearch : MovieServiceService,private dataService:DataService){

  }
  ngOnInit(){
    this.movieSearch.fetchMovie('popular').subscribe(res=>{
      console.log('result',res);
    })
    
    this.movieSearch.GetGenres('list').subscribe(res=>{
      this.dataService.SetGenresList(res);
    })
  }
}
