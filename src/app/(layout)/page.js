import { redirect } from "next/navigation";

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const payload = await res.json();
  return payload;
};

const Product = async () => {
  redirect("/products");
  return null;
};

export default Product;
