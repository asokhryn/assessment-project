export interface IUserState {
  users: IUser[];
  error: string | null;
  loading: boolean;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ILinkList {
  link: string
  labelLink: string
}

export interface ISubRoute {
  url: string;
  label: string;
}

export interface ISubRoutes {
  [key: string]: ISubRoute[];
}

