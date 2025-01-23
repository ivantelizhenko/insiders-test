export type FiltersStateType = {
  [key: string]: string[] | ((filterValue: string, name: string) => void);
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilter: (filterValue: string, name: string) => void;
};

export type FilterName = 'department' | 'country' | 'status';
export type PossibleDispatchType = `${FilterName}/add` | `${FilterName}/remove`;

type FilterAction = {
  type: PossibleDispatchType;
  payload: string;
};

export type ActionType = FilterAction;
