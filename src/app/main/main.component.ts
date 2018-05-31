import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service'; 
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _mainS: MainPageService, private _appUser: AppUserService) { }

  popularData: any; 

  ngOnInit() {
    this.getMainPage();
  }

  getMainPage(){
      this._mainS.getPopularData().subscribe( data =>{
        this.popularData = data
        console.log("popular log",  this.popularData); 
      })
    }
    
  addMovie(movie){
    
  console.log(movie);
    
  let favMovie = {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      overview: movie.overview
    }
    
    this._appUser.saveMovie(favMovie).subscribe(saveMovie =>{
    console.log("addMovie", saveMovie)
      })
        
  }

}
