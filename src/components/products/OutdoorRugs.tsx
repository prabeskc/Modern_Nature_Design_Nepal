import { useState, useEffect } from 'react';
import CategoryLayout from './CategoryLayout';
import { categories, subcategoryDescriptions } from './ProductUtils';
import { UnifiedProduct } from './ProductUtils';

interface OutdoorRugsProps {
  onProductSelect?: (product: any) => void;
  selectedSubcategory?: string;
  onSubcategoryChange?: (subcategoryId: string) => void;
}

// Outdoor Products Data
const outdoorProducts: UnifiedProduct[] = [
  {
    id: 'or-wr-001',
    name: 'All-Weather Patio Rug',
    category: 'outdoor',
    subcategoryId: 'weather-resistant',
    material: 'UV-Resistant Polypropylene',
    size: '8\'x10\'',
    price: '$599',
    weatherResistance: 'Excellent',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'or-pd-001',
    name: 'Deck Master Outdoor Rug',
    category: 'outdoor',
    subcategoryId: 'patio-deck',
    material: 'Marine-Grade Fiber',
    size: '6\'x9\'',
    price: '$449',
    weatherResistance: 'High',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'or-ps-001',
    name: 'Poolside Paradise Rug',
    category: 'outdoor',
    subcategoryId: 'poolside',
    material: 'Chlorine-Resistant Fiber',
    size: '5\'x8\'',
    price: '$399',
    weatherResistance: 'Excellent',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'or-gp-001',
    name: 'Garden Path Runner',
    category: 'outdoor',
    subcategoryId: 'garden-path',
    material: 'Weather-Resistant Polypropylene',
    size: '2\'x8\'',
    price: '$199',
    weatherResistance: 'High',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'or-as-001',
    name: 'All-Season Outdoor Rug',
    category: 'outdoor',
    subcategoryId: 'all-season',
    material: 'Multi-Weather Synthetic',
    size: '8\'x10\'',
    price: '$699',
    weatherResistance: 'Excellent',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const OutdoorRugs = ({ 
  onProductSelect, 
  selectedSubcategory,
  onSubcategoryChange 
}: OutdoorRugsProps) => {
  const [activeSubcategory, setActiveSubcategory] = useState(selectedSubcategory || '');

  useEffect(() => {
    if (selectedSubcategory) {
      setActiveSubcategory(selectedSubcategory);
    } else {
      setActiveSubcategory('');
    }
  }, [selectedSubcategory]);

  const outdoorCategory = categories.find(cat => cat.id === 'outdoor');
  const subcategories = outdoorCategory?.subcategories || [];

  // Filter products based on active subcategory
  const filteredProducts = activeSubcategory 
    ? outdoorProducts.filter(product => product.subcategoryId === activeSubcategory)
    : outdoorProducts;

  const handleSubcategoryChange = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    onSubcategoryChange?.(subcategoryId);
  };

  const activeSubcategoryInfo = subcategories.find(sub => sub.id === activeSubcategory);
  const isSubcategoryView = !!activeSubcategory;
  const subcategoryDescription = activeSubcategory ? subcategoryDescriptions[activeSubcategory] : undefined;

  return (
    <CategoryLayout
      title="Outdoor Rugs"
      description="Bring style to your outdoor spaces with our weather-resistant rug collection. From poolside to patio, find durable rugs that withstand the elements while adding comfort and beauty to your outdoor living areas."
      products={filteredProducts}
      activeSubcategoryName={activeSubcategoryInfo?.name}
      activeSubcategoryDescription={subcategoryDescription}
      isSubcategoryView={isSubcategoryView}
      onProductSelect={onProductSelect}
    />
  );
};

export default OutdoorRugs;
export type { OutdoorRugsProps };