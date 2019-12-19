import { Component, OnInit } from '@angular/core';
import { MovieDbService} from '../movie-db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private _movie: MovieDbService, private _router: Router, private _appUser: AppUserService) { 
    
  }

  ngOnInit() {
  }

  query: string; 

  getMovieSearch(query){
    console.log("query:", query)
    // this._movie.movieSearch = movie;
        this._router.navigate(['main']); 
        this._movie.getMovieData(query); 
        this.query = "";
    }
}
  
