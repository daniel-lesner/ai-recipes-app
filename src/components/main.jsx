import RecipesContainer from "@/components/recipes-container";
import { useStore } from "@/store/store";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useTanstackQuery } from "@/hooks/useTanstackQuery";

export default function Main() {
  const { prompt, recipes, lastRecipes, isLoading } = useStore();
  const { mutate } = useTanstackQuery();

  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  const refreshSuggestions = () => {
    const previousRecipes = recipes.map((recipe) => recipe.name).join(", ");

    mutate(
      `Provide other options for ${prompt} and exclude already proposed recipes: ${previousRecipes}`,
    );
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      {lastRecipes ? (
        <>
          <RecipesContainer recipes={lastRecipes} title="Suggested Recipes" />
          <Button
            className="bg-purple-600 text-white font-semibold mt-8 px-6 py-2 rounded-xl hover:bg-purple-700 transition cursor-pointer"
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
    </>
  );
}
