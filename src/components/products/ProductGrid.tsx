import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductLoadingSkeleton from './ProductLoadingSkeleton';
import { ProductGridProps } from './ProductTypes';
import { UnifiedProduct } from './ProductUtils';

// Simplified ProductGrid that uses the shared ProductCard component
const ProductGrid = ({ products, isLoading, onProductSelect }: ProductGridProps & { onProductSelect?: (product: UnifiedProduct) => void }) => {
  const handleProductClick = (product: UnifiedProduct) => {
    onProductSelect?.(product);
  };

  if (isLoading) {
    return <ProductLoadingSkeleton />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
            No products found
          </h3>
          <p className="text-charcoal/60 mb-6">
            Try selecting a different category to see available products.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={handleProductClick}
        />
      ))}
    </div>
  );
};

export default ProductGrid;