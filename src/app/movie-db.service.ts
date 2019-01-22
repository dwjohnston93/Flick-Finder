import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class MovieDbService {
    
  constructor(private _http: HttpClient) { }
  
  api_key: string = "e92710572331ea2ed1eb679386cb452c"; 
  popularURL: string = `https:api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=1`;
  popularData: any;
  
    getPopularData(){
        let popularURLRequest = this.popularURL; 
        return this._http.get(popularURLRequest).subscribe( data =>{
        this.popularData = data
      });
    }
  
  sidebarURL: string = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=en-US`; 
  movieURL: string = `https://api.themoviedb.org/3/search/company?api_key=${this.api_key}&query=`;
  genreData:any;
  results: any;
  
  getSidebarData(){
      let sidebarURLRequest = this.sidebarURL; 
      return this._http.get(sidebarURLRequest).subscribe( data =>{
        this.genreData = data;
    }); 
  }
  
  getGenre(){}
  
  genreMovieURL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`
  currentGenre: any;
  genreID: number;
  genreName: string; 

  
  getMoviesByGenre(){
      let genreURLRequest = this.genreMovieURL + this.genreID; 
      this._http.get(genreURLRequest).subscribe( data => {
          this.currentGenre = data
      })
  }
  
  url: string = "https://api.themoviedb.org/3/search/movie?";
  // apiKey: string = "api_key=e92710572331ea2ed1eb679386cb452c";
  query: string = "&query=";
   
    movieSearch: any; 
    currentSearch: any;
    
  getMovieData(){
    let urlRequest = this.url + this.api_key + this.query + this.movieSearch; 
    this._http.get(urlRequest).subscribe( data =>{
        this.currentSearch = data
        })
        
  }
        
}


