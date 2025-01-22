import { createContext, ReactNode, useContext, useReducer } from 'react';
import {
  ActionType,
  FiltersContextValueType,
  FiltersStateType,
} from './FiltersContextTypes';

const FiltersContext = createContext<FiltersContextValueType | null>(null);

const initialState: FiltersStateType = {
  filtersCountries: [],
  filtersDepartments: [],
  filtersStatuses: [],
};

function usersReducer(
  state: FiltersStateType,
  action: ActionType
): FiltersStateType {
  switch (action.type) {
    case 'department/add': {
      return {
        ...state,
        filtersDepartments: [...state.filtersDepartments, action.payload],
      };
    }
    case 'department/remove': {
      return {
        ...state,
        filtersDepartments: state.filtersDepartments.filter(
          filter => filter !== action.payload
        ),
      };
    }
    case 'country/add': {
      return {
        ...state,
        filtersCountries: [...state.filtersCountries, action.payload],
      };
    }
    case 'country/remove': {
      return {
        ...state,
        filtersCountries: state.filtersCountries.filter(
          filter => filter !== action.payload
        ),
      };
    }
    case 'status/add': {
      return {
        ...state,
        filtersStatuses: [...state.filtersStatuses, action.payload],
      };
    }
    case 'status/remove': {
      return {
        ...state,
        filtersStatuses: state.filtersStatuses.filter(
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

    toggleFilterDepartments(filterValue) {
      const existFilter = filtersState.filtersDepartments.find(
        filter => filter === filterValue
      );

      if (existFilter) {
        dispatch({ type: 'department/remove', payload: filterValue });
      } else dispatch({ type: 'department/add', payload: filterValue });
    },

    toggleFilterCountries(filterValue) {
      const existFilter = filtersState.filtersCountries.find(
        filter => filter === filterValue
      );

      if (existFilter) {
        dispatch({ type: 'country/remove', payload: filterValue });
      } else dispatch({ type: 'country/add', payload: filterValue });
    },

    toggleFilterStatuses(filterValue) {
      const existFilter = filtersState.filtersStatuses.find(
        filter => filter === filterValue
      );

      if (existFilter) {
        dispatch({ type: 'status/remove', payload: filterValue });
      } else dispatch({ type: 'status/add', payload: filterValue });
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
