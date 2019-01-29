import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component'; 
import { ResultsComponent } from './results/results.component';
import { Login2Component } from './login-2/login-2.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const router: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent }, 
    { path: 'search', component: SearchComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'login-2', component: Login2Component },
    { path: 'user-profile', component: UserProfileComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 