import styled from 'styled-components';
import Form from '../components/form/Form';
import { Button } from '../components/buttons/Button';
import { useAppState } from '../contexts/userContext/AppContext';

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
`;

const ButtonBox = styled.div`
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: end;
`;

function AddUserModal() {
  const { closeModal } = useAppState();

  return (
    <Overlay onClick={closeModal}>
      <Modal>
        <Form />
        <ButtonBox>
          <Button width="20rem">Add User</Button>
          <Button width="10rem" onClick={closeModal}>
            Undo
          </Button>
        </ButtonBox>
      </Modal>
    </Overlay>
  );
}

export default AddUserModal;
