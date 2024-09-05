import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./shared/components/nav-bar/nav-bar.component";
import {SideBarComponent} from "./shared/components/side-bar/side-bar.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    SideBarComponent,
    RouterOutlet,
    MatSlideToggle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assessment-project';

  @ViewChild(SideBarComponent) sideBar: SideBarComponent | undefined;

  toggleSideBar() {
    this.sideBar?.toggleDrawer();
  }




}
