import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUserService } from '../app-user.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _appUser: AppUserService, public _router: Router) { }
  
  user: any = {};

  ngOnInit() {
  }

  goToRegister(){
    this._router.navigate(['register']);
    this._appUser.error.message = ""; 
  }

  doLogin(){
    this._appUser.loginUser(this.user)
  }

}
