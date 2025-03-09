const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const MAIN_API = process.env.NEXT_PUBLIC_MAIN_API_BASE;
export async function fetchFromAPI(endpoint, useMainApi = false) {
  const baseURL = useMainApi ? MAIN_API : API_BASE;
  const res = await fetch(`${baseURL}/${endpoint}`);

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

export async function getProducts() {
  return fetchFromAPI("products", true);
}
export async function getRecipes() {
  return fetchFromAPI("recipes", true);
}
export async function getUser() {
  return fetchFromAPI("users", true);
}
