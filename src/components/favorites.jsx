import RecipeCard from "@/components/recipe-card";

export default function Favorites({ recipes }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-left">Favorites</h1>
      <div className="space-y-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
