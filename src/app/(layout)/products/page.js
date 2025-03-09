import Product from "@/components/Product";
import { getProducts } from "@/lib/api";

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
