import { Component } from '@angular/core';
import {SubNavComponent} from "../shared/components/sub-nav/sub-nav.component";
import {RouterOutlet} from "@angular/router";
import {ILinkList} from "./types/interfaces";

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
    { link: '/users', labelLink: 'Users'},
    { link: 'create', labelLink: 'Create'},
    { link: 'import', labelLink: 'Import'},
  ]
}
