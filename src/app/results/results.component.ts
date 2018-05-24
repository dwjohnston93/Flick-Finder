import { Component, OnInit } from '@angular/core';
import { MovieDbService} from '../movie-db.service';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  genreResults: number;
  type: string;
  genreDisplay: any;
  
  constructor(private _movie: MovieDbService) { 
    if(this._movie.genreID) {
      this.genreResults = this._movie.genreID;
      console.log("this.genreResults", this.genreResults);
    }
    this._movie.currentGenre = {};
  }

  ngOnInit() {
    console.log('Results ID', this.genreResults)
  }
  
    // displayGenre() {
    //   this._movie.getMoviesByGenre().subscribe( data =>{
    //     this.genreDisplay = data
    //     console.log("genreDisplay", this.genreDisplay); 
    //   })
    // }

}
