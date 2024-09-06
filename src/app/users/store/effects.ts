import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { userActions } from './actions';
import { UserService } from '../services/user.service';
import { IUser } from '../types/interfaces';

@Injectable()
export class UserEffects {
  private userService = inject(UserService);
  private actions$ = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users: IUser[]) => userActions.loadUsersSuccess({ users })),
          catchError((error) => of(userActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.deleteUser),
      mergeMap((action) =>
        this.userService.deleteUser(action.userId).pipe(
          map((users: IUser[]) =>
            userActions.deleteUserSuccess({ users })
          ),
          catchError((error) =>
            of(userActions.deleteUserFailure({ error }))
          )
        )
      )
    )
  );
}
