import { UserType } from '../contexts/userContext/AppContextTypes';

export async function getJSON(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Problem with fetching');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`${(err as Error).message}⛔️⛔️⛔️`);
  }
}

export async function sendJSON(url: string, upload: UserType) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(upload),
    });

    if (!res.ok) throw new Error('Problem with sending data to server');
  } catch (err) {
    console.error(`${(err as Error).message}⛔️⛔️⛔️`);
  }
}
export async function deleteJSON(url: string, id: string) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'Delete',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) throw new Error('Problem with delete data to server');
  } catch (err) {
    console.error(`${(err as Error).message}⛔️⛔️⛔️`);
  }
}
export async function updateJSON(url: string, id: string, upload: UserType) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(upload),
    });

    if (!res.ok)
      throw new Error('Problem with sending updating data in the server');
  } catch (err) {
    console.error(`${(err as Error).message}⛔️⛔️⛔️`);
  }
}
