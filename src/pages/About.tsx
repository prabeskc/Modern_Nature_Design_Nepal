import AboutUsPage from "@/components/about/AboutUs";
import DyingProcessPage from "@/components/about/DyeingProcess";
import HistoryGraph from "@/components/about/HistoryGraph";
import MaterialsPage from "@/components/about/MaterialsPage";
import OurHistoryPage from "@/components/about/OurHistory";
import ProductionProcessPage from "@/components/about/ProductionProcessPage";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PhilosophyPage from "@/components/about/PhilosophyPage";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      setTimeout(() => {
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-off-white pt-4">
      <Navbar />

      <AboutUsPage />

      <div className="flex flex-col lg:flex-row gap-8 w-[90%] mx-auto mb-10">
        {/* TARGET SCROLL SECTION */}
        <div id="ourstory-section" className="w-full lg:w-45%">
          <OurHistoryPage />
        </div>

        <div className="w-full lg:w-45%">
          <HistoryGraph />
        </div>
      </div>

      <ProductionProcessPage />
      <DyingProcessPage />
      <PhilosophyPage />
      <Footer />
    </div>
  );
}
