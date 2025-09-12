import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
// import EditorialGrid from '@/components/EditorialGrid';
import LatestDesigns from '@/components/LatestDesigns';
// import StoriesCarousel from '@/components/StoriesCarousel';
// import DiscoverHome from '@/components/DiscoverHome';
// import ShopBestsellers from '@/components/ShopBestsellers';
import OurExperience from '@/components/OurExperience';
import FeaturedProducts from '@/components/FeaturedProducts';
import StudioBanner from '@/components/StudioBanner';
// import BrandValues from '@/components/BrandValues';
import Footer from '@/components/Footer';

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
        <OurExperience />
        <FeaturedProducts />
        <StudioBanner />
        {/* <BrandValues /> */}
      </main>
      <Footer />
    </div>
  );
}