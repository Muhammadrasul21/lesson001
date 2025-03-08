import Recipe from "@/components/Recipe";

async function getRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  return res.json();
}

const RecipesPage = async () => {
  const { recipes } = await getRecipes();
  

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">🍽 Recipes</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
