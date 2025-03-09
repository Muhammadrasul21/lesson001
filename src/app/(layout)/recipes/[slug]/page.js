import Image from "next/image";
import React from "react";

const RecipeDetail = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`https://dummyjson.com/recipes/${slug}`);
  const payload = await res.json();

  return (
    <div className="container w-full text-white flex justify-center gap-20 p-4">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={payload.image}
          alt={payload.name}
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="grid grid-cols-1">
        <div className="flex justify-between gap-20">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              {payload.name}
            </h3>
            <p className="text-gray-400 text-sm">Cuisine: {payload.cuisine}</p>
            <p className="text-gray-400 text-sm">
              Prep Time: {payload.prepTimeMinutes} min
            </p>
            <p className="text-gray-400 text-sm">
              Cook Time: {payload.cookTimeMinutes} min
            </p>
            <p className="text-gray-400 text-sm">
              Servings: {payload.servings}
            </p>
            <p className="mt-4">🔥 Calories: {payload.caloriesPerServing}</p>
            <p>
              ⭐ {payload.rating} ({payload.reviewCount} reviews)
            </p>
          </div>

          {payload.ingredients.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Ingredients:
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-400">
                {payload.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex ">
          {payload.instructions.length > 0 && (
            <div className="max-w-[350px]">
              <h4 className="text-lg font-semibold text-cyan-400">
                Instructions:
              </h4>
              <ol className="list-decimal list-inside text-sm text-gray-400">
                {payload.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {payload.tags.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-cyan-400">Tags:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {payload.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-500 text-white px-2 py-1 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
