import React from "react";
import { ApiKeyInput } from "@/components/api-key-input";
import { SearchBar } from "@/components/search-bar";
import { useStore } from "@/store/store";

export default function Header() {
  const { apiKey } = useStore();

  if (!apiKey) return <ApiKeyInput />;

  return <SearchBar />;
}
