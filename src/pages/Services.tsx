
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import ServicePage from '@/components/services/Service'
import MaterialsCarousel from '@/components/about/MaterialsCarousel'


const Services = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <ServicePage />
      <MaterialsCarousel />
      <Footer />
    </div>
  )
}

export default Services