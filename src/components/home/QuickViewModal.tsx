import { useEffect, useState } from 'react';
import { X, Heart, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Product, Color } from './ProductCard';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (product) {
      setCurrentImageIndex(0);
      setSelectedColor(product.colors[0]?.hex || '');
    }
  }, [product]);

  // Removed body overflow restriction to allow page scrolling behind modal
  // The modal will remain functional while allowing background scrolling

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Modal - Contained Size */}
      <div className="relative bg-off-white w-full max-w-6xl h-auto max-h-[95vh] flex flex-col animate-in zoom-in-95 duration-500 ease-out rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden">
        {/* Back Button - Positioned at bottom center */}
        <button
          onClick={onClose}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 p-3 lg:p-4 bg-white/90 backdrop-blur-sm rounded-full text-charcoal hover:bg-mint-green hover:text-charcoal transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        
        <div className="grid lg:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative bg-gray-100 flex items-center justify-center min-h-[300px] lg:min-h-0">
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-4">
              <img
                src={product.images[currentImageIndex] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain transition-all duration-500 rounded-lg"
              />
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-charcoal hover:bg-mint-green hover:text-charcoal transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-charcoal hover:bg-mint-green hover:text-charcoal transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-mint-green' : 'bg-white/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-4 lg:p-6 flex flex-col justify-between h-full">
            <div className="flex-1 flex flex-col justify-start space-y-3 lg:space-y-4">
              {/* Badges */}
              <div className="flex space-x-2 mb-3 lg:mb-4">
                {product.isNew && (
                  <span className="bg-mint-green text-charcoal px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                    New
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-charcoal text-off-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                    Bestseller
                  </span>
                )}
              </div>
              
              {/* Product Info */}
              <h2 className="font-serif text-xl lg:text-2xl xl:text-3xl font-medium text-charcoal mb-2 lg:mb-3">
                {product.name}
              </h2>
              
              <p className="text-lg lg:text-xl font-medium text-charcoal mb-2 lg:mb-4">
                {formatPrice(product.price)}
              </p>
              
              <p className="text-sm lg:text-base text-charcoal/70 leading-relaxed mb-3 lg:mb-4 line-clamp-2 lg:line-clamp-3">
                {product.description}
              </p>
              
              {/* Product Details */}
              <div className="space-y-1 lg:space-y-2 mb-3 lg:mb-4">
                {product.dimensions && (
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span className="text-charcoal/60">Dimensions:</span>
                    <span className="text-charcoal font-medium">{product.dimensions}</span>
                  </div>
                )}
                {product.material && (
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span className="text-charcoal/60">Material:</span>
                    <span className="text-charcoal font-medium">{product.material}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs lg:text-sm">
                  <span className="text-charcoal/60">Category:</span>
                  <span className="text-charcoal font-medium capitalize">
                    {product.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-4 lg:mb-6">
                <h3 className="text-xs lg:text-sm font-medium text-charcoal mb-2">Available Colors</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.hex)}
                      className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color.hex ? 'border-charcoal scale-110' : 'border-gray-300 hover:border-charcoal'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-2 lg:space-y-3 mt-auto pt-2">
              <div className="flex space-x-2 lg:space-x-3">
                <button 
                  className="flex-1 bg-gray-200 text-gray-500 py-2 lg:py-3 rounded-lg font-medium cursor-not-allowed relative group text-sm lg:text-base"
                  disabled
                >
                  Add to bag
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-charcoal text-off-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Coming soon
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-charcoal" />
                  </div>
                </button>
                
                <button
                  onClick={handleWishlist}
                  className={`p-2 lg:p-3 rounded-lg border-2 transition-colors duration-200 ${
                    isWishlisted 
                      ? 'bg-mint-green border-mint-green text-charcoal' 
                      : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white'
                  }`}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className={`w-4 h-4 lg:w-5 lg:h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <p className="text-xs lg:text-sm text-charcoal/60 text-center">
                Free shipping on orders over $500
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}