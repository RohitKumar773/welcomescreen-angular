import { Routes } from '@angular/router';
import { Registration } from './features/auth/registration/registration';
import { LoginPage } from './features/auth/login-page/login-page';

export const routes: Routes = [
    { path: '', component: LoginPage },
    { path: 'registration', component: Registration }
];
