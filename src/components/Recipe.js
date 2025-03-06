import Image from "next/image";

const Recipe = ({ recipe }) => {
  return (
    <div className="p-5 bg-[#000] text-white shadow-lg border border-gray-900 rounded-lg 
      hover:shadow-xl transition duration-300 ease-in-out max-w-md">
      
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
        <p className="text-gray-400 text-sm">🍽 Cuisine: {recipe.cuisine}</p>

        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <p>🔥 Calories: {recipe.caloriesPerServing}</p>
          <p>⭐ {recipe.rating} ({recipe.reviewCount} reviews)</p>
        </div>

        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <p>🕒 Prep Time: {recipe.prepTimeMinutes} min</p>
          <p>👨‍🍳 Cook Time: {recipe.cookTimeMinutes} min</p>
        </div>

        <p className="mt-2 text-sm text-gray-400">
          ⚡ Difficulty: <span className="font-semibold text-cyan-400">{recipe.difficulty}</span>
        </p>
        <p className="text-sm text-gray-400">🍴 Servings: {recipe.servings}</p>

        {recipe.ingredients?.length > 0 && (
          <div className="mt-4">
            <h4 className="text-md font-semibold text-cyan-400">🛒 Ingredients:</h4>
            <ul className="list-disc list-inside text-sm text-gray-400">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {recipe.instructions?.length > 0 && (
          <div className="mt-4">
            <h4 className="text-md font-semibold text-cyan-400">👨‍🍳 Instructions:</h4>
            <ol className="list-decimal list-inside text-sm text-gray-400">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
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
