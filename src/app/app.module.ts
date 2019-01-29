import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { MovieDbService } from './movie-db.service';
import { AppUserService } from './app-user.service';
import { routes } from './app.router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { SidebarService } from './sidebar.service';
import { ResultsComponent } from './results/results.component';
import { Login2Component } from './login-2/login-2.component';
import { UserProfileComponent } from './user-profile/user-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    SearchComponent,
    MainComponent,
    SidebarComponent,
    ResultsComponent,
    Login2Component,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [MovieDbService, AppUserService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
