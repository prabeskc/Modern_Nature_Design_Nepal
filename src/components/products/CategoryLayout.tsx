import { ReactNode } from 'react';
import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

interface CategoryLayoutProps {
  title: string;
  description: string;
  products: UnifiedProduct[];
  activeSubcategoryName?: string;
  activeSubcategoryDescription?: string;
  isSubcategoryView?: boolean;
  onProductSelect?: (product: UnifiedProduct) => void;
  children?: ReactNode;
}

const CategoryLayout = ({ 
  title, 
  description, 
  products, 
  activeSubcategoryName,
  activeSubcategoryDescription,
  isSubcategoryView = false,
  onProductSelect,
  children 
}: CategoryLayoutProps) => {
  const handleProductClick = (product: UnifiedProduct) => {
    onProductSelect?.(product);
  };

  return (
    <div className="w-full">
      {/* Category/Subcategory Header */}
      <div className="mb-8">
        {isSubcategoryView && (
          <div className="mb-2">
            <span className="text-sm text-charcoal/60 font-medium uppercase tracking-wide">
              {title}
            </span>
          </div>
        )}
        <h1 className="font-serif text-3xl lg:text-4xl font-medium text-charcoal mb-4">
          {isSubcategoryView ? activeSubcategoryName : title}
        </h1>
        <p className="text-charcoal/70 text-lg max-w-3xl">
          {isSubcategoryView ? activeSubcategoryDescription : description}
        </p>
      </div>

      {/* Additional content (like subcategory navigation) */}
      {children}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={handleProductClick}
          />
        ))}
      </div>

      {/* Product Count */}
      <div className="mt-8 text-center">
        <p className="text-charcoal/60">
          Showing {products.length} {products.length === 1 ? 'product' : 'products'}
          {activeSubcategoryName && ` in ${activeSubcategoryName}`}
        </p>
      </div>
    </div>
  );
};

export default CategoryLayout;
export type { CategoryLayoutProps };