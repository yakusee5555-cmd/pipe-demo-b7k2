import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, MobileCallBar, ScrollToTop } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Areas from "./pages/Areas";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white pb-[calc(3.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}
