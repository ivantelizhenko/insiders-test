import { ReactNode } from 'react';

export type UserType = {
  id: string;
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
  id: string;
};

export type DepartmentType = {
  name: string;
  value: string;
  id: string;
};

export type StatusType = {
  name: string;
  value: string;
  id: string;
};

export type ModalVariantsType = 'closedModal' | 'addUser' | 'confirmation';

export type AppStateType = {
  users: UserType[];
  countries: CountryType[];
  departments: DepartmentType[];
  statuses: StatusType[];
  isLoading: true | false;
  currentUser: Partial<UserType>;
  showModalStatus: ModalVariantsType;
  error: string;
};

export type AppContextValueType = AppStateType & {
  setStatusModal: (status: ModalVariantsType) => void;
  closeModal: () => void;
  setCurrentUser: (id: string | undefined) => void;
  addUser: (newUser: UserType) => void;
  deleteUser: (id: string) => void;
};

export type AppContextProviderProps = {
  children: ReactNode;
};

export type LoadingAction = {
  type: 'loading';
};

export type FetchUsersAction = { type: 'users/loaded'; payload: UserType[] };

export type SetCurrentUserAction = {
  type: 'user/set';
  payload: string | undefined;
};
export type AddNewUserAction = {
  type: 'user/add';
  payload: UserType;
};
export type DeleteUserAction = {
  type: 'user/delete';
  payload: string;
};

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

export type SetStatusModalAction = {
  type: 'modal/setStatus';
  payload: ModalVariantsType;
};
export type CloseModalAction = {
  type: 'modal/close';
};

export type RejectAction = {
  type: 'rejected';
  payload: string;
};

export type ActionType =
  | LoadingAction
  | FetchUsersAction
  | SetCurrentUserAction
  | AddNewUserAction
  | DeleteUserAction
  | FetchCountriesAction
  | FetchDepartmentseAction
  | FetchStatusesAction
  | SetStatusModalAction
  | CloseModalAction
  | RejectAction;
