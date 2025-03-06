import Image from 'next/image';

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const payload = await res.json();
  return payload;
};

const Recipe = async () => {
  const payload = await getData();

  return (
    <div className="grid container mx-auto lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
      {payload?.products?.map((product) => (
        <div
          key={product.id}
          className="p-4 flex flex-col items-center font-semibold text-lg shadow-md relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:shadow-2xl hover:transition duration-300 ease-out"
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={320}
            height={250}
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
          />
          <h3 className="text-xl font-medium line-clamp-1">{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
