import React from "react";
import { InputWithButton } from "@/components/ui/input-with-button";

export default function Header() {
  const handleInputSubmit = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <div className="p-8">
      <InputWithButton handleInputSubmit={handleInputSubmit} />
    </div>
  );
}
