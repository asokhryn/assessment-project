import {Component, Input} from '@angular/core';
import {IUser} from "../../../users/types/interfaces";
import {UserList1Component} from "../user-list1/user-list1.component";
import {ActionsDirective} from "../actions.directive";

@Component({
  selector: 'app-user-selection',
  standalone: true,
  imports: [
    UserList1Component,
    ActionsDirective
  ],
  templateUrl: './user-selection.component.html',
  styleUrl: './user-selection.component.css'
})
export class UserSelectionComponent {
  @Input() users: IUser[] | null = [];
}
