import AboutUsPage from '@/components/about/AboutUs'
import DyingProcessPage from '@/components/about/DyeingProcess'
import HistoryGraph from '@/components/about/HistoryGraph'
import MaterialsCarousel from '@/components/about/MaterialsCarousel'
import MaterialsPage from '@/components/about/MaterialsPage'
import OurHistoryPage from '@/components/about/OurHistory'
import ProductionProcessPage from '@/components/about/ProductionProcessPage'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import PariLayer from '../components/products/Customize/PariLayer'
import { useState } from 'react'
import PhilosophyPage from '@/components/about/PhilosophyPage'



const About = () => {



  return (
    <div className="min-h-screen bg-off-white pt-4">
      <Navbar />
      <AboutUsPage />
      <div className="flex flex-col lg:flex-row gap-8 w-[90%] mx-auto mb-10">
        <div className="w-full lg:w-45%">
          <OurHistoryPage />
        </div>
        <div className="w-full lg:w-45%">
          <HistoryGraph />
        </div>
      </div>

      {/* <MaterialsCarousel /> */}
      <ProductionProcessPage />
      <DyingProcessPage />
      <PhilosophyPage />
      <Footer />

    </div>
  )
}

export default About