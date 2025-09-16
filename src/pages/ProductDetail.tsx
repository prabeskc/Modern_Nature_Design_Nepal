import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Container from '@/components/ui/Container';
import { ProductDetailView, DetailedProduct } from '@/components/products/productsdetails';

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

  const handleCustomize = (product: DetailedProduct) => {
    // In a real app, this would open a customization modal or navigate to a customization page
    alert('Customize functionality would be implemented here!');
  };

  const handleAddToCart = (product: DetailedProduct, quantity: number) => {
    // In a real app, this would add the product to cart
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleBuyNow = (product: DetailedProduct, quantity: number) => {
    // In a real app, this would proceed to checkout
    alert(`Proceeding to checkout with ${quantity} ${product.name}`);
  };

  const handleWishlist = (product: DetailedProduct, isWishlisted: boolean) => {
    // In a real app, this would update the wishlist
    alert(`${isWishlisted ? 'Added to' : 'Removed from'} wishlist: ${product.name}`);
  };

  const handleShare = (product: DetailedProduct) => {
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

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      
      <Container>
        {/* Breadcrumb */}
        <div className="pt-20 pb-6">
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

        {/* Product Detail View Component */}
        <ProductDetailView
          product={product}
          onCustomize={handleCustomize}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onWishlist={handleWishlist}
          onShare={handleShare}
          className="py-8"
        />
      </Container>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;