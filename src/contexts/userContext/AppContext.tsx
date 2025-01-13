import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  ActionType,
  AppContextProviderProps,
  AppContextValueType,
  AppStateType,
} from './AppContextTypes';
import { API_URL } from '../../utils/constants';
import { AJAX } from '../../services/AJAX';

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
    case 'rejected': {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function AppProvider({ children }: AppContextProviderProps) {
  const [appState, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    async function fetchUsers() {
      dispatch({ type: 'loading' });
      try {
        const users = await AJAX(`${API_URL}/users`);
        dispatch({ type: 'users/loaded', payload: users });
      } catch (error) {
        console.error(error);
        dispatch({
          type: 'rejected',
          payload: 'The problem with a fetching users from server',
        });
      }
    }
    async function fetchDepartments() {
      dispatch({ type: 'loading' });
      try {
        const departments = await AJAX(`${API_URL}/departments`);
        dispatch({ type: 'departments/loaded', payload: departments });
      } catch (error) {
        console.error(error);
        dispatch({
          type: 'rejected',
          payload: 'The problem with a fetching departments from server',
        });
      }
    }
    async function fetchCountries() {
      dispatch({ type: 'loading' });
      try {
        const countries = await AJAX(`${API_URL}/countries`);
        dispatch({ type: 'countries/loaded', payload: countries });
      } catch (error) {
        console.error(error);
        dispatch({
          type: 'rejected',
          payload: 'The problem with a fetching countries from server',
        });
      }
    }
    async function fetchStatuses() {
      dispatch({ type: 'loading' });
      try {
        const statuses = await AJAX(`${API_URL}/statuses`);
        dispatch({ type: 'statuses/loaded', payload: statuses });
      } catch (error) {
        console.error(error);
        dispatch({
          type: 'rejected',
          payload: 'The problem with a fetching statuses from server',
        });
      }
    }
    fetchUsers();
    fetchCountries();
    fetchDepartments();
    fetchStatuses();
  }, []);

  const ctx: AppContextValueType = {
    ...appState,
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
