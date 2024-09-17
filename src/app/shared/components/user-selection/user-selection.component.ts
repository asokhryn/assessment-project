import {Component, inject, Input, output} from '@angular/core';
import {IUser} from "../../../users/types/interfaces";
import {UserList1Component} from "../user-list1/user-list1.component";
import {ActionsDirective} from "../actions.directive";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {SelectionModel} from "@angular/cdk/collections";
import {map, startWith} from "rxjs/operators";
import {Dialog, DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {ConfirmDirective} from "../confirm.directive";

@Component({
  selector: 'app-user-selection',
  standalone: true,
  imports: [
    UserList1Component,
    ActionsDirective,
    JsonPipe,
    AsyncPipe,
    ConfirmDirective
  ],
  templateUrl: './user-selection.component.html',
  styleUrl: './user-selection.component.css'
})
export class UserSelectionComponent {
  protected readonly users = inject(DIALOG_DATA);
  protected readonly dialogRef = inject(DialogRef);


  private readonly _selection = new SelectionModel<IUser>(true, []);

  isDisabled = this._selection.changed.pipe(
    startWith(true),
    map(() => this._selection.selected.length < 1)
  );

  handleSelect($event: Event, user: IUser) {
    const inputElement = $event.target as HTMLInputElement;
    if (inputElement.checked) {
      this._selection.select(user);
    } else {
      this._selection.deselect(user);
    }
  }

  deleteSelection($event: boolean) {
    if ($event) {
      this.dialogRef.close(this._selection.selected);
    }

  }
}
