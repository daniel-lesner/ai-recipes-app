import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function InputWithButton({ handleInputSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const onInputSubmit = (e) => {
    e.preventDefault();

    handleInputSubmit(searchValue);
    clearSearch();
  };

  return (
    <div className="w-full md:w-1/3 mx-auto">
      <div className="relative">
        <form onSubmit={onInputSubmit}>
          <Input
            type="text"
            placeholder="What do you feel like eating?"
            className="pr-20 rounded-full"
            value={searchValue}
            onChange={handleInputChange}
          />
          {searchValue && (
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
