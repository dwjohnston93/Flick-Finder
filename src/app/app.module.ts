import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { MovieDbService } from './movie-db.service';
import { AppUserService } from './app-user.service';
import { routes } from './app.router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { MainPageService } from './main-page.service';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { SidebarService } from './sidebar.service';
import { ResultsComponent } from './results/results.component';
import { Login2Component } from './login-2/login-2.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    MainComponent,
    SidebarComponent,
    ResultsComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [MovieDbService, AppUserService, MainPageService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
