import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AppUserService {

  constructor(private _http: HttpClient, private _router: Router) { }
  
  notLoggedIn: boolean = true; 
  
  token = sessionStorage.getItem("token");
  movie = {}; 
  
  baseURL: string =  "http://localhost:3000/api/appUsers";
    
     registerUser(user){
       this.notLoggedIn = false;
       this._http.post(this.baseURL, user).subscribe( (data:any) => {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            this._router.navigate(['main']);
        });
     }
         
    loginURL: string = "/login";
    userInfo: any; 

     loginUser(user){
       this.notLoggedIn = false;
       this._http.post(this.baseURL + this.loginURL, user).subscribe( (data:any) => {
         sessionStorage.setItem('token', data.token);
         sessionStorage.setItem('userId', data.userId);
         this._router.navigate(['main']);
         this.userInfo = data; 
       });
     }
    
    logoutURL: string = "/logout?access_token+";
    
     logoutUser(user){
         this.notLoggedIn = true;
         return this._http.post(this.baseURL + this.logoutURL + this.token, user);
     }
    
     moviesURL: string = "/movies"; 
     

     saveMovie(movie){
         let userId = sessionStorage.getItem("userId"); 
         this.userInfo.userData.movies.push(movie);
         return this._http.post(this.baseURL + "/" + userId + this.moviesURL, movie)
     }
     
     
     currentUserInfo = "";
  
     getUserInfo(user){
        let currentUserId: string = sessionStorage.getItem('userId');
        return this._http.get(this.baseURL + "/" + currentUserId, user)
     }

     deleteFavMovie(movie){
         let currentUserId: string = sessionStorage.getItem('userId');
         let currentMovie: string = movie.id;
         let deleteURLRequest = (this.baseURL + "/" + currentUserId + "/movies/" +  currentMovie)
         return this._http.delete(deleteURLRequest).subscribe( data =>{
             let deleteIndex = this.userInfo.userData.movies.indexOf(movie);
             this.userInfo.userData.movies.splice(deleteIndex, 1); 
         })
     }
     
     
}
