import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import ChatbotWidget from "@/components/home/ChatbotWidget";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MajesticPersian from "./components/products/Customize/MajesticPersian";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />

        <Route path="/customize/majesticpersian" element={<MajesticPersian />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ChatbotWidget />
    </Router>
  );
}
