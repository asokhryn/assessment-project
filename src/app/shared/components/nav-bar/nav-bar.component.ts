import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton

  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() title: string = 'Logo Title';
  @Output() toggleSideBarEvent = new EventEmitter<void>();

  toggleSideBar() {
    this.toggleSideBarEvent.emit();
  }
}
