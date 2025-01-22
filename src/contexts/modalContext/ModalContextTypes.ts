import { ReactNode } from 'react';

export type ModalVariantsType = 'closedModal' | 'addUser' | 'confirmation';

export type ModalStateType = { modalStatus: ModalVariantsType };

export type ModalContextValueType = ModalStateType & {
  setStatusModal: (status: ModalVariantsType) => void;
  closeModal: () => void;
};
export type SetStatusModalAction = {
  type: 'modal/setStatus';
  payload: ModalVariantsType;
};
export type CloseModalAction = {
  type: 'modal/close';
};

export type ActionType = SetStatusModalAction | CloseModalAction;

export type ModalContextProviderProps = {
  children: ReactNode;
};
