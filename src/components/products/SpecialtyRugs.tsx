import { useState, useEffect } from 'react';
import CategoryLayout from './CategoryLayout';
import { categories, subcategoryDescriptions } from './ProductUtils';
import { UnifiedProduct } from './ProductUtils';

interface SpecialtyRugsProps {
  onProductSelect?: (product: any) => void;
  selectedSubcategory?: string;
  onSubcategoryChange?: (subcategoryId: string) => void;
}

// Specialty Products Data
const specialtyProducts: UnifiedProduct[] = [
  {
    id: 'sr-ha-001',
    name: 'Master Artisan Handwoven Rug',
    category: 'specialty',
    subcategoryId: 'handwoven-artisan',
    material: 'Hand-spun Wool',
    size: '8\'x10\'',
    price: '$3,299',
    artisan: 'Traditional Weaver',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sr-cs-001',
    name: 'Bespoke Custom Size Rug',
    category: 'specialty',
    subcategoryId: 'custom-size',
    material: 'Premium Wool Blend',
    size: 'Custom',
    price: 'From $899',
    artisan: 'Custom Designer',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sr-ef-001',
    name: 'Eco-Friendly Sustainable Rug',
    category: 'specialty',
    subcategoryId: 'eco-friendly',
    material: 'Recycled Materials',
    size: '6\'x9\'',
    price: '$799',
    artisan: 'Eco Artisan',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sr-ac-001',
    name: 'Antique Collection Vintage Rug',
    category: 'specialty',
    subcategoryId: 'antique-collection',
    material: 'Vintage Wool',
    size: '7\'x10\'',
    price: '$4,999',
    artisan: 'Antique Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sr-dc-001',
    name: 'Designer Collaboration Limited Edition',
    category: 'specialty',
    subcategoryId: 'designer-collaboration',
    material: 'Luxury Silk & Wool',
    size: '8\'x10\'',
    price: '$5,999',
    artisan: 'Celebrity Designer',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const SpecialtyRugs = ({ 
  onProductSelect, 
  selectedSubcategory,
  onSubcategoryChange 
}: SpecialtyRugsProps) => {
  const [activeSubcategory, setActiveSubcategory] = useState(selectedSubcategory || '');

  useEffect(() => {
    if (selectedSubcategory) {
      setActiveSubcategory(selectedSubcategory);
    } else {
      setActiveSubcategory('');
    }
  }, [selectedSubcategory]);

  const specialtyCategory = categories.find(cat => cat.id === 'specialty');
  const subcategories = specialtyCategory?.subcategories || [];

  // Filter products based on active subcategory
  const filteredProducts = activeSubcategory 
    ? specialtyProducts.filter(product => product.subcategoryId === activeSubcategory)
    : specialtyProducts;

  const handleSubcategoryChange = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    onSubcategoryChange?.(subcategoryId);
  };

  const activeSubcategoryInfo = subcategories.find(sub => sub.id === activeSubcategory);
  const isSubcategoryView = !!activeSubcategory;
  const subcategoryDescription = activeSubcategory ? subcategoryDescriptions[activeSubcategory] : undefined;

  return (
    <CategoryLayout
      title="Specialty Rugs"
      description="Discover our exclusive collection of specialty rugs featuring handwoven artisan pieces, custom designs, and eco-friendly options. Each rug tells a unique story of craftsmanship and sustainable luxury."
      products={filteredProducts}
      activeSubcategoryName={activeSubcategoryInfo?.name}
      activeSubcategoryDescription={subcategoryDescription}
      isSubcategoryView={isSubcategoryView}
      onProductSelect={onProductSelect}
    />
  );
};

export default SpecialtyRugs;
export type { SpecialtyRugsProps };