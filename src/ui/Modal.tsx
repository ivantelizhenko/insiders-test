import styled from 'styled-components';
import { ReactNode } from 'react';
import { useModal } from '../contexts/modalContext/ModalContext';
import { useSearchParams } from 'react-router';

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
  min-width: 72rem;
  max-width: 140rem;

  border: 1px solid #000;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.1);
  z-index: 100;
`;

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const { closeModal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    closeModal();
    searchParams.delete('id');
    setSearchParams(searchParams);
  }

  return (
    <Overlay onClick={handleClick}>
      <StyledModal onClick={e => e.stopPropagation()}>{children}</StyledModal>
    </Overlay>
  );
}

export default Modal;
