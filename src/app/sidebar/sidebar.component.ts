import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { MovieDbService } from '../movie-db.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _sidebar: SidebarService, private _movie: MovieDbService, private _router: Router) { }

  genreData: any;

  results: any;

  ngOnInit() {
    this.getGenres(); 
  }

  getGenres(){
    this._movie.getSidebarData().subscribe( data =>{
      this.genreData = data;
      console.log("sidebar log", this.genreData); 
    })
  }
  
  getResults(id) {
    this._movie.genreID = id;
    console.log('Movie Service Genre ID:', this._movie.genreID)
    this._router.navigate(['results'])
    this._movie.getMoviesByGenre()
  }
  
}
