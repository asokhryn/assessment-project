import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, NavigationEnd} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {filter} from 'rxjs/operators';
import {ILinkList} from "../../../users/types/interfaces";

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  templateUrl: './sub-nav.component.html',
  imports: [
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    MatAnchor,
    MatButton
  ],
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent implements OnInit {
  @Input() linkList: ILinkList[] = [];
  @Input() mainRoute: {url: string; label: string} = {
    url: '',
    label: ''
  };
  @Input() subRoutes: any;
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
      });
  }

  isMainRoute(): boolean {
    return this.currentRoute === this.mainRoute.url;
  }

}
