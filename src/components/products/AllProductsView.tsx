import { useState } from 'react';
import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

// Import product arrays from all category components
const livingRoomProducts: UnifiedProduct[] = [
  {
    id: 'lr-tp-001',
    name: 'Majestic Persian Masterpiece',
    category: 'living-room',
    subcategoryId: 'traditional-persian',
    material: 'Hand-knotted Wool',
    size: '9\'x12\'',
    price: '$2,899',
    style: 'Traditional Persian',
    imageUrl: '/rugsample.jpg'
  },
  {
    id: 'lr-mc-001',
    name: 'Urban Chic Contemporary Rug',
    category: 'living-room',
    subcategoryId: 'modern-contemporary',
    material: 'Synthetic Blend',
    size: '8\'x10\'',
    price: '$1,299',
    style: 'Modern Contemporary',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lr-vd-001',
    name: 'Vintage Distressed Rug',
    category: 'living-room',
    subcategoryId: 'vintage-distressed',
    material: 'Distressed Wool',
    size: '8\'x10\'',
    price: '$899',
    style: 'Vintage Distressed',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lr-gp-001',
    name: 'Geometric Pattern Rug',
    category: 'living-room',
    subcategoryId: 'geometric-pattern',
    material: 'Wool Blend',
    size: '7\'x9\'',
    price: '$799',
    style: 'Modern Geometric',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const bedroomProducts: UnifiedProduct[] = [
  {
    id: 'br-tp-001',
    name: 'Bedroom Persian Classic',
    category: 'bedroom',
    subcategoryId: 'traditional-persian',
    material: 'Hand-knotted Wool',
    size: '8\'x10\'',
    price: '$2,199',
    style: 'Traditional Persian',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'br-mc-001',
    name: 'Modern Bedroom Accent',
    category: 'bedroom',
    subcategoryId: 'modern-contemporary',
    material: 'Synthetic Blend',
    size: '6\'x9\'',
    price: '$899',
    style: 'Modern Contemporary',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const diningRoomProducts: UnifiedProduct[] = [
  {
    id: 'dr-tp-001',
    name: 'Dining Persian Elegance',
    category: 'dining-room',
    subcategoryId: 'traditional-persian',
    material: 'Hand-knotted Wool',
    size: '8\'x11\'',
    price: '$2,599',
    style: 'Traditional Persian',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-mc-001',
    name: 'Contemporary Dining Rug',
    category: 'dining-room',
    subcategoryId: 'modern-contemporary',
    material: 'Wool Blend',
    size: '9\'x12\'',
    price: '$1,599',
    style: 'Modern Contemporary',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const outdoorProducts: UnifiedProduct[] = [
  {
    id: 'or-wr-001',
    name: 'Weather Resistant Outdoor',
    category: 'outdoor',
    subcategoryId: 'weather-resistant',
    material: 'Polypropylene',
    size: '8\'x10\'',
    price: '$599',
    style: 'Weather Resistant',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'or-pd-001',
    name: 'Patio Decorative Rug',
    category: 'outdoor',
    subcategoryId: 'patio-deck',
    material: 'Synthetic Fiber',
    size: '6\'x9\'',
    price: '$399',
    style: 'Patio Deck',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const specialtyProducts: UnifiedProduct[] = [
  {
    id: 'sp-hr-001',
    name: 'Handmade Artisan Rug',
    category: 'specialty',
    subcategoryId: 'handmade-rugs',
    material: 'Hand-woven Wool',
    size: '9\'x12\'',
    price: '$3,299',
    style: 'Handmade Artisan',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-ar-001',
    name: 'Antique Reproduction',
    category: 'specialty',
    subcategoryId: 'antique-reproductions',
    material: 'Aged Wool',
    size: '8\'x10\'',
    price: '$2,799',
    style: 'Antique Reproduction',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-cs-001',
    name: 'Custom Size Rug',
    category: 'specialty',
    subcategoryId: 'custom-sizes',
    material: 'Wool Blend',
    size: 'Custom',
    price: 'Quote',
    style: 'Custom Made',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

interface AllProductsViewProps {
  onProductSelect?: (product: UnifiedProduct) => void;
}

const AllProductsView = ({ onProductSelect }: AllProductsViewProps) => {
  // Combine products from all categories into a single array
  const allProducts: UnifiedProduct[] = [
    ...livingRoomProducts,
    ...bedroomProducts,
    ...diningRoomProducts,
    ...outdoorProducts,
    ...specialtyProducts
  ];

  // Handle product selection
  const handleProductClick = (product: UnifiedProduct) => {
    onProductSelect?.(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-charcoal">All Products</h2>
          <p className="text-charcoal/60 text-sm mt-1">Explore our complete collection across all categories</p>
        </div>
        <div className="text-charcoal/60 text-sm">
          <span className="font-medium text-charcoal">{allProducts.length}</span> products found
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} onProductClick={handleProductClick} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsView;
export type { AllProductsViewProps };