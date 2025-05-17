import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "@/components/header";
import Main from "@/components/main";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
);
