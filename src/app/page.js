import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const payload = await res.json();
  return payload;
};

const Product = async () => {
  const payload = await getData();

  return (
    <div className="grid container mx-auto lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
      {payload?.products?.map((product) => (
        <div
          key={product.id}
          className="p-5 flex flex-col items-center font-semibold text-lg shadow-lg border 
          bg-[#000] rounded-lg hover:shadow-xl transition duration-300 ease-in-out border-gray-900"
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={320}
              height={250}
              className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>

          <h3 className="text-xl font-medium mt-3 text-white line-clamp-1 cursor-pointer">
            {product.title}
          </h3>
          <p className="font-semibold text-cyan-400 px-3 py-1 rounded-lg mt-2 cursor-pointer">
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Product;
