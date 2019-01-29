import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUserService } from '../app-user.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-2',
  templateUrl: './login-2.component.html',
  styleUrls: ['./login-2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private _appUser: AppUserService, private _router: Router) { }
  
  user = {};

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
