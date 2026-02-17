import { Routes } from '@angular/router';

export const routes: Routes = [
    // implematation of lazy loading
    {
        path: 'admin', loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
    },
    {
        path: 'user', loadChildren: () => import('./user/user-module').then(m => m.UserModule)
    }
];
