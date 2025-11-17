import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

interface AllProductsViewProps {
  onProductSelect?: (product: UnifiedProduct) => void;
}

// Single unified products array with sequential IDs and essential fields only
const products: UnifiedProduct[] = [

  { id: 'rug-001', name: 'Aankhi Jhyal', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,899', style: 'Traditional Persian', imageUrl: '/assets/images/products/AankhiJhyal.jpg' },
  { id: 'rug-032', name: 'Retro', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Retro.jpg' },
  { id: 'rug-003', name: 'Baasn', material: 'Distressed Wool', size: "8'x10'", price: '$899', style: 'Vintage Distressed', imageUrl: '/assets/images/products/baasn.jpg' },
  { id: 'rug-004', name: 'Bayleaves', material: 'Wool Blend', size: "7'x9'", price: '$799', style: 'Modern Geometric', imageUrl: '/assets/images/products/BayLeaves.jpg' },
  { id: 'rug-005', name: 'Bubbles', material: 'Wool Blend', size: "8'x10'", price: '$1,049', style: 'Bohemian', imageUrl: '/assets/images/products/Bubbles.jpg' },
  { id: 'rug-006', name: 'Burning Rope', material: 'Wool Blend', size: "7'x9'", price: '$749', style: 'Minimal Scandinavian', imageUrl: '/assets/images/products/BurningRope.jpg' },
  { id: 'rug-007', name: 'Cells', material: 'Wool Blend', size: "8'x10'", price: '$1,199', style: 'Art Deco', imageUrl: '/assets/images/products/Cells.jpg' },
  { id: 'rug-008', name: 'Childhood', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,499', style: 'Traditional Persian', imageUrl: '/assets/images/products/Childhood.jpg' },
  { id: 'rug-010', name: 'Festival', material: 'Synthetic Blend', size: "8'x10'", price: '$1,149', style: 'Modern Contemporary', imageUrl: '/assets/images/products/Festival.jpg' },
  { id: 'rug-011', name: 'Fountain Water', material: 'Distressed Wool', size: "7'x9'", price: '$899', style: 'Vintage Distressed', imageUrl: '/assets/images/products/FountainWater.jpg' },
  { id: 'rug-012', name: 'Gurung', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/Gurung.jpg' },
  { id: 'rug-013', name: 'Holi', material: 'Shag Wool', size: "8'x10'", price: '$1,049', style: 'Moroccan Shag', imageUrl: '/assets/images/products/Holi.jpg' },
  { id: 'rug-014', name: 'Imagination', material: 'Hand-tufted Wool', size: "7'x9'", price: '$849', style: 'Hand Tufted', imageUrl: '/assets/images/products/Imagination.jpg' },
  { id: 'rug-016', name: 'Jungle Tribes', material: 'Synthetic Blend', size: "6'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: '/assets/images/products/JungleTribes.jpg' },
  { id: 'rug-017', name: 'Lakhe Face', material: 'Wool Blend', size: "6'x9'", price: '$799', style: 'Minimal Scandinavian', imageUrl: '/assets/images/products/LakheFace.jpg' },
  { id: 'rug-018', name: 'Majesty', material: 'Wool Blend', size: "5'x8'", price: '$699', style: 'Bohemian', imageUrl: '/assets/images/products/Majesty.jpg' },
  { id: 'rug-019', name: 'Manaslu Circuit', material: 'Synthetic Blend', size: "6'x9'", price: '$879', style: 'Modern Contemporary', imageUrl: '/assets/images/products/ManasluCircut.jpg' },
  { id: 'rug-020', name: 'Maze', material: 'Hand-knotted Wool', size: "7'x9'", price: '$1,999', style: 'Traditional Persian', imageUrl: '/assets/images/products/Maze.jpg' },
  { id: 'rug-021', name: 'Mirror', material: 'Distressed Wool', size: "6'x9'", price: '$749', style: 'Vintage Distressed', imageUrl: '/assets/images/products/Mirror.jpg' },
  { id: 'rug-023', name: 'Monkey Temple', material: 'Flatweave Wool', size: "5'x8'", price: '$629', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/MonkeyTemple.jpg' },
  { id: 'rug-024', name: 'Morning Sun', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,599', style: 'Traditional Persian', imageUrl: '/assets/images/products/MorningSun.jpg' },
  { id: 'rug-025', name: 'Nagh Daha', material: 'Wool Blend', size: "9'x12'", price: '$1,599', style: 'Modern Contemporary', imageUrl: '/assets/images/products/NaghDaha.jpg' },
  { id: 'rug-026', name: 'Namche Bazar', material: 'Wool Blend', size: '2\'6"x10\'', price: '$399', style: 'Modern Geometric', imageUrl: '/assets/images/products/NamcheBazar.jpg' },
  { id: 'rug-027', name: 'On Board', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,399', style: 'Traditional Persian', imageUrl: '/assets/images/products/OnBoard.jpg' },
  { id: 'rug-028', name: 'On The Road', material: 'Synthetic Blend', size: "7'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: '/assets/images/products/OnTheRoad.jpg' },
  { id: 'rug-029', name: 'Begnas Lake', material: 'Distressed Wool', size: "8'x11'", price: '$899', style: 'Vintage Distressed', imageUrl: '/assets/images/products/BegnasLake.png' },
  { id: 'rug-030', name: 'Path', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/Path.jpg' },
  { id: 'rug-031', name: 'Rain Forest', material: 'Shag Wool', size: "7'x9'", price: '$849', style: 'Moroccan Shag', imageUrl: '/assets/images/products/RainForest.jpg' },
  { id: 'rug-002', name: 'Attraction', material: 'Synthetic Blend', size: "8'x10'", price: '$1,299', style: 'Modern Contemporary', imageUrl: '/assets/images/products/Attraction.jpg' },
  { id: 'rug-033', name: 'Sherpa Love', material: 'Synthetic Fiber', size: "6'x9'", price: '$399', style: 'Patio Deck', imageUrl: '/assets/images/products/SherpaLove.jpg' },
  { id: 'rug-034', name: 'Shreepanch', material: 'Polypropylene', size: "7'x9'", price: '$549', style: 'Weather Resistant', imageUrl: '/assets/images/products/Shreepanch.jpg' },
  { id: 'rug-035', name: 'Shyala', material: 'Synthetic Fiber', size: "8'x10'", price: '$429', style: 'Patio Deck', imageUrl: '/assets/images/products/Shyala.jpg' },
  { id: 'rug-036', name: 'Sweet16', material: 'Polypropylene', size: "6'x9'", price: '$399', style: 'Modern Geometric', imageUrl: '/assets/images/products/Sweet16.jpg' },
  { id: 'rug-037', name: 'Terai Farm', material: 'Polypropylene', size: "7'x9'", price: '$469', style: 'Vintage Distressed', imageUrl: '/assets/images/products/TeraiFarm.jpg' },
  { id: 'rug-038', name: 'Thoughts', material: 'Flatweave Poly', size: "6'x9'", price: '$389', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/Thoughts.jpg' },
  { id: 'rug-039', name: 'Tides', material: 'Synthetic Shag', size: "6'x9'", price: '$449', style: 'Moroccan Shag', imageUrl: '/assets/images/products/Tides.jpg' },
  { id: 'rug-040', name: 'Trek', material: 'Hand-woven Wool', size: "9'x12'", price: '$3,299', style: 'Handmade Artisan', imageUrl: '/assets/images/products/Trek.jpg' },
  { id: 'rug-041', name: 'Tsum Valley Patan', material: 'Aged Wool', size: "8'x10'", price: '$2,799', style: 'Antique Reproduction', imageUrl: '/assets/images/products/TsumValleyPatan.jpg' },
  { id: 'rug-042', name: 'Undefined Universe', material: 'Wool Blend', size: 'Custom', price: 'Quote', style: 'Custom Made', imageUrl: '/assets/images/products/UndefinedUniverse.jpg' },
  { id: 'rug-043', name: 'Vines', material: 'Wool & Silk', size: "8'x10'", price: '$4,499', style: 'Artist Limited', imageUrl: '/assets/images/products/Vines.jpg' },
  { id: 'rug-044', name: 'Water Brust', material: 'Jute & Cotton', size: "8'x10'", price: '$899', style: 'Natural Fiber', imageUrl: '/assets/images/products/WaterBrust.jpg' },
  { id: 'rug-045', name: 'Water Coin', material: 'Wool Blend', size: "7'x9'", price: '$1,999', style: 'Designer Collaboration', imageUrl: '/assets/images/products/WaterCoin.jpg' },
  { id: 'rug-046', name: 'Weave', material: 'Wool & Silk', size: "8'x10'", price: '$3,299', style: 'Art Inspired', imageUrl: '/assets/images/products/Weave.jpg' },
  { id: 'rug-047', name: 'Pari', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Pari.jpg' },
  { id: 'rug-048', name: 'Chakati', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Chakati.jpg' },
  { id: 'rug-049', name: 'Chino', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Chino.jpg' },
  { id: 'rug-050', name: 'Kaath', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Kaath.jpg' },
  { id: 'rug-051', name: 'Landmark', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Landmark.jpg' },
  { id: 'rug-052', name: 'Paisa', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Paisa.jpg' },
  { id: 'rug-053', name: 'Ping', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Ping.jpg' },
  { id: 'rug-054', name: 'Purano Jhyal', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/PuranoJhyal.jpg' },
  { id: 'rug-055', name: 'Smoke', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Smoke.jpg' },
  { id: 'rug-056', name: 'Mandro', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Mandro.png' },
  { id: 'rug-057', name: 'Tihar', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Tihar.jpg' },
  { id: 'rug-058', name: 'The Wall', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/TheWall.jpg' },
  { id: 'rug-059', name: 'Ring', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Ring.jpg' },
  { id: 'rug-060', name: 'Lalitpur', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Lalitpur.jpg' },
  { id: 'rug-061', name: 'Broken Mirror', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/BrokenMirror.jpg' },
  { id: 'rug-062', name: 'Illusion', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Illusion.jpg' },
  { id: 'rug-063', name: 'Beehive', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Beehive.jpg' },
  { id: 'rug-064', name: 'Kunda', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Kunda.jpg' },
  { id: 'rug-065', name: 'Budi Aunla', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/BudiAunla.jpg' },
  { id: 'rug-066', name: 'Sukool', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Sukool.jpg' },
  { id: 'rug-067', name: 'Water Lilies', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/WaterLilies.jpg' },
  { id: 'rug-068', name: 'Birendra Taal', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/BirendraTaal.jpg' },
  { id: 'rug-069', name: 'Echo', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Echo.jpg' },
  { id: 'rug-070', name: 'Kapaal', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Kapaal.jpg' },
  { id: 'rug-071', name: 'Phulchoki', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Phulchoki.jpg' },
  { id: 'rug-072', name: 'Thaali', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Thaali.jpg' },


];

const AllProductsView = ({ onProductSelect }: AllProductsViewProps) => {
  const handleProductClick = (product: UnifiedProduct) => {
    onProductSelect?.(product);
  };

  return (
   <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
  {/* Centered Image Section */}
  <div className="bg-[url('/public/assets/images/color-customizer/colorbox.png')] flex justify-center items-center mb-6">
    <img
      src="/assets/images/color-customizer/ColorCustomizer.png"
      alt="Color Customizer"
      className="w-[300px] h-[100px] object-contain mb-3 mt-3"
    />
  </div>

  {/* Product Info */}
  {/* <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
    <div className="text-charcoal/60 text-sm text-center sm:text-left">
      <span className="font-medium text-charcoal">{products.length}</span> products found
    </div>
  </div> */}

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onProductClick={handleProductClick}
      />
    ))}
  </div>
</div>

  );
};

export default AllProductsView;
export type { AllProductsViewProps };

