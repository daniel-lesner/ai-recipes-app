import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton({ value, setValue, handleInputSubmit }) {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const clearSearch = () => {
    setValue("");
  };

  const onInputSubmit = (e) => {
    e.preventDefault();

    handleInputSubmit(value);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
      <div className="relative">
        <form onSubmit={onInputSubmit}>
          <Input
            type="text"
            placeholder="What do you feel like eating?"
            className="pr-20 rounded-full"
            value={value}
            onChange={handleInputChange}
          />
          {value && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-10 top-0 h-full rounded-full"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full rounded-full"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
