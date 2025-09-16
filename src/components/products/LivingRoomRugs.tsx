import { useState, useEffect } from 'react';
import CategoryLayout from './CategoryLayout';
import { categories, subcategoryDescriptions } from './ProductUtils';
import { UnifiedProduct } from './ProductUtils';

interface LivingRoomRugsProps {
  onProductSelect?: (product: any) => void;
  selectedSubcategory?: string;
  onSubcategoryChange?: (subcategoryId: string) => void;
}

// Living Room Products Data
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
  },
  {
    id: 'lr-sc-001',
    name: 'Solid Color Area Rug',
    category: 'living-room',
    subcategoryId: 'solid-color-area',
    material: 'Premium Wool',
    size: '9\'x12\'',
    price: '$1,199',
    style: 'Solid Contemporary',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const LivingRoomRugs = ({ 
  onProductSelect, 
  selectedSubcategory,
  onSubcategoryChange 
}: LivingRoomRugsProps) => {
  const [activeSubcategory, setActiveSubcategory] = useState(selectedSubcategory || '');

  useEffect(() => {
    if (selectedSubcategory) {
      setActiveSubcategory(selectedSubcategory);
    } else {
      setActiveSubcategory('');
    }
  }, [selectedSubcategory]);

  const livingRoomCategory = categories.find(cat => cat.id === 'living-room');
  const subcategories = livingRoomCategory?.subcategories || [];

  // Filter products based on active subcategory
  const filteredProducts = activeSubcategory 
    ? livingRoomProducts.filter(product => product.subcategoryId === activeSubcategory)
    : livingRoomProducts;



  const handleSubcategoryChange = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    onSubcategoryChange?.(subcategoryId);
  };

  const activeSubcategoryInfo = subcategories.find(sub => sub.id === activeSubcategory);
  const isSubcategoryView = !!activeSubcategory;
  const subcategoryDescription = activeSubcategory ? subcategoryDescriptions[activeSubcategory] : undefined;

  return (
    <CategoryLayout
      title="Living Room Rugs"
      description="Transform your living space with our curated collection of premium rugs. From traditional Persian masterpieces to modern contemporary designs, find the perfect centerpiece for your home."
      products={filteredProducts}
      activeSubcategoryName={activeSubcategoryInfo?.name}
      activeSubcategoryDescription={subcategoryDescription}
      isSubcategoryView={isSubcategoryView}
      onProductSelect={onProductSelect}
    />
  );
};

export default LivingRoomRugs;
export type { LivingRoomRugsProps };