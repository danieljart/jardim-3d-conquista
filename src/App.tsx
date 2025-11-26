import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicosPage from "./pages/ServicosPage";
import FachadasPage from "./pages/FachadasPage";
import CenografiaPage from "./pages/CenografiaPage";
import AmbientesPage from "./pages/AmbientesPage";
import PersonalizadosPage from "./pages/PersonalizadosPage";
import GaleriaPage from "./pages/GaleriaPage";
import SobrePage from "./pages/SobrePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/servicos/fachadas" element={<FachadasPage />} />
          <Route path="/servicos/cenografia" element={<CenografiaPage />} />
          <Route path="/servicos/ambientes" element={<AmbientesPage />} />
          <Route path="/servicos/personalizados" element={<PersonalizadosPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
