import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/components/home/home.component').then(m => m.HomeComponent) },
    {
        path: 'users', loadChildren: () => import('./users/users.routes').then(m => m.routes)
    },
    { path: 'settings', loadComponent: () => import('./settings/components/settings/settings.component').then(m => m.SettingsComponent) }
];
