import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class MainPageService {

  constructor(private _http: HttpClient) { }
  
 // example popular request https://api.themoviedb.org/3/movie/popular?api_key=e92710572331ea2ed1eb679386cb452c&language=en-US&page=1
    
    popularURL: string = "https:api.themoviedb.org/3/movie/popular?api_key=e92710572331ea2ed1eb679386cb452c&language=en-US&page=1";
    
    getPopularData(){
        console.log("url request", (this.popularURL));
        let popularURLRequest = this.popularURL; 
        return this._http.get(popularURLRequest);
    }
         
         
    }
    

