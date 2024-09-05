import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/components/home/home.component').then(m => m.HomeComponent) },
    { path: 'users', loadComponent: () => import('./users/components/users/users.component').then(m => m.UsersComponent) },
    { path: 'settings', loadComponent: () => import('./settings/components/settings/settings.component').then(m => m.SettingsComponent) }
];
