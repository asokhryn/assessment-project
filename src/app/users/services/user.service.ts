import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../types/interfaces';
import {Observable, of} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url).pipe(
      map((users: IUser[]) => users)
    );
  }

  deleteUser(id: number): Observable<IUser[]> {
    // Simulate user deletion
    return this.getUsers().pipe(
      map((users: IUser[]) => users.filter(user => user.id !== id))
    );
  }

  createUser(user: IUser): Observable<IUser> {
    return of(user)
  }
}
