import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Treatments from "./pages/Treatments.tsx";
import DoctorPage from "./pages/DoctorPage.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import NotFound from "./pages/NotFound.tsx";

import { Analytics } from "@vercel/analytics/react"

import { ScrollToTop } from "@/components/site/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Analytics />
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
