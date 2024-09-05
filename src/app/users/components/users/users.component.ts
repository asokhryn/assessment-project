import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {loadUsers} from "../../store/actions";
import { Store } from '@ngrx/store';
import {IUser, IUserState} from "../../types/interfaces";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgForOf,
    NgIf,
    MatList,
    MatListItem
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users$: Observable<IUser[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.users$ = this.store.select((state) => state.users.users);
    this.loading$ = this.store.select((state) => state.users.loading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}
