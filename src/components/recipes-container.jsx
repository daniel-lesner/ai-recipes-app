import RecipeCard from "@/components/recipe-card";

export default function RecipesContainer({ recipes, title }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-left">{title}</h1>
      <div className="space-y-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeId={recipe.id} />
        ))}
      </div>
    </div>
  );
}
