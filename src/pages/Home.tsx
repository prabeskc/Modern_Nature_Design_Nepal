import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/home/HeroSection';
import LatestDesigns from '@/components/home/LatestDesigns';
import OurExperience from '@/components/home/OurExperience';
import FeaturedProducts from '@/components/home/FeaturedProducts';
// import StudioBanner from '@/components/contact/StudioBanner';
// import EditorialGrid from '@/components/home/EditorialGrid';
// import StoriesCarousel from '@/components/home/StoriesCarousel';
// import DiscoverHome from '@/components/home/DiscoverHome';
// import ShopBestsellers from '@/components/home/ShopBestsellers';
// import BrandValues from '@/components/home/BrandValues';
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
        {/* <EditorialGrid /> 
        <StoriesCarousel />
        <DiscoverHome />
        <ShopBestsellers />
        <StudioBanner />
        <BrandValues /> */}
      </main>
      <Footer />
    </div>
  );
}