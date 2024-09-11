import {Component, inject, Input} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {ConfirmModalComponentButton} from "../modals/confirm-modal/confirm-modal.component";
import {MatDivider} from "@angular/material/divider";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe} from "@angular/common";
import {userActions} from "../../../users/store/actions";
import {Store} from "@ngrx/store";
import {IUser} from "../../../users/types/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {ViewModalComponentButton} from "../modals/view-modal/view-modal.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    ConfirmModalComponentButton,
    MatDivider,
    MatIconButton,
    MatIcon,
    AsyncPipe,
    ViewModalComponentButton,
    MatButton
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users: IUser[] | null = [];
  readonly dialog = inject(MatDialog);

  constructor(private store: Store<any>) {}

  onDeleteConfirm($event: number | undefined) {
    $event && this.store.dispatch(userActions.deleteUser({ userId: $event }));
  }
}
