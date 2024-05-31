import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginQrcodeComponent } from './login-qrcode/login-qrcode.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginQrcodeComponent },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
];
