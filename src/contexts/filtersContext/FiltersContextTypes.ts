export type FiltersStateType = {
  departmentFilters: string[];
  statusFilters: string[];
  countryFilters: string[];
  allowAll: boolean;
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilterValue: (name: string, value: string) => void;
  deleteFilterValues: (name: string) => void;
  toggleAllowAllFilters: (allowAll: boolean) => void;
};

export type FilterName = 'department' | 'country' | 'status';
export type DispatchToggleType = `${FilterName}/add` | `${FilterName}/remove`;
export type DispatchDeleteType = `${FilterName}/removeAll`;

type AllowAllAction = {
  type: 'filters/allowAll';
};
type AllowOneAction = {
  type: 'filters/allowOne';
};

type FiltersValuesInitialization = {
  type: 'filters/set';
  payload: { [x: string]: string[] };
};

type FilterToggleValueAction = {
  type: DispatchToggleType;
  payload: string;
};
type FilterDeleteValuesAction = {
  type: DispatchDeleteType;
};

export type ActionType =
  | FiltersValuesInitialization
  | FilterToggleValueAction
  | FilterDeleteValuesAction
  | AllowAllAction
  | AllowOneAction;
