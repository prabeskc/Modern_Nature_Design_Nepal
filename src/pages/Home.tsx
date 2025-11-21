import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/home/HeroSection';
import LatestDesigns from '@/components/home/LatestDesigns';
import OurExperience from '@/components/home/OurExperience';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Footer from '@/components/ui/Footer';
import InspirationGallery from '@/components/home/InspirationGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        <HeroSection />
        <InspirationGallery />
        <LatestDesigns />
        <FeaturedProducts />
        <OurExperience />
      </main>
      <Footer />
    </div>
  );
}