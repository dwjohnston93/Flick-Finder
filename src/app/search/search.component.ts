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
      title: movie.original_title,
      poster: movie.poster_path,
      releaseDate: movie.release_date,
      synopsis: movie.overview
    }
    
      this._appUser.saveMovie(favMovie).subscribe(saveMovie =>{
      console.log("addMovie", saveMovie)
        })
        
  }
  
  // getMovieSearch(movie){
  //   this._movieDB.getData(movie).subscribe( data =>{
  //       this.dataSet = data
  //       console.log("service", this.dataSet)
  //   })

  // }

}
