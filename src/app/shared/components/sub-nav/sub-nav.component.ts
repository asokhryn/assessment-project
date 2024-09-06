import {Component, Input} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ILinkList} from "../../../users/types/interfaces";
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  imports: [
    MatToolbar,
    MatAnchor,
    RouterLink,
    MatListItem,
    RouterLinkActive
  ],
  templateUrl: './sub-nav.component.html',
  styleUrl: './sub-nav.component.css'
})
export class SubNavComponent {
  @Input() linkList: ILinkList[] = [];
}
