
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import ServicePage from '@/components/services/Service'
import MaterialsCarousel from '@/components/about/MaterialsCarousel'


const Services = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <ServicePage />
      {/* <div className='bg-gradient-to-b from-[#8B5E3C] to-[#87CEEB] h-[200px]'/> */}
      <MaterialsCarousel />
      <Footer />
    </div>
  )
}

export default Services