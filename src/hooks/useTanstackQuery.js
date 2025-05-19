import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { useStore } from "@/store/store";

export const useTanstackQuery = () => {
  const {
    apiKey,
    setApiKey,
    setPrompt,
    recipes,
    setRecipes,
    setLastRecipes,
    setIsLoading,
  } = useStore();

  return useMutation({
    mutationFn: async (message) => {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama3-70b-8192",
          messages: [
            {
              role: "system",
              content:
                "Your response must simulate an API. Please return only a valid, parseable JSON and nothing else. Make sure you don't miss any characters that will make JSON.parse(response) return errors. For minutes, just return the number. For image, make sure that you return a valid URL. For steps, return an array of strings.",
            },
            {
              role: "user",
              content: `Get me a list of 5 recipes with their names, time, image (provide real image, could be something related to the recipe) and steps using this as prompt: ${message}`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );

      return JSON.parse(response.data.choices[0].message.content);
    },
    onMutate: () => setIsLoading(true),
    onSuccess: (data) => {
      const newRecipes = data.map((recipe) => ({
        ...recipe,
        id: crypto.randomUUID(),
        isFavorite: false,
      }));

      setRecipes([...recipes, ...newRecipes]);
      setLastRecipes(newRecipes);
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
    retry: (count, error) => {
      if ([401, 403, 422].includes(error?.response?.status)) {
        toast.error("Invalid API key. Please re-enter it");
        setApiKey("");
        setPrompt("");
        return false;
      }

      count++;

      if (count < 5) return true;

      toast.error("Something went wrong. Please try again");
      return false;
    },
  });
};
