import Image from "next/image";

const Recipe = ({ recipe }) => {
  return (
    <div className="p-5 bg-[#000] text-white shadow-lg border border-gray-900 rounded-lg 
      hover:shadow-xl transition duration-300 ease-in-out max-w-md">
      
      <div className="w-full h-[250px] overflow-hidden rounded-t-lg">
        <Image
          src={recipe.image}
          width={500}
          height={250}
          className="w-full h-full object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-cyan-400">{recipe.name}</h3>
        <p className="text-gray-400 text-sm">🍽 {recipe.cuisine} taomi</p>

        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <p>🔥 {recipe.caloriesPerServing} kaloriya</p>
          <p>⭐ {recipe.rating} ({recipe.reviewCount} ta sharh)</p>
        </div>

        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <p>🕒 Tayyorlash: {recipe.prepTimeMinutes} min</p>
          <p>👨‍🍳 Pishirish: {recipe.cookTimeMinutes} min</p>
        </div>

        <p className="mt-2 text-sm text-gray-400">⚡ Qiyinlik darajasi: <span className="font-semibold text-cyan-400">{recipe.difficulty}</span></p>
        <p className="text-sm text-gray-400">🍴 Porsiya: {recipe.servings} ta</p>

        <div className="mt-4">
          <h4 className="text-md font-semibold text-cyan-400">🛒 Ingredientlar:</h4>
          <ul className="list-disc list-inside text-sm text-gray-400">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-md font-semibold text-cyan-400">👨‍🍳 Tayyorlash bosqichlari:</h4>
          <ol className="list-decimal list-inside text-sm text-gray-400">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium transition w-full">
          Batafsil ko‘rish
        </button>
      </div>
    </div>
  );
};

export default Recipe;
