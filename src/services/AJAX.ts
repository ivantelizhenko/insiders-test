export async function AJAX(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Problem with fetching');
    const data = await res.json();
    console.log('one');
    return data;
  } catch (err) {
    console.log(err);
  }
}
