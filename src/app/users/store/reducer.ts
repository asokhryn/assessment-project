import { createReducer, on } from '@ngrx/store';
import {userActions} from './actions';
import {IUserState} from "../types/interfaces";

export const initialState: IUserState = {
  users: [],
  error: null,
  loading: false
};

export const userReducer = createReducer(
  initialState,
  on(userActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(userActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users
  })),
  on(userActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(userActions.deleteUser, (state) => ({
    ...state,
  })),
  on(userActions.deleteUserSuccess, (state, { users }) => ({
    ...state,
    users,
  })),
  on(userActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
