import { useState, useEffect } from 'react';
import CategoryLayout from './CategoryLayout';
import { categories, subcategoryDescriptions } from './ProductUtils';
import { UnifiedProduct } from './ProductUtils';

interface BedroomRugsProps {
  onProductSelect?: (product: any) => void;
  selectedSubcategory?: string;
  onSubcategoryChange?: (subcategoryId: string) => void;
}

// Bedroom Products Data
const bedroomProducts: UnifiedProduct[] = [
  {
    id: 'br-ss-001',
    name: 'Cloud Nine Shag Rug',
    category: 'bedroom',
    subcategoryId: 'soft-shag',
    material: 'Microfiber Polyester',
    size: '5\'x8\'',
    price: '$299',
    comfort: 'Ultra Plush',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'br-ls-001',
    name: 'Royal Silk Bedroom Rug',
    category: 'bedroom',
    subcategoryId: 'luxury-silk',
    material: '100% Pure Silk',
    size: '6\'x9\'',
    price: '$1,899',
    comfort: 'Luxurious',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'br-cw-001',
    name: 'Cozy Wool Bedroom Rug',
    category: 'bedroom',
    subcategoryId: 'cozy-wool',
    material: '100% Natural Wool',
    size: '5\'x8\'',
    price: '$599',
    comfort: 'Warm & Soft',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'br-mf-001',
    name: 'Minimalist Flat Weave Rug',
    category: 'bedroom',
    subcategoryId: 'minimalist-flat',
    material: 'Cotton Blend',
    size: '4\'x6\'',
    price: '$199',
    comfort: 'Sleek & Modern',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'br-pm-001',
    name: 'Plush Memory Foam Rug',
    category: 'bedroom',
    subcategoryId: 'plush-memory',
    material: 'Memory Foam with Microfiber',
    size: '3\'x5\'',
    price: '$149',
    comfort: 'Ultra Comfortable',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const BedroomRugs = ({ 
  onProductSelect, 
  selectedSubcategory,
  onSubcategoryChange 
}: BedroomRugsProps) => {
  const [activeSubcategory, setActiveSubcategory] = useState(selectedSubcategory || '');

  // Sync internal state with prop changes from sidebar
  useEffect(() => {
    if (selectedSubcategory) {
      setActiveSubcategory(selectedSubcategory);
    } else {
      setActiveSubcategory('');
    }
  }, [selectedSubcategory]);

  const bedroomCategory = categories.find(cat => cat.id === 'bedroom');
  const subcategories = bedroomCategory?.subcategories || [];

  // Filter products based on active subcategory
  const filteredProducts = activeSubcategory 
    ? bedroomProducts.filter(product => product.subcategoryId === activeSubcategory)
    : bedroomProducts;

  const handleSubcategoryChange = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    onSubcategoryChange?.(subcategoryId);
  };

  const activeSubcategoryInfo = subcategories.find(sub => sub.id === activeSubcategory);
  const isSubcategoryView = !!activeSubcategory;
  const subcategoryDescription = activeSubcategory ? subcategoryDescriptions[activeSubcategory] : undefined;

  return (
    <CategoryLayout
      title="Bedroom Rugs"
      description="Create a serene and comfortable bedroom sanctuary with our collection of soft, luxurious rugs. From plush shag to elegant silk, find the perfect rug to complement your personal retreat."
      products={filteredProducts}
      activeSubcategoryName={activeSubcategoryInfo?.name}
      activeSubcategoryDescription={subcategoryDescription}
      isSubcategoryView={isSubcategoryView}
      onProductSelect={onProductSelect}
    />
  );
};

export default BedroomRugs;
export type { BedroomRugsProps };