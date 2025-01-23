import { createContext, ReactNode, useContext, useReducer } from 'react';
import {
  ActionType,
  FilterName,
  FiltersContextValueType,
  FiltersStateType,
  PossibleDispatchType,
} from './FiltersContextTypes';

const FiltersContext = createContext<FiltersContextValueType | null>(null);

const initialState: FiltersStateType = {
  countryFilters: [],
  departmentFilters: [],
  statusFilters: [],
};

function usersReducer(
  state: FiltersStateType,
  action: ActionType
): FiltersStateType {
  switch (action.type) {
    case 'department/add': {
      return {
        ...state,
        departmentFilters: [
          ...(state.departmentFilters as string[]),
          action.payload,
        ],
      };
    }
    case 'department/remove': {
      return {
        ...state,
        departmentFilters: (state.departmentFilters as string[]).filter(
          filter => filter !== action.payload
        ),
      };
    }
    case 'country/add': {
      return {
        ...state,
        countryFilters: [...(state.countryFilters as string[]), action.payload],
      };
    }
    case 'country/remove': {
      return {
        ...state,
        countryFilters: (state.countryFilters as string[]).filter(
          filter => filter !== action.payload
        ),
      };
    }
    case 'status/add': {
      return {
        ...state,
        statusFilters: [...(state.statusFilters as string[]), action.payload],
      };
    }
    case 'status/remove': {
      return {
        ...state,
        statusFilters: (state.statusFilters as string[]).filter(
          filter => filter !== action.payload
        ),
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function FiltersProvider({ children }: { children: ReactNode }) {
  const [filtersState, dispatch] = useReducer(usersReducer, initialState);

  const ctx: FiltersContextValueType = {
    ...filtersState,

    toggleFilter(filterValue, name) {
      const [dispatchName] = name.split('F');

      const existFilter = (filtersState[name] as Array<string>).find(
        filter => filter === filterValue
      );

      const curType: PossibleDispatchType = existFilter
        ? `${dispatchName as FilterName}/remove`
        : `${dispatchName as FilterName}/add`;

      dispatch({ type: curType, payload: filterValue });
    },
  };

  return (
    <FiltersContext.Provider value={ctx}>{children}</FiltersContext.Provider>
  );
}

function useFilters() {
  const context = useContext(FiltersContext);

  if (context === undefined)
    throw new Error(
      'FilterContext was used outside of the FilterContextContextProvider'
    );

  return context as FiltersContextValueType;
}

export { FiltersProvider, useFilters };
