import {Component, computed, contentChild, Input, TemplateRef} from '@angular/core';
import {IUser} from "../../../users/types/interfaces";
import {JsonPipe, NgTemplateOutlet} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {ActionsDirective} from "../actions.directive";

@Component({
  selector: 'app-user-list1',
  standalone: true,
  imports: [
    JsonPipe,
    MatList,
    MatListItem,
    NgTemplateOutlet
  ],
  templateUrl: './user-list1.component.html',
  styleUrl: './user-list1.component.css'
})
export class UserList1Component {
  @Input() users: IUser[] | null = [];
  private readonly actionTpl = contentChild(ActionsDirective, {read: TemplateRef<{ $implicit: IUser }>});

  actions = computed(() => this.actionTpl() || null);
}
