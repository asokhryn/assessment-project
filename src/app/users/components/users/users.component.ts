import {Component, OnInit} from '@angular/core';
import {filter, Observable, take} from "rxjs";
import {userActions} from "../../store/actions";
import { Store } from '@ngrx/store';
import {IUser} from "../../types/interfaces";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  ConfirmModalComponentButton
} from "../../../shared/components/modals/confirm-modal/confirm-modal.component";
import {SubNavComponent} from "../../../shared/components/sub-nav/sub-nav.component";
import {RouterOutlet} from "@angular/router";
import {UserListComponent} from "../../../shared/components/user-list/user-list.component";


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgForOf,
    NgIf,
    MatList,
    MatListItem,
    MatDivider,
    MatIcon,
    MatIconButton,
    MatButton,
    SubNavComponent,
    RouterOutlet,
    ConfirmModalComponentButton,
    UserListComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users$: Observable<IUser[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.users$ = this.store.select((state) => state.users.users);
    this.loading$ = this.store.select((state) => state.users.loading);
  }

  ngOnInit(): void {
    //if there was no request yet (required here due to user creation simulation)
    this.users$.pipe(
      take(1),
      filter(users => users.length === 0)
    ).subscribe(() => {
      this.store.dispatch(userActions.loadUsers());
    });
  }
}
