const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function fetchFromAPI(endpoint) {
  const res = await fetch(`${API_BASE}/${endpoint}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return res.json();
}

export async function getPosts() {
  return fetchFromAPI("posts");
}
export async function getTodos() {
  return fetchFromAPI("todos");
}
export async function getUsers() {
  return fetchFromAPI("users");
}
