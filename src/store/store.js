import { persist } from "zustand/middleware";
import { create } from "zustand";
import { toast } from "sonner";

export const useStore = create(
  persist(
    (set, get) => ({
      apiKey: "",
      setApiKey: (value) => set({ apiKey: value }),
      prompt: "",
      setPrompt: (value) => set({ prompt: value }),
      recipes: [],
      setRecipes: (value) => set({ recipes: value }),
      updateRecipe: (updatedRecipe) =>
        set((state) => {
          const recipes = [...state.recipes];

          const index = state.recipes.findIndex(
            (recipe) => recipe.id === updatedRecipe.id,
          );

          recipes[index] = updatedRecipe;

          return { recipes };
        }),
      lastRecipes: [],
      setLastRecipes: (value) => set({ lastRecipes: value }),
      toggleFavorite: (recipe) => {
        toast.success(
          `Recipe has been ${recipe.isFavorite ? "removed" : "added"} successfully!`,
        );

        get().updateRecipe({ ...recipe, isFavorite: !recipe.isFavorite });
      },
      isLoading: false,
      setIsLoading: (value) => set({ isLoading: value }),
    }),
    {
      name: "storage",
      partialize: (state) => ({
        apiKey: state.apiKey,
        recipes: state.recipes,
      }),
    },
  ),
);
