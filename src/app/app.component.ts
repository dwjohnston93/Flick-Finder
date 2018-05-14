import { Component } from '@angular/core';
import { MovieDbService } from './movie-db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // dataSet: any; 
  
  // constructor(private _movieDB: MovieDbService){}
  
  // getMovieSearch(movie){
  //   this._movieDB.getData(movie).subscribe( data => {
  //     this.dataSet = data
  //     console.log(this.dataSet)
  //   })
  // }
  
}
