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

  constructor(private _appUser: AppUserService,  private _router: Router) { }

  user = {}; 

  ngOnInit() {}

  doRegister(){
    console.log('This registered user:', this.user)
    this._appUser.registerUser(this.user)
  }

}
