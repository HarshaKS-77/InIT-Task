import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Pnf } from './pnf/pnf';

export const routes: Routes = [
    // implematation of lazy loading
    {
        path: 'admin', loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
    },
    {
        path: 'user', loadChildren: () => import('./user/user-module').then(m => m.UserModule)
    },
   
    {
        path: '', component: Login
    },
    {
        path: 'register', component: Register
    },
    {
        path: '**', component: Pnf
    },
];
