import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Header from "@/components/header";
import Main from "@/components/main";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
        <Main />
      </div>
      <Toaster richColors position="top-right" closeButton={true} />
    </QueryClientProvider>
  </StrictMode>,
);
