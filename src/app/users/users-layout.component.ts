import { Component } from '@angular/core';
import {SubNavComponent} from "../shared/components/sub-nav/sub-nav.component";
import {RouterOutlet} from "@angular/router";
import {ILinkList, ISubRoutes} from "./types/interfaces";

@Component({
  selector: 'app-users-layout',
  standalone: true,
  imports: [
    SubNavComponent,
    RouterOutlet
  ],
  templateUrl: './users-layout.component.html',
  styleUrl: './users-layout.component.css'
})
export class UsersLayoutComponent {
  linksList: ILinkList[] = [
    { link: 'create', labelLink: 'Create'},
    { link: 'import', labelLink: 'Import'},
  ]

  mainRoute = {url: '/users', label: 'Users'};
  subRoutes: ISubRoutes = {
    '/users/create': [
      { url: '/users', label: 'Users' },
      { url: '/users/create', label: 'Create' }
    ],
    '/users/import': [
      { url: '/users', label: 'Users' },
      { url: '/users/import', label: 'Import' }
    ]
  };

}
