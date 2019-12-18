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

  results: any;

  ngOnInit() {
    this.getGenres(); 
  }

  getGenres(){
    this._movie.getSidebarData()
  }
  
  getResults(id, name) {
    this._movie.genreID = id;
    this._movie.genreName = name; 
    this._router.navigate(['results']);
    this._movie.getMoviesByGenre();
  }
  
}
