import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from "../app-user.service"; 

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public _movie: MovieDbService, public _appUser: AppUserService) { }

  ngOnInit() {
  }
  
  deleteMovie(movie){
    this._appUser.deleteFavMovie(movie);
  }

}
