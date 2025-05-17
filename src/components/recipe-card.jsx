import { Heart } from "lucide-react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="flex items-center bg-gray-200 rounded-2xl p-4 shadow-md w-full">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-16 h-16 object-cover rounded-md mr-4"
      />
      <div className="flex-1">
        <div className="font-semibold text-black">{recipe.name}</div>
        <div className="text-sm text-black">{recipe.time} min.</div>
      </div>
      <Heart className="w-5 h-5 text-purple-700 fill-purple-700" />
    </div>
  );
}
