import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';


export const router: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 