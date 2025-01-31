import { memo } from 'react';
import styled from 'styled-components';

import { useModal } from '../contexts/modalContext/ModalContext';

import Button from './Button';
import Modal from './Modal';
import Heading from './Heading';

const StyledConfirmModal = styled.div`
  display: flex;
  margin-top: 5rem;
  width: 100%;
  justify-content: center;
  gap: 8rem;
`;

type ConfirmModalProps = {
  handleAccept: () => void;
};

const ConfirmModal = memo(function ConfirmModal({
  handleAccept,
}: ConfirmModalProps) {
  const { closeModal } = useModal();

  return (
    <Modal>
      <Heading as="h2">Are you sure?</Heading>
      <StyledConfirmModal>
        <Button $width="20rem" onClick={handleAccept}>
          Yes
        </Button>
        <Button $width="20rem" onClick={closeModal}>
          No
        </Button>
      </StyledConfirmModal>
    </Modal>
  );
});

export default ConfirmModal;
