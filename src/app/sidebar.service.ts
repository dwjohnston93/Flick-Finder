import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class SidebarService {

  constructor(private _http: HttpClient) { }

  sidebarURL: string = "https://api.themoviedb.org/3/genre/movie/list?api_key=e92710572331ea2ed1eb679386cb452c&language=en-US"; 
  
  getSidebarData(){
      console.log("sidebarURL request", (this.sidebarURL));
      let sidebarURLRequest = this.sidebarURL; 
      return this._http.get(sidebarURLRequest); 
  }
}
