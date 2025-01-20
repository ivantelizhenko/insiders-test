import styled from 'styled-components';

import { useAppState } from '../../contexts/userContext/AppContext';

import AddUserForm from './AddUserForm';

const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 99;
`;

const Modal = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.1);
  z-index: 100;
`;

function AddUserModal() {
  const { closeModal } = useAppState();

  // TODO: Reusable Modal Window

  return (
    <Overlay onClick={closeModal}>
      <Modal onClick={e => e.stopPropagation()}>
        <AddUserForm />
      </Modal>
    </Overlay>
  );
}

export default AddUserModal;
