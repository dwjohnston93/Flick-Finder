import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  dataSet: any; 
  
  constructor(private _movie: MovieDbService, private _appUser: AppUserService){
    this._movie.currentSearch = {};
  }
  
  ngOnInit() {}
  
  addMovie(movie){
    
    console.log(movie);
    
    let favMovie = {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      overview: movie.overview
    }
    
      this._appUser.saveMovie(favMovie).subscribe(saveMovie =>{
      console.log("addMovie", saveMovie)
        })
        
  }

}
