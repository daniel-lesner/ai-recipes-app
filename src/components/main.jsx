import RecipesContainer from "@/components/recipes-container";
import { useStore } from "@/store/store";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useTanstackQuery } from "@/hooks/useTanstackQuery";

export default function Main() {
  const { prompt, setPrompt, recipes, lastRecipes, setLastRecipes, isLoading } =
    useStore();
  const { mutate } = useTanstackQuery();

  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  const refreshSuggestions = () => {
    const previousRecipes = recipes.map((recipe) => recipe.name).join(", ");

    mutate(
      `Provide other options for ${prompt} and exclude already proposed recipes: ${previousRecipes}`,
    );
  };

  const resetSearch = () => {
    setPrompt("");
    setLastRecipes([]);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      {lastRecipes.length ? (
        <>
          <Button
            onClick={resetSearch}
            className="absolute top-30 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm md:text-md font-medium bg-orange-500 hover:bg-orange-600 cursor-pointer"
          >
            Favorites
          </Button>
          <RecipesContainer recipes={lastRecipes} title="Suggested Recipes" />
          <Button
            type="button"
            className="bg-purple-600 text-white font-semibold mt-8 px-6 py-2 rounded-xl hover:bg-purple-700 transition"
            onClick={refreshSuggestions}
          >
            I don't like these
          </Button>
        </>
      ) : (
        <>
          {favoriteRecipes.length ? (
            <RecipesContainer recipes={favoriteRecipes} title="Favourites" />
          ) : (
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-md py-4 px-8">
              <div className="font-semibold">No recipes!</div>
              <div>
                Please use the search and add recipes to your Favorites list!
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
