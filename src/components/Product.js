import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div
      className="p-5 flex flex-col items-center font-semibold text-lg shadow-lg border 
      max-w-xs bg-[#000] rounded-lg hover:shadow-xl transition duration-300 ease-in-out border-gray-900"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
          className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        />
      </div>

      <h3 className="text-xl font-medium mt-3 text-white   line-clamp-1 cursor-pointer">
        {product.title}
      </h3>
      <p className=" font-semibold text-cyan-400 px-3 py-1 rounded-lg mt-2 cursor-pointer">
        ${product.price}
      </p>
    </div>
  );
};

export default Product;
