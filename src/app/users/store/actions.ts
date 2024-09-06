import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../types/interfaces';

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: IUser[] }>(),
    'Load Users Failure': props<{ error: any }>(),

    'Delete User': props<{ userId: number }>(),
    'Delete User Success': props<{ users: IUser[] }>(),
    'Delete User Failure': props<{ error: any }>(),

    'Create User':  props<{ user: IUser }>(),
    'Create User Success': props<{ user: IUser }>(),
    'Create User Failure': props<{ error: any }>(),
  },
});
