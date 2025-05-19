import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useStore } from "@/store/store";

export default function RecipeCard({ recipeId }) {
  const { toggleFavorite } = useStore();

  const recipe = useStore((state) => {
    return state.recipes.find((recipe) => recipe.id === recipeId);
  });

  return (
    <div className="flex items-center bg-gray-200 rounded-2xl p-4 shadow-md w-full">
      <Link to={`/recipe/${recipe.id}`} className="flex-1">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-16 h-16 object-cover rounded-md mr-4"
        />
        <div className="flex-1">
          <div className="font-semibold text-black">{recipe.name}</div>
          <div className="text-sm text-black">{recipe.time} min.</div>
        </div>
      </Link>
      <Heart
        onClick={() => toggleFavorite(recipe)}
        className={`w-5 h-5 cursor-pointer ${recipe.isFavorite ? "fill-purple-700" : "fill-gray-400"}`}
      />
    </div>
  );
}
