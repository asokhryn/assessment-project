import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {MatListItem} from "@angular/material/list";
import {ViewModalComponentButton} from "../modals/view-modal/view-modal.component";
import {ConfirmModalComponentButton} from "../modals/confirm-modal/confirm-modal.component";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {IUser} from "../../../users/types/interfaces";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [
    MatListItem,
    ViewModalComponentButton,
    ConfirmModalComponentButton,
    MatIcon,
    MatIconButton,
    MatButton,
    NgTemplateOutlet
  ],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
  @ContentChild("place") place: TemplateRef<any> | any;
  @Input() user: IUser | undefined;
}
