// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { IUser } from '../types/interfaces';
// import {Observable, of} from 'rxjs';
// import {environment} from "../../../environments/environment";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private url = environment.apiUrl + '/users';
//
//   constructor(private http: HttpClient) {}
//
//   getUsers(): Observable<IUser[]> {
//     return this.http.get<IUser[]>(this.url).pipe(
//       map((users: IUser[]) => users)
//     );
//   }
//
//   deleteUser(id: number): Observable<IUser[]> {
//     // Simulate user deletion
//     return this.getUsers().pipe(
//       map((users: IUser[]) => users.filter(user => user.id !== id))
//     );
//   }
//
//   createUser(user: IUser): Observable<IUser> {
//     return of(user)
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { IUser } from '../types/interfaces';
import {Observable, of} from 'rxjs';
import { environment } from "../../../environments/environment";
import { userStore } from '../store/user.store';
import { setEntities, addEntities, deleteEntities } from '@ngneat/elf-entities';
import {MatSnackBar} from "@angular/material/snack-bar";
import {createRequestsStatusOperator, updateRequestStatus} from "@ngneat/elf-requests";
const trackRequestsStatus = createRequestsStatusOperator(userStore);
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl + '/users';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  private showMessage(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }

  getUsers() {
    return this.http.get<IUser[]>(this.url).pipe(
      tap((users: IUser[]) => {
        userStore.update(setEntities(users));
        userStore.update(updateRequestStatus('users', 'success'));
      }),
      trackRequestsStatus('users'),
      catchError((error) => {
        this.showMessage('Failed to get user. Please try again.');
        return of();
      })
    );
  }

  deleteUser(id: number){
    return this.http.get<IUser[]>(`${this.url}`).pipe(
      tap(() => {
        userStore.update(deleteEntities(id));
        this.showMessage(`User with ID ${id} deleted successfully.`);
      }),
      catchError((error) => {
        console.error('Failed to delete user', error);
        this.showMessage('Failed to delete user. Please try again.');
        return of();
      })
    );
  }

  createUser(user: IUser) {
    return this.http.post<IUser>(this.url, user).pipe(
      tap((newUser: IUser) => {
        userStore.update(addEntities(newUser));
        this.showMessage(`User was created successfully.`);
      }),
      catchError((error) => {
        this.showMessage('Failed to create user. Please try again.');
        return of(null);
      })
    );
  }

}

