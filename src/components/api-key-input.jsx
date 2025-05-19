import { Input } from "@/components/ui/input";
import { useStore } from "@/store/store";

export function ApiKeyInput() {
  const { setApiKey } = useStore();

  const handleInputSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.apiKey?.value;

    if (value) setApiKey(value);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto p-8">
      <form onSubmit={handleInputSubmit}>
        <Input
          name="apiKey"
          type="text"
          placeholder="Paste your Groq API and press Enter"
          className="pr-20 rounded-full"
        />
      </form>
    </div>
  );
}
