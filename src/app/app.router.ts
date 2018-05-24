import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component'; 
import { ResultsComponent } from './results/results.component';

export const router: Routes = [
    { path: 'main', component: MainComponent }, 
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'results', component: ResultsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 