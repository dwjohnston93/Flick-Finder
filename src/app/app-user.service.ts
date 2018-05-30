import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppUserService {

  constructor(private _http: HttpClient) { }
  
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
    
     loginUser(user){
       this.notLoggedIn = false;
       return this._http.post(this.baseURL + this.loginURL, user)
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
}
