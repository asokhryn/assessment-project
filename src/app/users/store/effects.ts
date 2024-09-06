import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import { userActions } from './actions';
import { UserService } from '../services/user.service';
import { IUser } from '../types/interfaces';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../shared/components/snack-bar/snack-bar.component";

@Injectable()
export class UserEffects {
  private userService = inject(UserService);
  private actions$ = inject(Actions);
  private snackBar = inject(MatSnackBar);

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

  deleteUserSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(userActions.deleteUserSuccess),
        tap(() => {
          this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 3000,
            data: {
              message: 'User successfully deleted!',
            }
          });
        })
      ),
    { dispatch: false }
  );

  deleteUserFailure$ = createEffect(() =>
      this.actions$.pipe(
        ofType(userActions.deleteUserFailure),
        tap(() => {
          this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 3000,
            data: {
              message: 'Failed to delete user. Please try again!',
            }
          });
        })
      ),
    { dispatch: false }
  );
}
