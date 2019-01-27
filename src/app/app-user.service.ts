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

    //  0:
    //  id: "5c4cf490b0292d34184b53b5"
    //  original_title: "Bumblebee"
    //  overview: "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug."
    //  poster_path: "/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg"
    //  release_date: "2018-12-15"
    //  userId: "5c4013172d9f051358078fff"
    //  __proto__: Object
    //  1: {original_title: "Aquaman", poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg", release_date: "2018-12-07", overview: "Arthur Curry learns that he is the heir to the und…rd to lead his people and be a hero to the world.", id: "5c4cf492b0292d34184b53b6", …}
    //  2: {original_title: "Aquaman", poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg", release_date: "2018-12-07", overview: "Arthur Curry learns that he is the heir to the und…rd to lead his people and be a hero to the world.", id: "5c4cf492b0292d34184b53b7", …}
    //  3: {original_title: "Bohemian Rhapsody", poster_path: "/gbmkFWdtihe1VfydTDsieQ6VfGL.jpg", release_date: "2018-10-24", overview: "Singer Freddie Mercury, guitarist Brian May, drumm…ep the band together amid the success and excess.", id: "5c4cf492b0292d34184b53b8", …}
    //  4: {original_title: "Bumblebee", poster_path: "/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg", release_date: "2018-12-15", overview: "On the run in the year 1987, Bumblebee finds refug…quickly learns this is no ordinary yellow VW bug.", id: "5c4cf52cb0292d34184b53b9", …}
    //  5: {original_title: "Aquaman", poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg", release_date: "2018-12-07", overview: "Arthur Curry learns that he is the heir to the und…rd to lead his people and be a hero to the world.", id: "5c4cf534b0292d34184b53ba", …}
    //  6: {original_title: "Bumblebee", poster_path: "/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg", release_date: "2018-12-15", overview: "On the run in the year 1987, Bumblebee finds refug…quickly learns this is no ordinary yellow VW bug.", id: "5c4cf54ab0292d34184b53bb", …}
    //  length: 7

     saveMovie(movie){
         let userId = sessionStorage.getItem("userId"); 
         console.log(this.userInfo.userData.movies);
         let check = this.userInfo.userData.movies.filter(saved => { 
            console.log("movie:", movie);
            console.log("saved.id:", saved.overview);
            console.log("movie.id:", movie.overview); 
            return saved.overview === movie.overview
         });
         console.log("check:", check);
         if (check.length === 1){
            return
         } 
         else {
            return this._http.post(this.baseURL + "/" + userId + this.moviesURL, movie)
            .subscribe(saveMovie =>{
                this.userInfo.userData.movies.push(saveMovie);
                console.log("Saved movie:", movie); 
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
