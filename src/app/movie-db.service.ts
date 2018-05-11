import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class MovieDbService {
    // example request: https://api.themoviedb.org/3/movie/76341?api_key={api_key}
    // Jack Reacher example: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    // Avatar movie search example: https://api.themoviedb.org/3/search/movie?api_key=e92710572331ea2ed1eb679386cb452c&query=Avatar

    url: string = "https://api.themoviedb.org/3/search/movie?"
    apiKey: string = "api_key=e92710572331ea2ed1eb679386cb452c"
    query: string = "&query="
    
  constructor(private _http: HttpClient) { }

    getData (movieSearch){
        console.log("url request", (this.url + this.apiKey + this.query + movieSearch));
        let urlRequest = this.url + this.apiKey + this.query + movieSearch; 
        return this._http.get(urlRequest);
        
    }


}
