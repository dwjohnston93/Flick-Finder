import { Component } from '@angular/core';
import { MovieDbService } from './movie-db.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['main'])
  }
  
}
