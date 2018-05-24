import { Component, OnInit } from '@angular/core';
import { MovieDbService} from '../movie-db.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _movie: MovieDbService, private _router: Router) { }

  ngOnInit() {
  }

  // getResults(id) {
  //   this._movie.genreID = id;
  //   console.log('Movie Service Genre ID:', this._movie.genreID)
  //   this._router.navigate(['results'])
  //   this._movie.getMoviesByGenre()
  // }

  getMovieSearch(movie){
    this._movie.movieSearch = movie;
        console.log("Header Comp currentSearch", this._movie.currentSearch); 
        this._router.navigate(['search']);
        this._movie.getMovieData(); 
    }

}
  
