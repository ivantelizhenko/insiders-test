import { createContext, useContext, useReducer } from 'react';
import {
  ActionType,
  FiltersContextProviderProps,
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
    case 'type': {
      return {
        ...state,
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function FiltersProvider({ children }: FiltersContextProviderProps) {
  const [appState, dispatch] = useReducer(usersReducer, initialState);

  const ctx: FiltersContextValueType = {
    ...appState,
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
