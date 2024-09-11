import {Component, Input} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {ConfirmModalComponentButton} from "../modals/confirm-modal/confirm-modal.component";
import {MatDivider} from "@angular/material/divider";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe} from "@angular/common";
import {IUser} from "../../../users/types/interfaces";
import {ViewModalComponentButton} from "../modals/view-modal/view-modal.component";
import {UserService} from "../../../users/services/user.service";

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

  constructor(private userService: UserService,) {}

  onDeleteConfirm($event: number | undefined) {
    $event && this.userService.deleteUser($event).subscribe();
  }
}
