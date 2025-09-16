import { useNavigate } from 'react-router-dom';
import { UnifiedProduct } from './ProductUtils';
import { hasDetailedPage, getProductDetailUrl } from '@/utils/navigation';

interface ProductCardProps {
  product: UnifiedProduct;
  onProductClick?: (product: UnifiedProduct) => void;
}

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Check if product has a dedicated detail page
    if (hasDetailedPage(product.id)) {
      navigate(getProductDetailUrl(product.id));
    } else {
      // For other products, use the existing click handler
      onProductClick?.(product);
    }
  };
  
  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer"
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-charcoal mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="space-y-1 text-sm text-charcoal/60">
          <p>Material: {product.material}</p>
          <p>Size: {product.size}</p>
          {product.comfort && <p>Comfort: {product.comfort}</p>}
          {product.style && <p>Style: {product.style}</p>}
          {product.durability && <p>Durability: {product.durability}</p>}
          {product.weatherResistance && <p>Weather Resistance: {product.weatherResistance}</p>}
          {product.artisan && <p>Artisan: {product.artisan}</p>}
          <p className="font-medium text-charcoal text-lg">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
export type { ProductCardProps };