import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AppUserService {

  constructor(private _http: HttpClient, private _router: Router) { }
  
  notLoggedIn: boolean = true; 
  
  token = sessionStorage.getItem("token");
//   userID = sessionStorage.getItem("userID");
  movie = {}; 
  
    baseURL: string =  "http://daniel-q2-2018-phortonssf.c9users.io:8080/api/appUsers";
    
     registerUser(user){
       this.notLoggedIn = false;
       return this._http.post(this.baseURL, user)
         }
         
    loginURL: string = "/login";
    userInfo; 
    
     loginUser(user){
       this.notLoggedIn = false;
       this._http.post(this.baseURL + this.loginURL, user).subscribe( (data:any) => {
         sessionStorage.setItem('token', data.token);
         sessionStorage.setItem('userId', data.userId);
         this._router.navigate(['main']);
         this.userInfo = data; 
         console.log("subscribe data returned", data)
       });
     }
    
    logoutURL: string = "/logout?access_token+";
    
     logoutUser(user){
         this.notLoggedIn = true;
         console.log("logoutUser is working");
         return this._http.post(this.baseURL + this.logoutURL + this.token, user);
     }
     
     moviesURL: string = "/movies"; 
     

     saveMovie(movie){
         console.log("saveMovie is running");
         let userId = sessionStorage.getItem("userId"); 
         return this._http.post(this.baseURL + "/" + userId + this.moviesURL, movie)
     }
     
     
     currentUserInfo = "";
  
     getUserInfo(user){
        let currentUserId: string = sessionStorage.getItem('userId');
        return this._http.get(this.baseURL + "/" + currentUserId, user)
     }
     
}
