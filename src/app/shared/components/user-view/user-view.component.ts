import {Component, input} from '@angular/core';
import {IUser} from "../../../users/types/interfaces";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  user = input<IUser | null>(null);
}
