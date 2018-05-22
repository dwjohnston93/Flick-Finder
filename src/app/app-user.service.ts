import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppUserService {

  constructor(private _http: HttpClient) { }
  
    url: string =  "http://daniel-q2-2018-phortonssf.c9users.io:8080/api/appUsers";
    
     registerUser(user){
       return this._http.post(this.url, user)
         }
    
    
}