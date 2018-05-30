import { Component, OnInit } from '@angular/core';
import { MovieDbService} from '../movie-db.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  genreResults: number;
  type: string;
  genreDisplay: any;
  
  constructor(private _movie: MovieDbService, private _appUser: AppUserService) { 
    if(this._movie.genreID) {
      this.genreResults = this._movie.genreID;
      console.log("this.genreResults", this.genreResults);
    }
    this._movie.currentGenre = {};
  }

  ngOnInit() {
    console.log('Results ID', this.genreResults)
  }
  
  addMovie(movie){
    
    let favMovie = {
      title: "movie.original_title",
      poster: "https://image.tmdb.org/t/p/w300_and_h450_bestv2 + movie.poster_path",
      releaseDate: "movie.release_date",
      synopsis: "movie.overview"
    }
    
      this._appUser.saveMovie(favMovie).subscribe(saveMovie =>{
      console.log("addMovie", saveMovie)
        })
        
  }
  
    // displayGenre() {
    //   this._movie.getMoviesByGenre().subscribe( data =>{
    //     this.genreDisplay = data
    //     console.log("genreDisplay", this.genreDisplay); 
    //   })
    // }

}
