import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewIndex from "./pages/NewIndex";
import Epilepsy from "./pages/services/Epilepsy";
import Headache from "./pages/services/Headache";
import Stroke from "./pages/services/Stroke";
import MovementDisorders from "./pages/services/MovementDisorders";
import MemoryDisorders from "./pages/services/MemoryDisorders";
import Neuropathy from "./pages/services/Neuropathy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewIndex />} />
          <Route path="/services/epilepsy" element={<Epilepsy />} />
          <Route path="/services/headache" element={<Headache />} />
          <Route path="/services/stroke" element={<Stroke />} />
          <Route path="/services/movement-disorders" element={<MovementDisorders />} />
          <Route path="/services/memory-disorders" element={<MemoryDisorders />} />
          <Route path="/services/neuropathy" element={<Neuropathy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
