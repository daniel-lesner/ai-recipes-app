import { useParams, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";

export default function Recipe() {
  const { id } = useParams();

  const recipe = useStore((state) =>
    state.recipes.find((recipe) => recipe.id === id),
  );

  const toggleFavorite = useStore((state) => state.toggleFavorite);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20 px-4 relative">
      <Button className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm md:text-md font-medium bg-orange-500 hover:bg-orange-600 cursor-pointer">
        <Link to="/">Return</Link>
      </Button>
      {!recipe ? (
        <div className="justify-center text-center bg-white rounded-lg shadow-md py-4 px-8 mt-12 font-semibold">
          Recipe not found!
        </div>
      ) : (
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-6 gap-6">
          <div className="w-full md:w-1/2 md:shrink-0 md:sticky md:top-6 self-start">
            <img
              img={recipe.image}
              alt={recipe.name}
              className="w-full rounded-xl mb-4 object-cover aspect-square"
            />
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  {recipe.name}
                </h1>
                <p className="text-gray-600 text-sm md:text-md">
                  {recipe.time} min.
                </p>
              </div>
              <Heart
                onClick={() => toggleFavorite(recipe)}
                className={`w-5 h-5 cursor-pointer ${recipe.isFavorite ? "fill-purple-700" : "fill-gray-400"}`}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6 md:overflow-y-auto md:max-h-[80vh] pr-1">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Ingredients:
              </h2>
              <ul className="list-disc list-inside text-sm md:text-md text-gray-800 space-y-1">
                {recipe.ingredients?.map((ingredient, key) => (
                  <li key={key}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Instructions:
              </h2>
              <ol className="list-decimal list-inside text-sm md:text-md text-gray-800 space-y-2">
                {recipe.steps?.map((step, key) => (
                  <li key={key}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
