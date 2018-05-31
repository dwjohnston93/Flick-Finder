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
     
     
    //  getPopularData(){
    //     console.log("url request", (this.popularURL));
    //     let popularURLRequest = this.popularURL; 
    //     return this._http.get(popularURLRequest).subscribe( data =>{
    //     this.popularData = data
    //     console.log("popular log",  this.popularData); 
    //   });
    // }
    
    
    // http://daniel-q2-2018-phortonssf.c9users.io:8080/api/appUsers/5afce1aa912d74fa3be3e456/movies/5b0f7730a362c7b516d3858
    //http://daniel-q2-2018-phortonssf.c9users.io:8080/api/appUsers/5afce1aa912d74fa3be3e456/moviesundefined

     deleteFavMovie(movie){
         let currentUserId: string = sessionStorage.getItem('userId');
         let currentMovie: string = movie.id;
         let deleteURLRequest = (this.baseURL + "/" + currentUserId + "/movies/" +  currentMovie)
         console.log("movie.original_title", movie);
         return this._http.delete(deleteURLRequest).subscribe( data =>{
             let deleteIndex = this.userInfo.userData.movies.indexOf(movie);
             this.userInfo.userData.movies.splice(deleteIndex, 1); 
         })
     }
     
     
}
