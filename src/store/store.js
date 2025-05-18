import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      apiKey: "",
      setApiKey: (value) => set({ apiKey: value }),
      prompt: "",
      setPrompt: (value) => set({ prompt: value }),
      lastRecipes: null,
      setLastRecipes: (data) => set({ lastRecipes: data }),
      isLoading: false,
      setIsLoading: (val) => set({ isLoading: val }),
    }),
    {
      name: "storage",
      partialize: (state) => ({
        apiKey: state.apiKey,
      }),
    },
  ),
);
