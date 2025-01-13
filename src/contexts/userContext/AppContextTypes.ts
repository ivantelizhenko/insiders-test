import { ReactNode } from 'react';

export type UserType = {
  name: string;
  status: {
    name: string;
    // TODO: Add Enum(?)
    value: string;
  };
  department: {
    name: string;
    value: string;
  };
  country: {
    name: string;
    value: string;
  };
};

export type CountryType = {
  name: string;
  value: string;
};

export type DepartmentType = {
  name: string;
  value: string;
};

export type StatusType = {
  name: string;
  value: string;
};

export type AppStateType = {
  users: UserType[];
  countries: CountryType[];
  departments: DepartmentType[];
  statuses: StatusType[];
  isLoading: true | false;
  currentUser: Partial<UserType>;
  error: string;
};

export type AppContextValueType = AppStateType & {};

export type AppContextProviderProps = {
  children: ReactNode;
};

export type LoadingAction = {
  type: 'loading';
};

export type FetchUsersAction = { type: 'users/loaded'; payload: UserType[] };

export type FetchCountriesAction = {
  type: 'countries/loaded';
  payload: CountryType[];
};

export type FetchDepartmentseAction = {
  type: 'departments/loaded';
  payload: DepartmentType[];
};

export type FetchStatusesAction = {
  type: 'statuses/loaded';
  payload: StatusType[];
};

export type RejectAction = {
  type: 'rejected';
  payload: string;
};

export type ActionType =
  | LoadingAction
  | FetchUsersAction
  | FetchCountriesAction
  | FetchDepartmentseAction
  | FetchStatusesAction
  | RejectAction;
// export type ActionType = () => void;
