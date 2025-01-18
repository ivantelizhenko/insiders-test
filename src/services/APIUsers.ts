import { UserType } from '../contexts/userContext/AppContextTypes';
import { API_URL } from '../utils/constants';
import { sendJSON } from './AJAX';

export async function addUserAPI(newUser: UserType) {
  const data = await sendJSON(`${API_URL}/users`, newUser);
  return data;
}
