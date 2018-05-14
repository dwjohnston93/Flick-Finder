import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { MovieDbService } from './movie-db.service';
import { routes } from './app.router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
