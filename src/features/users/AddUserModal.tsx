import styled from 'styled-components';

import { useAppState } from '../../contexts/userContext/AppContext';

import AddUserForm from './AddUserForm';
import { Button } from '../../ui/Button';

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

const ButtonBox = styled.div`
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: end;
`;

function AddUserModal() {
  const { closeModal, addUser } = useAppState();

  // TODO: Reusable Modal Window

  function handleAdd() {
    const testUser = {
      id: Math.random().toString(),
      name: 'Ivan Telizhenko',
      status: {
        name: 'Active',
        value: 'ACTIVE',
      },
      department: {
        name: 'Information Technology',
        value: 'IT',
      },
      country: {
        name: 'Ukraine',
        value: 'UA',
      },
    };

    addUser(testUser);
  }

  return (
    <Overlay onClick={closeModal}>
      <Modal onClick={e => e.stopPropagation()}>
        <AddUserForm />
        <ButtonBox>
          <Button width="20rem" onClick={handleAdd}>
            Add User
          </Button>
          <Button width="10rem" onClick={closeModal}>
            Undo
          </Button>
        </ButtonBox>
      </Modal>
    </Overlay>
  );
}

export default AddUserModal;
