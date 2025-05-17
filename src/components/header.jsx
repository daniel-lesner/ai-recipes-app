import React from "react";
import { InputWithButton } from "@/components/ui/input-with-button";

function Header() {
  const handleInputSubmit = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <div className="p-4">
      <InputWithButton handleInputSubmit={handleInputSubmit} />
    </div>
  );
}

export default Header;
