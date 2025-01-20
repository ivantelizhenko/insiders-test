import { UserType } from '../contexts/userContext/AppContextTypes';
import { API_URL } from '../utils/constants';
import { deleteJSON, sendJSON } from './AJAX';

export async function addUserAPI(newUser: UserType) {
  const data = await sendJSON(`${API_URL}/users`, newUser);
  return data;
}

export async function deleteUserAPI(id: string) {
  const data = await deleteJSON(`${API_URL}/users`, id);
  return data;
}
