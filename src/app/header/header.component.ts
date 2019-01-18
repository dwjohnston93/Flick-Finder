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

  movie: String;
  
  constructor(private _movie: MovieDbService, private _router: Router, private _appUser: AppUserService) { 
    
  }

  ngOnInit() {
  }

  getMovieSearch(movie){
    this._movie.movieSearch = movie;
        console.log("Header Comp currentSearch", this._movie.currentSearch); 
        this._router.navigate(['search']); 
        this._movie.getMovieData(); 
        this.movie = "";
    }
    
    currentUserInfo = "";
    
  getUserName(user){
    this._appUser.getUserInfo(user).subscribe( (data:any) => {
      this.currentUserInfo = data; 
    })
    console.log("currentUser data", this.currentUserInfo); 
  }

}
  
