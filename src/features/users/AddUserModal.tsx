import { memo } from 'react';
import Modal from '../../ui/Modal';
import AddUserForm from './AddUserForm';

const AddUserModal = memo(function AddUserModal() {
  return (
    <Modal>
      <AddUserForm />
    </Modal>
  );
});

export default AddUserModal;
