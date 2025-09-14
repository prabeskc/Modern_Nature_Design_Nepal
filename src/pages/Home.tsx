import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
// import EditorialGrid from '@/components/home/EditorialGrid';
import LatestDesigns from '@/components/home/LatestDesigns';
// import StoriesCarousel from '@/components/home/StoriesCarousel';
// import DiscoverHome from '@/components/home/DiscoverHome';
// import ShopBestsellers from '@/components/home/ShopBestsellers';
import OurExperience from '@/components/home/OurExperience';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StudioBanner from '@/components/home/StudioBanner';
// import BrandValues from '@/components/home/BrandValues';
import Footer from '@/components/home/Footer';

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