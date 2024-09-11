import {Component, inject, Input} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {ConfirmModalComponentButton} from "../modals/confirm-modal/confirm-modal.component";
import {MatDivider} from "@angular/material/divider";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe} from "@angular/common";
import {userActions} from "../../../users/store/actions";
import {UserService} from "../../../users/services/user.service";
import {Store} from "@ngrx/store";
import {IUser} from "../../../users/types/interfaces";
import {InfoModalComponent} from "../modals/info-modal/info-modal.component";
import {MatDialog} from "@angular/material/dialog";

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
    AsyncPipe
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

  showInfoDialog(enterAnimationDuration: string, exitAnimationDuration: string, user: IUser): void {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      width: '450px',
      data: { user, title:  `User Details` },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
