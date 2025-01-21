import styled from 'styled-components';
import { useAppState } from '../contexts/userContext/AppContext';
import { ReactNode } from 'react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 99;
`;

const StyledModal = styled.div`
  width: 75%;
  background-color: #fff;
  position: absolute;
  top: 20rem;
  right: 50%;
  transform: translatex(50%);
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.1);
  z-index: 100;
`;

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const { closeModal } = useAppState();

  return (
    <Overlay onClick={closeModal}>
      <StyledModal onClick={e => e.stopPropagation()}>{children}</StyledModal>
    </Overlay>
  );
}

export default Modal;
