import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service'; 
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _mainS: MainPageService) { }

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

}
