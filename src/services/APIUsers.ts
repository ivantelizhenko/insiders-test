import { UserType } from '../contexts/userContext/AppContextTypes';
import { API_URL } from '../utils/constants';
import { deleteJSON, sendJSON, updateJSON } from './AJAX';

export async function addUserAPI(newUser: UserType) {
  await sendJSON(`${API_URL}/users`, newUser);
}

export async function deleteUserAPI(id: string) {
  await deleteJSON(`${API_URL}/users`, id);
}

export async function updateUserAPI(id: string, updatedUser: UserType) {
  await updateJSON(`${API_URL}/users`, id, updatedUser);
}
