import {createStore, withProps} from '@ngneat/elf';
import {IUser} from "../types/interfaces";
import {getAllEntities, withEntities} from "@ngneat/elf-entities";
import {withRequestsStatus} from "@ngneat/elf-requests";

export interface IUserState {
  users: IUser[];
}

const initialState: IUserState = {
  users: [],
};

export const userStore = createStore(
  {name: 'user'},
  withProps<IUserState>(initialState),
  withEntities<IUser>(),
  withRequestsStatus()
);


