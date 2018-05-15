import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  dataSet: any; 
  
  constructor(private _movieDB: MovieDbService){}
  
  ngOnInit() {
  }
  
  getMovieSearch(movie){
    this._movieDB.getData(movie)
  }

}
