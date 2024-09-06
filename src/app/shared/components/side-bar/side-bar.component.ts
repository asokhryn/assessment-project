import {Component, ViewChild} from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenav,
  MatSidenavContainer
} from "@angular/material/sidenav";
import {NgClass} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    NgClass,
    MatDrawer,
    MatButton,
    MatDrawerContainer,
    MatDrawerContent,
    MatIcon,
    MatListItem,
    MatNavList,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  itemList: any = [
    {text: 'Home', icon: 'home', link: ''},
    {text: 'Users', icon: 'person', link: 'users'},
    {text: 'Settings', icon: 'settings', link: 'settings'},
  ]
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  toggleDrawer() {
    this.drawer?.toggle();
  }
}
