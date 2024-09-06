import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {userActions} from "../../store/actions";
import { Store } from '@ngrx/store';
import {IUser, IUserState} from "../../types/interfaces";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmModalComponent} from "../../../shared/components/modals/confirm-modal/confirm-modal.component";
import {InfoModalComponent} from "../../../shared/components/modals/info-modal/info-modal.component";


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
    MatButton
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  readonly dialog = inject(MatDialog);

  users$: Observable<IUser[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.users$ = this.store.select((state) => state.users.users);
    this.loading$ = this.store.select((state) => state.users.loading);
  }

  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string, user: IUser, $event: any): void {
    $event.stopPropagation();

    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: {
        text: `Would you like to delete user ${user.name}?`,
        cancelButton: 'Cancel',
        confirmButton: 'Delete' },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(userActions.deleteUser({ userId: user.id }));
        console.log('delete', user.id)
      }
    });
  }

  showInfoDialog(enterAnimationDuration: string, exitAnimationDuration: string, user: IUser): void {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      width: '450px',
      data: { user, title:  `User Details` },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
    this.store.dispatch(userActions.loadUsers());
  }
}
