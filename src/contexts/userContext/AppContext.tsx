import { createContext, useContext, useReducer } from 'react';
import {
  ActionType,
  AppContextProviderProps,
  AppContextValueType,
  AppStateType,
} from './AppContextTypes';

const AppContext = createContext<AppContextValueType | null>(null);

const initialState: AppStateType = {
  users: [],
  countries: [],
  departments: [],
  statuses: [],
  currentUser: {},
  isLoading: false,
  error: '',
};

function usersReducer(state: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case 'loading': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'users/loaded': {
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    }
    case 'countries/loaded': {
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
      };
    }
    case 'departments/loaded': {
      return {
        ...state,
        isLoading: false,
        departments: action.payload,
      };
    }
    case 'statuses/loaded': {
      return {
        ...state,
        isLoading: false,
        statuses: action.payload,
      };
    }
    default:
      throw new Error('Unknown action type');
  }
}

function AppProvider({ children }: AppContextProviderProps) {
  const [appState, dispatch] = useReducer(usersReducer, initialState);

  const ctx: AppContextValueType = {
    ...appState,
    fetchUsers(users) {
      dispatch({ type: 'users/loaded', payload: users });
    },
    fetchCountries(countries) {
      dispatch({ type: 'countries/loaded', payload: countries });
    },
    fetchDepartmentse(departments) {
      dispatch({ type: 'departments/loaded', payload: departments });
    },
    fetchStatuses(statuses) {
      dispatch({ type: 'statuses/loaded', payload: statuses });
    },
  };

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
}

function useAppState() {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error('AppContext was used outside of the AppContextProvider');

  return context as AppContextValueType;
}

export { AppProvider, useAppState };
