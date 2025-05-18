import React from "react";
import { SearchBar } from "@/components/search-bar";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store/store";

export default function Header() {
  const { apiKey, setApiKey } = useStore();

  const handleInputSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.apiKey?.value;

    if (value) setApiKey(value);
  };

  if (!apiKey) {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto p-8">
        <form onSubmit={handleInputSubmit}>
          <Input
            name="apiKey"
            type="text"
            placeholder="Please enter your Groq API key and press enter to continue"
            className="pr-20 rounded-full"
          />
        </form>
      </div>
    );
  }
  return <SearchBar />;
}
