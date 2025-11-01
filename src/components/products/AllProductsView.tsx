import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

interface AllProductsViewProps {
  onProductSelect?: (product: UnifiedProduct) => void;
}

// Single unified products array with sequential IDs and essential fields only
const products: UnifiedProduct[] = [
  // Living Room (14)
  { id: 'rug-001', name: 'Majestic Persian Masterpiece', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,899', style: 'Traditional Persian', imageUrl: '/rugsample.jpg' },
  { id: 'rug-002', name: 'Urban Chic Contemporary Rug', material: 'Synthetic Blend', size: "8'x10'", price: '$1,299', style: 'Modern Contemporary', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-003', name: 'Vintage Distressed Rug', material: 'Distressed Wool', size: "8'x10'", price: '$899', style: 'Vintage Distressed', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-004', name: 'Geometric Pattern Rug', material: 'Wool Blend', size: "7'x9'", price: '$799', style: 'Modern Geometric', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-005', name: 'Bohemian Medallion Rug', material: 'Wool Blend', size: "8'x10'", price: '$1,049', style: 'Bohemian', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-006', name: 'Scandinavian Minimal Rug', material: 'Wool Blend', size: "7'x9'", price: '$749', style: 'Minimal Scandinavian', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-007', name: 'Art Deco Statement Rug', material: 'Wool Blend', size: "8'x10'", price: '$1,199', style: 'Art Deco', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-008', name: 'Traditional Floral Rug', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,499', style: 'Traditional Persian', imageUrl: '/rugsample.jpg' },
  { id: 'rug-009', name: 'Bold Geometric Blocks', material: 'Wool Blend', size: "8'x10'", price: '$999', style: 'Modern Geometric', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-010', name: 'Contemporary Color Fade', material: 'Synthetic Blend', size: "8'x10'", price: '$1,149', style: 'Modern Contemporary', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-011', name: 'Vintage Faded Patchwork', material: 'Distressed Wool', size: "7'x9'", price: '$899', style: 'Vintage Distressed', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-012', name: 'Kilim Flatweave Rug', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-013', name: 'Moroccan Shag Comfort', material: 'Shag Wool', size: "8'x10'", price: '$1,049', style: 'Moroccan Shag', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-014', name: 'Hand-Tufted Accent', material: 'Hand-tufted Wool', size: "7'x9'", price: '$849', style: 'Hand Tufted', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

  // Bedroom (9)
  { id: 'rug-015', name: 'Bedroom Persian Classic', material: 'Hand-knotted Wool', size: "8'x10'", price: '$2,199', style: 'Traditional Persian', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-016', name: 'Modern Bedroom Accent', material: 'Synthetic Blend', size: "6'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-017', name: 'Scandi Bedroom Comfort', material: 'Wool Blend', size: "6'x9'", price: '$799', style: 'Minimal Scandinavian', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-018', name: 'Boho Bedroom Layers', material: 'Wool Blend', size: "5'x8'", price: '$699', style: 'Bohemian', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-019', name: 'Contemporary Bedroom Calm', material: 'Synthetic Blend', size: "6'x9'", price: '$879', style: 'Modern Contemporary', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-020', name: 'Classic Persian Bedroom', material: 'Hand-knotted Wool', size: "7'x9'", price: '$1,999', style: 'Traditional Persian', imageUrl: '/rugsample.jpg' },
  { id: 'rug-021', name: 'Vintage Bedroom Fade', material: 'Distressed Wool', size: "6'x9'", price: '$749', style: 'Vintage Distressed', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-022', name: 'Moroccan Shag Serenity', material: 'Shag Wool', size: "6'x9'", price: '$849', style: 'Moroccan Shag', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-023', name: 'Bedroom Kilim Flatweave', material: 'Flatweave Wool', size: "5'x8'", price: '$629', style: 'Flatweave Kilim', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

  // Dining Room (8)
  { id: 'rug-024', name: 'Dining Persian Elegance', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,599', style: 'Traditional Persian', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-025', name: 'Contemporary Dining Rug', material: 'Wool Blend', size: "9'x12'", price: '$1,599', style: 'Modern Contemporary', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-026', name: 'Dining Geometric Runner', material: 'Wool Blend', size: '2\'6"x10\'', price: '$399', style: 'Modern Geometric', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-027', name: 'Dining Classic Borders', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,399', style: 'Traditional Persian', imageUrl: '/rugsample.jpg' },
  { id: 'rug-028', name: 'Minimal Dining Accent', material: 'Synthetic Blend', size: "7'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-029', name: 'Vintage Dining Faded', material: 'Distressed Wool', size: "8'x11'", price: '$899', style: 'Vintage Distressed', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-030', name: 'Dining Kilim Stripes', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-031', name: 'Dining Shag Comfort', material: 'Shag Wool', size: "7'x9'", price: '$849', style: 'Moroccan Shag', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

  // Outdoor (8)
  { id: 'rug-032', name: 'Weather Resistant Outdoor', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-033', name: 'Patio Decorative Rug', material: 'Synthetic Fiber', size: "6'x9'", price: '$399', style: 'Patio Deck', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-034', name: 'Outdoor Weather-Guard', material: 'Polypropylene', size: "7'x9'", price: '$549', style: 'Weather Resistant', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-035', name: 'Deckside Pattern Rug', material: 'Synthetic Fiber', size: "8'x10'", price: '$429', style: 'Patio Deck', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-036', name: 'Outdoor Geometric Grid', material: 'Polypropylene', size: "6'x9'", price: '$399', style: 'Modern Geometric', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-037', name: 'Outdoor Vintage Fade', material: 'Polypropylene', size: "7'x9'", price: '$469', style: 'Vintage Distressed', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-038', name: 'Outdoor Kilim Diamond', material: 'Flatweave Poly', size: "6'x9'", price: '$389', style: 'Flatweave Kilim', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-039', name: 'Outdoor Shag Comfort', material: 'Synthetic Shag', size: "6'x9'", price: '$449', style: 'Moroccan Shag', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

  // Specialty (7)
  { id: 'rug-040', name: 'Handmade Artisan Rug', material: 'Hand-woven Wool', size: "9'x12'", price: '$3,299', style: 'Handmade Artisan', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-041', name: 'Antique Reproduction', material: 'Aged Wool', size: "8'x10'", price: '$2,799', style: 'Antique Reproduction', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-042', name: 'Custom Size Rug', material: 'Wool Blend', size: 'Custom', price: 'Quote', style: 'Custom Made', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-043', name: 'Limited Edition Artist Series', material: 'Wool & Silk', size: "8'x10'", price: '$4,499', style: 'Artist Limited', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-044', name: 'Natural Fibers Jute Blend', material: 'Jute & Cotton', size: "8'x10'", price: '$899', style: 'Natural Fiber', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-045', name: 'Designer Collaboration Rug', material: 'Wool Blend', size: "7'x9'", price: '$1,999', style: 'Designer Collaboration', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'rug-046', name: 'Art Inspired Statement', material: 'Wool & Silk', size: "8'x10'", price: '$3,299', style: 'Art Inspired', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
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

