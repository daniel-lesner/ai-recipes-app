import { InputWithButton } from "@/components/ui/input-with-button";
import { useStore } from "@/store/store";
import { useTanstackQuery } from "@/hooks/useTanstackQuery";

export function SearchBar() {
  const { prompt, setPrompt } = useStore();
  const { mutate } = useTanstackQuery();

  const handleInputSubmit = (inputValue) => {
    mutate(inputValue);
  };

  return (
    <div className="p-8">
      <InputWithButton
        value={prompt}
        setValue={setPrompt}
        handleInputSubmit={handleInputSubmit}
      />
    </div>
  );
}
