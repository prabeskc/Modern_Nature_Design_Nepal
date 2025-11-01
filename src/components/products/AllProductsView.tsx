import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

interface AllProductsViewProps {
  onProductSelect?: (product: UnifiedProduct) => void;
}

// Single unified products array with sequential IDs and essential fields only
const products: UnifiedProduct[] = [

  { id: 'rug-001', name: 'Aankhi Jhyal', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,899', style: 'Traditional Persian', imageUrl: '/public/assets/images/products/AankhiJhyal.jpg' },
  { id: 'rug-002', name: 'Attraction', material: 'Synthetic Blend', size: "8'x10'", price: '$1,299', style: 'Modern Contemporary', imageUrl: '/public/assets/images/products/Attraction.jpg' },
  { id: 'rug-003', name: 'Bamboos', material: 'Distressed Wool', size: "8'x10'", price: '$899', style: 'Vintage Distressed', imageUrl: '/public/assets/images/products/bamboos.jpg' },
  { id: 'rug-004', name: 'Bayleaves', material: 'Wool Blend', size: "7'x9'", price: '$799', style: 'Modern Geometric', imageUrl: '/public/assets/images/products/BayLeaves.jpg' },
  { id: 'rug-005', name: 'Bubbles', material: 'Wool Blend', size: "8'x10'", price: '$1,049', style: 'Bohemian', imageUrl: '/public/assets/images/products/Bubbles.jpg' },
  { id: 'rug-006', name: 'Burning Rope', material: 'Wool Blend', size: "7'x9'", price: '$749', style: 'Minimal Scandinavian', imageUrl: '/public/assets/images/products/BurningRope.jpg' },
  { id: 'rug-007', name: 'Cells', material: 'Wool Blend', size: "8'x10'", price: '$1,199', style: 'Art Deco', imageUrl: '/public/assets/images/products/Cells.jpg' },
  { id: 'rug-008', name: 'Childhood', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,499', style: 'Traditional Persian', imageUrl: '/public/assets/images/products/Childhood.jpg' },
  { id: 'rug-009', name: 'Farmhouse', material: 'Wool Blend', size: "8'x10'", price: '$999', style: 'Modern Geometric', imageUrl: '/public/assets/images/products/FarmHouse.jpg' },
  { id: 'rug-010', name: 'Festival', material: 'Synthetic Blend', size: "8'x10'", price: '$1,149', style: 'Modern Contemporary', imageUrl: '/public/assets/images/products/Festival.jpg' },
  { id: 'rug-011', name: 'Fountain Water', material: 'Distressed Wool', size: "7'x9'", price: '$899', style: 'Vintage Distressed', imageUrl: '/public/assets/images/products/FountainWater.jpg' },
  { id: 'rug-012', name: 'Gurung', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: '/public/assets/images/products/Gurung.jpg' },
  { id: 'rug-013', name: 'Holi', material: 'Shag Wool', size: "8'x10'", price: '$1,049', style: 'Moroccan Shag', imageUrl: '/public/assets/images/products/Holi.jpg' },
  { id: 'rug-014', name: 'Imagination', material: 'Hand-tufted Wool', size: "7'x9'", price: '$849', style: 'Hand Tufted', imageUrl: '/public/assets/images/products/Imagination.jpg' },
  { id: 'rug-015', name: 'Jungle Safari', material: 'Hand-knotted Wool', size: "8'x10'", price: '$2,199', style: 'Traditional Persian', imageUrl: '/public/assets/images/products/JungleSafari.jpg' },
  { id: 'rug-016', name: 'Jungle Tribes', material: 'Synthetic Blend', size: "6'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: '/public/assets/images/products/JungleTribes.jpg' },
  { id: 'rug-017', name: 'Lakhe Face', material: 'Wool Blend', size: "6'x9'", price: '$799', style: 'Minimal Scandinavian', imageUrl: '/public/assets/images/products/LakheFace.jpg' },
  { id: 'rug-018', name: 'Majesty', material: 'Wool Blend', size: "5'x8'", price: '$699', style: 'Bohemian', imageUrl: '/public/assets/images/products/Majesty.jpg' },
  { id: 'rug-019', name: 'Manaslu Circuit', material: 'Synthetic Blend', size: "6'x9'", price: '$879', style: 'Modern Contemporary', imageUrl: '/public/assets/images/products/ManasluCircut.jpg' },
  { id: 'rug-020', name: 'Maze', material: 'Hand-knotted Wool', size: "7'x9'", price: '$1,999', style: 'Traditional Persian', imageUrl: '/public/assets/images/products/Maze.jpg' },
  { id: 'rug-021', name: 'Mirror', material: 'Distressed Wool', size: "6'x9'", price: '$749', style: 'Vintage Distressed', imageUrl: '/public/assets/images/products/Mirror.jpg' },
  { id: 'rug-022', name: 'Modern Fern', material: 'Shag Wool', size: "6'x9'", price: '$849', style: 'Moroccan Shag', imageUrl: '/public/assets/images/products/ModernFern.jpg' },
  { id: 'rug-023', name: 'Monkey Temple', material: 'Flatweave Wool', size: "5'x8'", price: '$629', style: 'Flatweave Kilim', imageUrl: '/public/assets/images/products/MonkeyTemple.jpg' },
  { id: 'rug-024', name: 'Morning Sun', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,599', style: 'Traditional Persian', imageUrl: '/public/assets/images/products/MorningSun.jpg' },
  { id: 'rug-025', name: 'Nagh Daha', material: 'Wool Blend', size: "9'x12'", price: '$1,599', style: 'Modern Contemporary', imageUrl: '/public/assets/images/products/NaghDaha.jpg' },
  { id: 'rug-026', name: 'Namche Bazar', material: 'Wool Blend', size: '2\'6"x10\'', price: '$399', style: 'Modern Geometric', imageUrl: '/public/assets/images/products/NamcheBazar.jpg' },
  { id: 'rug-027', name: 'On Board', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,399', style: 'Traditional Persian', imageUrl: '/public/assets/images/products/OnBoard.jpg' },
  { id: 'rug-028', name: 'On The Road', material: 'Synthetic Blend', size: "7'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: '/public/assets/images/products/OnTheRoad.jpg' },
  { id: 'rug-029', name: 'Paint', material: 'Distressed Wool', size: "8'x11'", price: '$899', style: 'Vintage Distressed', imageUrl: '/public/assets/images/products/Paint.jpg' },
  { id: 'rug-030', name: 'Path', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: '/public/assets/images/products/Path.jpg' },
  { id: 'rug-031', name: 'Rain Forest', material: 'Shag Wool', size: "7'x9'", price: '$849', style: 'Moroccan Shag', imageUrl: '/public/assets/images/products/RainForest.jpg' },
  { id: 'rug-032', name: 'Retro', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/public/assets/images/products/Retro.jpg' },
  { id: 'rug-033', name: 'Sherpa Love', material: 'Synthetic Fiber', size: "6'x9'", price: '$399', style: 'Patio Deck', imageUrl: '/public/assets/images/products/SherpaLove.jpg' },
  { id: 'rug-034', name: 'Shreepanch', material: 'Polypropylene', size: "7'x9'", price: '$549', style: 'Weather Resistant', imageUrl: '/public/assets/images/products/Shreepanch.jpg' },
  { id: 'rug-035', name: 'Shyala', material: 'Synthetic Fiber', size: "8'x10'", price: '$429', style: 'Patio Deck', imageUrl: '/public/assets/images/products/Shyala.jpg' },
  { id: 'rug-036', name: 'Sweet16', material: 'Polypropylene', size: "6'x9'", price: '$399', style: 'Modern Geometric', imageUrl: '/public/assets/images/products/Sweet16.jpg' },
  { id: 'rug-037', name: 'Terai Farm', material: 'Polypropylene', size: "7'x9'", price: '$469', style: 'Vintage Distressed', imageUrl: '/public/assets/images/products/TeraiFarm.jpg' },
  { id: 'rug-038', name: 'Thoughts', material: 'Flatweave Poly', size: "6'x9'", price: '$389', style: 'Flatweave Kilim', imageUrl: '/public/assets/images/products/Thoughts.jpg' },
  { id: 'rug-039', name: 'Tides', material: 'Synthetic Shag', size: "6'x9'", price: '$449', style: 'Moroccan Shag', imageUrl: '/public/assets/images/products/Tides.jpg' },
  { id: 'rug-040', name: 'Trek', material: 'Hand-woven Wool', size: "9'x12'", price: '$3,299', style: 'Handmade Artisan', imageUrl: '/public/assets/images/products/Trek.jpg' },
  { id: 'rug-041', name: 'Tsum Valley Patan', material: 'Aged Wool', size: "8'x10'", price: '$2,799', style: 'Antique Reproduction', imageUrl: '/public/assets/images/products/TsumValleyPatan.jpg' },
  { id: 'rug-042', name: 'Undefined Universe', material: 'Wool Blend', size: 'Custom', price: 'Quote', style: 'Custom Made', imageUrl: '/public/assets/images/products/UndefinedUniverse.jpg' },
  { id: 'rug-043', name: 'Vines', material: 'Wool & Silk', size: "8'x10'", price: '$4,499', style: 'Artist Limited', imageUrl: '/public/assets/images/products/Vines.jpg' },
  { id: 'rug-044', name: 'Water Brust', material: 'Jute & Cotton', size: "8'x10'", price: '$899', style: 'Natural Fiber', imageUrl: '/public/assets/images/products/WaterBrust.jpg' },
  { id: 'rug-045', name: 'Water Coin', material: 'Wool Blend', size: "7'x9'", price: '$1,999', style: 'Designer Collaboration', imageUrl: '/public/assets/images/products/WaterCoin.jpg' },
  { id: 'rug-046', name: 'Weave', material: 'Wool & Silk', size: "8'x10'", price: '$3,299', style: 'Art Inspired', imageUrl: '/public/assets/images/products/Weave.jpg' }
];

const AllProductsView = ({ onProductSelect }: AllProductsViewProps) => {
  const handleProductClick = (product: UnifiedProduct) => {
    onProductSelect?.(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-charcoal">All Products</h2>
          <p className="text-charcoal/60 text-sm mt-1">Explore our complete collection</p>
        </div>
        <div className="text-charcoal/60 text-sm">
          <span className="font-medium text-charcoal">{products.length}</span> products found
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onProductClick={handleProductClick} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsView;
export type { AllProductsViewProps };

