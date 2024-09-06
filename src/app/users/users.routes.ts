import {Route} from "@angular/router";

export const routes: Route[] = [
  {
    path: '', loadComponent: () => import('./users-layout.component').then(m => m.UsersLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./components/users/users.component').then(m => m.UsersComponent) },
      { path: 'create', loadComponent: () => import('./components/create/create.component').then(m => m.CreateComponent) },
      { path: 'import', loadComponent: () => import('./components/import/import.component').then(m => m.ImportComponent) }
    ]
  },
]
