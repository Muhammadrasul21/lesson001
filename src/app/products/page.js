import Product from "@/components/Product";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", { cache: "no-store" });
  return res.json();
}

const ProductsPage = async () => {
  const { products } = await getProducts();

  return (
    <div className="grid container mx-auto lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;