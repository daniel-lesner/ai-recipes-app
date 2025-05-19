import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Toaster } from "sonner";
import Header from "@/components/header";
import Recipe from "@/components/recipe";
import Main from "@/components/main";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route path="/recipe/:id" element={<></>} />
        </Routes>
      </BrowserRouter>

      <Toaster richColors position="top-right" closeButton={true} />
    </QueryClientProvider>
  </StrictMode>,
);
