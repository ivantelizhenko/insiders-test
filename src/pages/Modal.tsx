import styled from 'styled-components';

import {
  cloneElement,
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { ModalVariantsType } from '../contexts/userContext/AppContextTypes';

const StyledModal = styled.div``;

const StyledOverlay = styled.div``;

type ModalContextType = {
  openName: ModalVariantsType;
  open: (name: ModalVariantsType) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<ModalVariantsType>('closedModal');

  function close() {
    setOpenName('closedModal');
  }
  function open(name: ModalVariantsType) {
    setOpenName(name);
  }

  const ctx: ModalContextType = { openName, close, open };

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>;
}

type OpenPropsType = {
  children: ReactNode;
  opens: string;
};

function Open({ children, opens: opensWindowName }: OpenPropsType) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
    },
  });
}

Modal.Open = Open;
export default Modal;

// return (
//   <StyledOverlay>
//     <Button width="4.8rem">Close</Button>

//     <StyledModal>Modal</StyledModal>
//   </StyledOverlay>
// );
