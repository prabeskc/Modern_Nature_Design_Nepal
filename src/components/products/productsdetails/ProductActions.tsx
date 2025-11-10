import { useState } from 'react';
import { DetailedProduct } from './ProductDetailView';
import { Link } from 'react-router-dom';

interface ProductActionsProps {
  product: DetailedProduct;
  onCustomize: () => void;
  onAddToCart: (quantity: number) => void;
  onBuyNow?: (quantity: number) => void;
  showBuyNow?: boolean;
  customizeButtonText?: string;
  className?: string;
}

const ProductActions = ({
  product,
  onCustomize,
  onAddToCart,
  onBuyNow,
  showBuyNow = true,
  customizeButtonText = '🎨 Customize This Rug',
  className = ''
}: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);

const[productName, setProductName]= useState("/customize/"+product.name.replace(/\s+/g, ""));


  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(quantity);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-charcoal">Quantity:</label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-charcoal hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="px-4 py-2 text-charcoal font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-charcoal hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
          <Link to = {productName}
          className="w-full bg-mint-green text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-mint-green/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          {customizeButtonText}
        </Link>
        
        
        {/* <button
          onClick={handleAddToCart}
          className="w-full bg-charcoal text-off-white px-8 py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
        >
          Add to Cart
        </button>
        
        {showBuyNow && onBuyNow && (
          <button 
            onClick={handleBuyNow}
            className="w-full border-2 border-charcoal text-charcoal px-8 py-3 rounded-lg font-medium hover:bg-charcoal hover:text-off-white transition-colors"
          >
            Buy Now
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ProductActions;
export type { ProductActionsProps };