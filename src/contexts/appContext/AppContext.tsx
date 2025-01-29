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
  AppContextValueType,
  AppStateType,
} from './AppContextTypes';
import { API_URL } from '../../utils/constants';
import { getJSON } from '../../services/AJAX';
import {
  addUserAPI,
  deleteUserAPI,
  updateUserAPI,
} from '../../services/APIUsers';

const AppContext = createContext<AppContextValueType | null>(null);

const initialState: AppStateType = {
  users: [],
  countries: [],
  departments: [],
  statuses: [],
  currentUser: {},
  error: '',
};

function usersReducer(state: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case 'users/loaded': {
      return {
        ...state,
        users: action.payload,
      };
    }

    case 'user/set': {
      if (action.payload === '') return { ...state, currentUser: {} };
      return {
        ...state,
        currentUser: state.users.find(user => user.id === action.payload)!,
      };
    }

    case 'user/add': {
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    }
    case 'user/delete': {
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    }
    case 'user/update': {
      const updatedUserIndex = state.users.findIndex(
        user => user.id === action.payload.id
      );
      state.users.splice(updatedUserIndex, 1, action.payload.updatedUser);
      return {
        ...state,
        users: state.users,
      };
    }
    case 'countries/loaded': {
      return {
        ...state,

        countries: action.payload,
      };
    }
    case 'departments/loaded': {
      return {
        ...state,

        departments: action.payload,
      };
    }
    case 'statuses/loaded': {
      return {
        ...state,

        statuses: action.payload,
      };
    }

    case 'rejected': {
      return { ...state, error: action.payload };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function AppProvider({ children }: { children: ReactNode }) {
  const [appState, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await getJSON(`${API_URL}/users`);
        dispatch({ type: 'users/loaded', payload: users });

        const departments = await getJSON(`${API_URL}/departments`);
        dispatch({ type: 'departments/loaded', payload: departments });

        const countries = await getJSON(`${API_URL}/countries`);
        dispatch({ type: 'countries/loaded', payload: countries });

        const statuses = await getJSON(`${API_URL}/statuses`);
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

    setCurrentUser: useCallback(id => {
      dispatch({ type: 'user/set', payload: id });
    }, []),

    addUser(newUser) {
      addUserAPI(newUser);
      dispatch({ type: 'user/add', payload: newUser });
    },

    deleteUser: useCallback(id => {
      deleteUserAPI(id);
      dispatch({ type: 'user/delete', payload: id });
    }, []),
    updateUser(id, updatedUser) {
      updateUserAPI(id, updatedUser);
      dispatch({ type: 'user/update', payload: { id, updatedUser } });
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
