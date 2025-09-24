import { useState } from 'react';

interface ProductImageGalleryProps {
  productName: string;
  mainImageUrl: string;
  className?: string;
}

const ProductImageGallery = ({ productName, mainImageUrl, className = '' }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock additional images for gallery
  const productImages = [
    mainImageUrl,
    '/rugsample2.jpg', // Alternative view
    '/rugsample3.jpg' // Detail shot
  ];

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Main Image */}
      <div className="w-full max-w-md mx-auto bg-gray-100 rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center">
        <img
          src={productImages[selectedImage]}
          alt={productName}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 gap-1.5 max-w-md mx-auto">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`bg-gray-100 rounded-md overflow-hidden border-2 transition-colors min-h-[80px] flex items-center justify-center ${
              selectedImage === index ? 'border-mint-green' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
export type { ProductImageGalleryProps };