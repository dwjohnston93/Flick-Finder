import { Component } from '@angular/core';
import { MovieDbService } from './movie-db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  results: any; 
  
  constructor(private _movieDB: MovieDbService){}
  
  getMovieSearch(movie){
    this._movieDB.getData(movie).subscribe( data => {
      this.results = data
      console.log(this.results)
    })
  }
  
}
