import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component'; 
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const router: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent }, 
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user-profile', component: UserProfileComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 