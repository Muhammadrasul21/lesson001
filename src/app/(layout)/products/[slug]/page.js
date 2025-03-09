import Image from "next/image";
import React from "react";

const Detail = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`https://dummyjson.com/products/${slug}`);
  const payload = await res.json();

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <Image
          alt={payload.title}
          src={payload.thumbnail}
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-100">{payload.title}</h1>
        <p className="text-gray-300">{payload.description}</p>

        <div className="text-xl font-semibold text-cyan-500">
          ${payload.price}{" "}
          <span className="text-red-500 text-sm line-through">
            $
            {(
              payload.price +
              (payload.price * payload.discountPercentage) / 100
            ).toFixed(2)}
          </span>
        </div>

        <p className="text-gray-300">
          <strong>Category:</strong> {payload.category}
        </p>
        <p className="text-gray-300">
          <strong>Brand:</strong> {payload.brand}
        </p>

        <p className="text-gray-500">
          <strong>Stock:</strong> {payload.stock} left
        </p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 m-auto text-white font-bold py-2 px-4 rounded cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
