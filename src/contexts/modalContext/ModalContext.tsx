import { createContext, useContext, useReducer } from 'react';
import {
  ActionType,
  ModalContextProviderProps,
  ModalContextValueType,
  ModalStateType,
} from './ModalContextTypes';

const ModalContext = createContext<ModalContextValueType | null>(null);

const initialState: ModalStateType = {
  modalStatus: 'closedModal',
};

function usersReducer(
  state: ModalStateType,
  action: ActionType
): ModalStateType {
  switch (action.type) {
    case 'modal/setStatus': {
      return {
        ...state,

        modalStatus: action.payload,
      };
    }
    case 'modal/close': {
      return {
        ...state,
        modalStatus: 'closedModal',
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function ModalProvider({ children }: ModalContextProviderProps) {
  const [appState, dispatch] = useReducer(usersReducer, initialState);

  const ctx: ModalContextValueType = {
    ...appState,

    setStatusModal(status) {
      dispatch({ type: 'modal/setStatus', payload: status });
    },
    closeModal() {
      dispatch({ type: 'modal/close' });
    },
  };

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>;
}

function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error(
      'ModalContext was used outside of the ModalContextContextProvider'
    );

  return context as ModalContextValueType;
}

export { ModalProvider, useModal };
