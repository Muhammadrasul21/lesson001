import Image from "next/image";

const Recipe = ({ recipe }) => {
  const maxIngredients = 5;
  const displayedIngredients =
    recipe.ingredients?.slice(0, maxIngredients) || [];
  const hasMoreIngredients = recipe.ingredients?.length > maxIngredients;

  return (
    <div className="p-5 bg-[#000] text-white shadow-lg border border-gray-900 rounded-lg hover:shadow-xl transition duration-300 ease-in-out max-w-md">
      <div className="w-full h-[250px] overflow-hidden rounded-t-lg">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={500}
          height={250}
          className="w-full h-full object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-cyan-400">{recipe.name}</h3>
        <p className="text-gray-400 text-sm"> Cuisine: {recipe.cuisine}</p>
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <p>🔥 Calories: {recipe.caloriesPerServing}</p>
          <p>
            ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
          </p>
        </div>
        {displayedIngredients.length > 0 && (
          <div className="mt-4">
            <h4 className="text-md font-semibold text-cyan-400">
              🛒 Ingredients:
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-400">
              {displayedIngredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {hasMoreIngredients && <li>...</li>}
            </ul>
          </div>
        )}
        <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium transition w-full hover:scale-105">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default Recipe;
