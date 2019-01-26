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

  constructor(private _movie: MovieDbService, private _appUser: AppUserService) { }

  ngOnInit() {
  }
  
  deleteMovie(movie){
    console.log(movie)
    this._appUser.deleteFavMovie(movie);
  }

}
