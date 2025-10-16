import AboutUsPage from '@/components/about/AboutUs'
import HistoryGraph from '@/components/about/HistoryGraph'
import MaterialsCarousel from '@/components/about/MaterialsCarousel'
import MaterialsPage from '@/components/about/MaterialsPage'
import OurHistoryPage from '@/components/about/OurHistory'
import ProductionProcessPage from '@/components/about/ProductionProcessPage'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'

const About = () => {
  return (
    <div className="min-h-screen bg-off-white pt-4">
      <Navbar />
      <AboutUsPage />
      <div className="flex flex-col lg:flex-row gap-20 w-4/5 mx-auto">
        <div className="w-full lg:w-1/2">
          <OurHistoryPage />
        </div>
        <div className="w-full lg:w-1/2">
          <HistoryGraph />
        </div>
      </div>

      <MaterialsCarousel />
      <MaterialsPage />
      <ProductionProcessPage />
      <Footer />
    </div>
  )
}

export default About