import {Component, OnInit} from '@angular/core';
import {filter, first, Observable, switchMap} from "rxjs";
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
import {userStore} from "../../store/user.store";
import {selectAllEntities} from "@ngneat/elf-entities";
import {UserService} from "../../services/user.service";
import {selectIsRequestPending} from "@ngneat/elf-requests";
import {ViewModalComponentButton} from "../../../shared/components/modals/view-modal/view-modal.component";


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
    UserListComponent,
    ViewModalComponentButton
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users$: Observable<IUser[]>;
  loading$: Observable<boolean>;

  constructor(private userService: UserService) {
    this.loading$ = userStore.pipe(selectIsRequestPending('users'));

    this.users$ = userStore.pipe(selectAllEntities());
  }

  ngOnInit(): void {
    this.users$.pipe(
      first(users => users.length === 0),
      switchMap(() => this.userService.getUsers())
    ).subscribe();
  }
}
