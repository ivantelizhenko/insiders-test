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
        currentUser: action.payload.at(0)!,
      };
    }
    // case 'user/set': {
    //   return {
    //     ...state,
    //     currentUser: state.users.find(user => user.id === action.payload)!,
    //   };
    // }
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
    async function fetchData() {
      dispatch({ type: 'loading' });
      try {
        const users = await AJAX(`${API_URL}/users`);
        dispatch({ type: 'users/loaded', payload: users });

        const departments = await AJAX(`${API_URL}/departments`);
        dispatch({ type: 'departments/loaded', payload: departments });

        const countries = await AJAX(`${API_URL}/countries`);
        dispatch({ type: 'countries/loaded', payload: countries });

        const statuses = await AJAX(`${API_URL}/statuses`);
        dispatch({ type: 'statuses/loaded', payload: statuses });
      } catch (error) {
        console.error(error);
        dispatch({
          type: 'rejected',
          payload: 'The problem with a fetching data from the server',
        });
      }
    }

    fetchData();
  }, []);

  const ctx: AppContextValueType = {
    ...appState,

    // setCurrentUser(id) {
    //   dispatch({ type: 'user/set', payload: id });
    // },
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
