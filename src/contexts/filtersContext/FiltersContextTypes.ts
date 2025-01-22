export type FiltersStateType = {
  filtersCountries: string[];
  filtersDepartments: string[];
  filtersStatuses: string[];
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilterDepartments: (filterValue: string) => void;
  toggleFilterCountries: (filterValue: string) => void;
  toggleFilterStatuses: (filterValue: string) => void;
};

type AddDepartmentAction = {
  type: 'department/add';
  payload: string;
};
type RemoveDepartmentAction = {
  type: 'department/remove';
  payload: string;
};
type AddCountryAction = {
  type: 'country/add';
  payload: string;
};
type RemoveCountryAction = {
  type: 'country/remove';
  payload: string;
};
type AddStatusAction = {
  type: 'status/add';
  payload: string;
};
type RemoveStatusAction = {
  type: 'status/remove';
  payload: string;
};

export type ActionType =
  | AddDepartmentAction
  | AddCountryAction
  | AddStatusAction
  | RemoveDepartmentAction
  | RemoveCountryAction
  | RemoveStatusAction;
