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
  userData: any = {}; 
  userInfo: any = {}; 

  baseURL: string =  "http://localhost:3000/api/appUsers";
    
    //post request to register new users
     registerUser(user){
       this.notLoggedIn = false;
       this._http.post(this.baseURL, user).subscribe( (data:any) => {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            this._router.navigate(['main']);
        });
     }
         
    loginURL: string = "/login";

    //post request to login a returning user
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
    
    //post request to log out user
     logoutUser(user){
         this.notLoggedIn = true;
         return this._http.post(this.baseURL + this.logoutURL + this.token, user);
     }
    
     moviesURL: string = "/movies"; 
     
     //post request to save a movie to a user's favorites
     saveMovie(movie){
         let userId = sessionStorage.getItem("userId"); 
         return this._http.post(this.baseURL + "/" + userId + this.moviesURL, movie).subscribe(saveMovie =>{
            this.userInfo.userData.movies.push(saveMovie);
            console.log("Saved movie:", movie); 
        })
     }
     
     
     currentUserInfo = "";
  
     getUserInfo(user){
        let currentUserId: string = sessionStorage.getItem('userId');
        return this._http.get(this.baseURL + "/" + currentUserId, user)
     }

     deleteFavMovie(movie){
         let currentUserId: string = sessionStorage.getItem('userId');
         let currentMovie: string = movie.id;
         console.log("movie:", movie); 
         console.log("currentMovie:", currentMovie);
         let deleteURLRequest = (this.baseURL + "/" + currentUserId + "/movies/" +  currentMovie)
         let deleteIndex = this.userInfo.userData.movies.indexOf(movie);
         this.userInfo.userData.movies.splice(deleteIndex, 1); 
         return this._http.delete(deleteURLRequest).subscribe( data =>{
            //  let deleteIndex = this.userInfo.userData.movies.indexOf(movie);
            //  this.userInfo.userData.movies.splice(deleteIndex, 1); 
         })
     }
     
     
}
