import { ReactNode } from 'react';

export type FiltersStateType = {
  [x: string]: string[];
};

export type FiltersContextValueType = FiltersStateType & {};

export type ActionType = null;

export type FiltersContextProviderProps = {
  children: ReactNode;
};
