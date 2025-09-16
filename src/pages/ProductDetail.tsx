import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Container from '@/components/ui/Container';
import { UnifiedProduct } from '@/components/products/ProductUtils';

// Extended product interface for detailed product information
interface DetailedProduct extends UnifiedProduct {
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

// For now, we'll use a simple product data structure
// In a real app, this would come from an API or database
const getAllProducts = (): DetailedProduct[] => {
  return [
    {
      id: 'lr-tp-001',
      name: 'Majestic Persian Masterpiece',
      category: 'living-room',
      subcategoryId: 'traditional-persian',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/rugsample.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully crafted by skilled artisans, ensuring exceptional quality and durability that will last for generations.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108\" x 144\")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    }
  ];
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const allProducts = getAllProducts();
    const foundProduct = allProducts.find(p => p.id === productId);
    setProduct(foundProduct || null);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-off-white">
        <Navbar />
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-serif text-charcoal mb-4">Product Not Found</h1>
            <p className="text-charcoal/60 mb-8">The product you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-charcoal text-off-white px-6 py-3 rounded-lg hover:bg-charcoal/90 transition-colors"
            >
              Back to Products
            </button>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  const handleCustomize = () => {
    // In a real app, this would open a customization modal or navigate to a customization page
    alert('Customize functionality would be implemented here!');
  };

  const handleAddToCart = () => {
    // In a real app, this would add the product to cart
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this amazing ${product.name}`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  // Mock additional images for gallery
  const productImages = [
    product.imageUrl,
    '/rugsample.svg', // Alternative view
    product.imageUrl, // Detail shot
    product.imageUrl  // Room setting
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      
      <Container>
        {/* Breadcrumb */}
        <div className="py-6">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center text-charcoal/60 hover:text-charcoal transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </button>
          <nav className="text-sm text-charcoal/60">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Products</span>
            <span className="mx-2">/</span>
            <span>Living Room Rugs</span>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-mint-green' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-mint-green font-medium uppercase tracking-wide">
                  {product.style}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWishlist}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <h1 className="font-serif text-3xl lg:text-4xl font-medium text-charcoal mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-charcoal/60">(4.8) • 127 reviews</span>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-charcoal mb-6">
                {product.price}
                <span className="text-sm font-normal text-charcoal/60 ml-2">Free shipping</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-mint-green/10 rounded-lg p-4">
              <h3 className="font-medium text-charcoal mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-charcoal/80">
                    <div className="w-1.5 h-1.5 bg-mint-green rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
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
                {/* Customize Button - Prominently Displayed */}
                <button
                  onClick={handleCustomize}
                  className="w-full bg-mint-green text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-mint-green/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  🎨 Customize This Rug
                </button>
                
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-charcoal text-off-white px-8 py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
                >
                  Add to Cart
                </button>
                
                <button className="w-full border-2 border-charcoal text-charcoal px-8 py-3 rounded-lg font-medium hover:bg-charcoal hover:text-off-white transition-colors">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="w-6 h-6 text-mint-green mx-auto mb-2" />
                <p className="text-xs text-charcoal/60">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-mint-green mx-auto mb-2" />
                <p className="text-xs text-charcoal/60">10 Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-mint-green mx-auto mb-2" />
                <p className="text-xs text-charcoal/60">30 Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="py-12 border-t border-gray-200">
          <div className="flex space-x-8 mb-8">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? 'border-mint-green text-charcoal font-medium'
                    : 'border-transparent text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="max-w-4xl">
            {activeTab === 'description' && (
              <div className="prose prose-lg max-w-none">
                <p className="text-charcoal/80 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-charcoal">{key}:</span>
                    <span className="text-charcoal/80">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-charcoal/60">Customer reviews coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;