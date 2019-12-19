import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AppUserService {

  constructor(private _http: HttpClient, private _router: Router) { }
  
  loggedIn: boolean = false; 
  
  token = sessionStorage.getItem("token");
  movie = {}; 
  userData: any = {}; 
  userInfo: any = {}; 
  error = {message: ''};

  baseURL: string =  "http://localhost:3000/api/appUsers";
    
    //post request to register new users
     registerUser(user){
       this._http.post(this.baseURL, user).subscribe( (data:any) => {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            this.loggedIn = true;
            this._router.navigate(['main']);
            this.error.message = ""; 
        }, err => {
            console.log("err:", err); 
            if (err.error.error.statusCode === 422) {
                this.error.message = 'User input is not valid'
                console.log('Error Message:', this.error.message)
            } 
          })
     }
         
    loginURL: string = "/login";

    //post request to login a returning user
     loginUser(user){
        this._http.post(this.baseURL + this.loginURL, user).subscribe( (data:any) => {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            this.loggedIn = true;
            this._router.navigate(['main']);
            this.userInfo = data; 
            this.error.message = ""; 
        }, err => {
            console.log("err:", err); 
            if (err.error.error.statusCode === 401) {
                this.error.message = 'User input is not valid';
            } 
            else if (err.error.error.statusCode === 400) {
                this.error.message = "Username or email is required"; 
            }
          })
    }
    
    logoutURL: string = "/logout?access_token+";
    
    //post request to log out user
     logoutUser(user){
         this.loggedIn = false;
         return this._http.post(this.baseURL + this.logoutURL + this.token, user);
     }
    
     moviesURL: string = "/movies"; 
    
     saveMovie(favMovie, result){
         console.log("movie:", result)
         let userId = sessionStorage.getItem("userId"); 
         let check = this.userInfo.userData.movies.filter(saved => {  
            return saved.overview === favMovie.overview
         });
         if (check.length === 1){
            result.message = "You have already favorited this movie"
         } 
         else {
            return this._http.post(this.baseURL + "/" + userId + this.moviesURL, favMovie)
            .subscribe(saveMovie =>{
                result.message = "You favorited this movie"
                this.userInfo.userData.movies.push(saveMovie);
            })
         }
         
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
         let deleteIndex = this.userInfo.userData.movies.indexOf(movie);
         this.userInfo.userData.movies.splice(deleteIndex, 1); 
         return this._http.delete(deleteURLRequest).subscribe( data =>{
         })
     }
     
     
}
