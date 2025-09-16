import { useState, useEffect } from 'react';
import CategoryLayout from './CategoryLayout';
import { categories, subcategoryDescriptions } from './ProductUtils';
import { UnifiedProduct } from './ProductUtils';

interface DiningRoomRugsProps {
  onProductSelect?: (product: any) => void;
  selectedSubcategory?: string;
  onSubcategoryChange?: (subcategoryId: string) => void;
}

// Dining Room Products Data
const diningRoomProducts: UnifiedProduct[] = [
  {
    id: 'dr-fo-001',
    name: 'Grand Oriental Dining Rug',
    category: 'dining-room',
    subcategoryId: 'formal-oriental',
    material: 'Premium Wool',
    size: '9\'x12\'',
    price: '$1,899',
    durability: 'High',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-ec-001',
    name: 'Family-Friendly Easy Clean Rug',
    category: 'dining-room',
    subcategoryId: 'easy-clean',
    material: 'Stain-Resistant Synthetic',
    size: '8\'x10\'',
    price: '$799',
    durability: 'Very High',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-nf-001',
    name: 'Natural Fiber Dining Rug',
    category: 'dining-room',
    subcategoryId: 'natural-fiber',
    material: 'Jute & Hemp Blend',
    size: '8\'x10\'',
    price: '$599',
    durability: 'High',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-sr-001',
    name: 'Stain-Resistant Dining Rug',
    category: 'dining-room',
    subcategoryId: 'stain-resistant',
    material: 'Advanced Synthetic Fiber',
    size: '9\'x12\'',
    price: '$899',
    durability: 'Very High',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-cb-001',
    name: 'Classic Bordered Dining Rug',
    category: 'dining-room',
    subcategoryId: 'classic-bordered',
    material: 'Traditional Wool',
    size: '8\'x11\'',
    price: '$1,299',
    durability: 'High',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const DiningRoomRugs = ({ 
  onProductSelect, 
  selectedSubcategory,
  onSubcategoryChange 
}: DiningRoomRugsProps) => {
  const [activeSubcategory, setActiveSubcategory] = useState(selectedSubcategory || '');

  // Sync internal state with prop changes from sidebar
  useEffect(() => {
    if (selectedSubcategory) {
      setActiveSubcategory(selectedSubcategory);
    } else {
      setActiveSubcategory('');
    }
  }, [selectedSubcategory]);

  const diningRoomCategory = categories.find(cat => cat.id === 'dining-room');
  const subcategories = diningRoomCategory?.subcategories || [];

  // Filter products based on active subcategory
  const filteredProducts = activeSubcategory 
    ? diningRoomProducts.filter(product => product.subcategoryId === activeSubcategory)
    : diningRoomProducts;



  const handleSubcategoryChange = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    onSubcategoryChange?.(subcategoryId);
  };

  const activeSubcategoryInfo = subcategories.find(sub => sub.id === activeSubcategory);
  const isSubcategoryView = !!activeSubcategory;
  const subcategoryDescription = activeSubcategory ? subcategoryDescriptions[activeSubcategory] : undefined;

  return (
    <CategoryLayout
      title="Dining Room Rugs"
      description="Enhance your dining experience with rugs that combine style and practicality. From formal oriental designs to easy-clean options, create the perfect ambiance for memorable meals."
      products={filteredProducts}
      activeSubcategoryName={activeSubcategoryInfo?.name}
      activeSubcategoryDescription={subcategoryDescription}
      isSubcategoryView={isSubcategoryView}
      onProductSelect={onProductSelect}
    />
  );
};

export default DiningRoomRugs;
export type { DiningRoomRugsProps };