import {Component, inject, OnInit} from '@angular/core';
import {first, firstValueFrom, Observable, switchMap} from "rxjs";
import {IUser} from "../../types/interfaces";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {ConfirmModalComponentButton} from "../../../shared/components/modals/confirm-modal/confirm-modal.component";
import {SubNavComponent} from "../../../shared/components/sub-nav/sub-nav.component";
import {RouterOutlet} from "@angular/router";
import {UserListComponent} from "../../../shared/components/user-list/user-list.component";
import {userStore} from "../../store/user.store";
import {deleteEntities, getAllEntities, selectAllEntities} from "@ngneat/elf-entities";
import {UserService} from "../../services/user.service";
import {selectIsRequestPending} from "@ngneat/elf-requests";
import {ViewModalComponentButton} from "../../../shared/components/modals/view-modal/view-modal.component";
import {UserList1Component} from "../../../shared/components/user-list1/user-list1.component";
import {ActionsDirective} from "../../../shared/components/actions.directive";
import {ConfirmDirective} from "../../../shared/components/confirm.directive";
import {Dialog} from "@angular/cdk/dialog";
import {UserViewComponent} from "../../../shared/components/user-view/user-view.component";
import {select} from "@ngneat/elf";
import {UserSelectionComponent} from "../../../shared/components/user-selection/user-selection.component";


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
    ViewModalComponentButton,
    UserList1Component,
    ActionsDirective,
    ConfirmDirective
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]>;
  loading$: Observable<boolean>;

  constructor(private userService: UserService) {
    this.loading$ = userStore.pipe(selectIsRequestPending('users'));

    this.users$ = userStore.pipe(selectAllEntities());
  }

  private readonly dialog = inject(Dialog);

  ngOnInit(): void {
    this.users$.pipe(
      first(users => users.length === 0),
      switchMap(() => this.userService.getUsers())
    ).subscribe();
  }

  async deleteUser($event: boolean, user: IUser) {
    if ($event) {
      console.log('Deleting user', user);
      await firstValueFrom(this.userService.deleteUser(user.id))
    }
  }

  viewUser(user: any) {
    const dialogRef = this.dialog.open(UserViewComponent);
    dialogRef.componentRef?.setInput('user', user);
  }

  protected readonly select = select;

  selectUsers() {
    const ref = this.dialog.open<IUser[] | undefined>(UserSelectionComponent, {
      data: userStore.query(getAllEntities())
    });
    ref.closed.pipe(first()).subscribe((users) => {
      if (users) {
        userStore.update(deleteEntities(users.map(user => user.id)));
      }
    });

  }
}
