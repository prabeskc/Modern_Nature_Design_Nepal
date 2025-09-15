
import AboutUsPage from '@/components/about/AboutUs'
import MaterialsPage from '@/components/about/MaterialsPage'
import OurHistoryPage from '@/components/about/OurHistory'
import ProductionProcessPage from '@/components/about/ProductionProcessPage'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-off-white">
          <Navbar />
          <AboutUsPage />
          <OurHistoryPage />
          <MaterialsPage />
          <ProductionProcessPage />
          <Footer />
        </div>
  )
}

export default About