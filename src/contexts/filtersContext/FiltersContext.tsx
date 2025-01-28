import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  ActionType,
  FiltersContextValueType,
  FiltersStateType,
} from './FiltersContextTypes';
import { useSearchParams } from 'react-router';

const FiltersContext = createContext<FiltersContextValueType | null>(null);

const initialState: FiltersStateType = {
  allowAll: false,
  countryFilters: [],
  departmentFilters: [],
  statusFilters: [],
};

function usersReducer(
  state: FiltersStateType,
  action: ActionType
): FiltersStateType {
  switch (action.type) {
    case 'filters/set': {
      return {
        ...state,
        departmentFilters: action.payload.department || [],
        countryFilters: action.payload.country || [],
        statusFilters: action.payload.status || [],
      };
    }
    case 'filters/allowAll': {
      return {
        ...state,
        allowAll: true,
      };
    }
    case 'filters/allowOne': {
      return {
        ...state,
        allowAll: false,
      };
    }
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
    case 'department/removeAll': {
      return {
        ...state,
        departmentFilters: [],
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
    case 'country/removeAll': {
      return {
        ...state,
        countryFilters: [],
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
    case 'status/removeAll': {
      return {
        ...state,
        statusFilters: [],
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function FiltersProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersState, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    const fromLink = Array.from(searchParams);
    const initialStateFromLink: { [key: string]: string[] } = {};
    for (const [key, value] of fromLink) {
      initialStateFromLink[key] = value.split(',');
    }
    console.log(initialStateFromLink);
    dispatch({ type: 'filters/set', payload: initialStateFromLink });
  }, [searchParams]);

  const ctx: FiltersContextValueType = {
    ...filtersState,

    toggleFilterValue(name: string, value: string) {
      let valueSetArray: string[];
      const existingFilters = searchParams.get(name)?.split(',') || [];
      valueSetArray = existingFilters;

      const comparisonIndex = valueSetArray.findIndex(el => el === value);

      if (valueSetArray.length === 0) {
        valueSetArray = [value];
      } else if (valueSetArray.length > 0 && comparisonIndex === -1) {
        valueSetArray = [...valueSetArray, value];
      } else if (valueSetArray.length > 0 && comparisonIndex > -1) {
        valueSetArray = valueSetArray.filter(el => el !== value);
      }

      searchParams.set(name, valueSetArray.join(','));

      if (!valueSetArray.at(0)) searchParams.delete(name);
      setSearchParams(searchParams);
    },

    deleteFilterValues: useCallback(
      (name: string) => {
        searchParams.delete(name);
        setSearchParams(searchParams);
      },
      [searchParams, setSearchParams]
    ),

    toggleAllowAllFilters: useCallback((allowAll: boolean) => {
      if (allowAll) dispatch({ type: 'filters/allowAll' });
      if (!allowAll) dispatch({ type: 'filters/allowOne' });
    }, []),
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
