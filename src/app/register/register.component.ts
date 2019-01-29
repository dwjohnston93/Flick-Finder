import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUserService } from '../app-user.service'; 
import { Router, ActivatedRoute } from '@angular/router';
// import { userInfo } from 'os';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _appUser: AppUserService,  private _router: Router) { }

  userData = {movies: []};
  userInfo = 
  {
    userData: this.userData
  }


  ngOnInit() {}

  doRegister(){
    this._appUser.userInfo = this.userInfo; 
    this._appUser.registerUser(this.userData);
  }

  goToLogin(){
    this._router.navigate(['login-2']);
  }

}
