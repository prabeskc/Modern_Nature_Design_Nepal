import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/home/HeroSection';
// import EditorialGrid from '@/components/EditorialGrid';
import LatestDesigns from '@/components/home/LatestDesigns';
// import StoriesCarousel from '@/components/StoriesCarousel';
// import DiscoverHome from '@/components/DiscoverHome';
// import ShopBestsellers from '@/components/ShopBestsellers';
import OurExperience from '@/components/home/OurExperience';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StudioBanner from '@/components/contact/StudioBanner';
// import BrandValues from '@/components/BrandValues';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        <HeroSection />
        {/* <EditorialGrid /> */}
        <LatestDesigns />
        {/* <StoriesCarousel /> */}
        {/* <DiscoverHome /> */}
        {/* <ShopBestsellers /> */}
        <FeaturedProducts />
        <OurExperience />
        <StudioBanner />
        {/* <BrandValues /> */}
      </main>
      <Footer />
    </div>
  );
}