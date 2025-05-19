import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      apiKey: "",
      setApiKey: (value) => set({ apiKey: value }),
      prompt: "",
      setPrompt: (value) => set({ prompt: value }),
      recipes: [],
      setRecipes: (value) => set({ recipes: value }),
      getRecipeById: (id) => get().recipes.find((recipe) => recipe.id === id),
      toggleFavorite: (id) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id
              ? { ...recipe, isFavorite: !recipe.isFavorite }
              : recipe,
          ),
        })),
      lastRecipes: null,
      setLastRecipes: (value) => set({ lastRecipes: value }),
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
