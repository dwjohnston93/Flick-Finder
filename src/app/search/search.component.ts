import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  dataSet: any; 
  
  constructor(private _movie: MovieDbService){}
  
  ngOnInit() {}
  
  // getMovieSearch(movie){
  //   this._movieDB.getData(movie).subscribe( data =>{
  //       this.dataSet = data
  //       console.log("service", this.dataSet)
  //   })

  // }

}
