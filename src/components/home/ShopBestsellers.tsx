import { useState, useEffect, useRef } from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { LayoutGrid } from '../ui/layout-grid';
import QuickViewModal from './QuickViewModal';
import { useModal } from '@/hooks/useModal';
import productsData from '@/data/products.json';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: { id: string; name: string; hex: string }[];
  category: string;
  isBestseller: boolean;
  isNew: boolean;
  dimensions: string;
  material: string;
}

export default function ShopBestsellers() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const { isOpen: isQuickViewOpen, open: openQuickView, close: closeQuickView } = useModal();
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filter bestsellers and limit to 4 products for the grid layout
    const bestsellers = productsData.products.filter((product: Product) => product.isBestseller).slice(0, 4);
    setProducts(bestsellers);
  }, []);

  useEffect(() => {
    const observers = [];

    // Section heading observer
    if (sectionRef.current) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      sectionObserver.observe(sectionRef.current);
      observers.push(sectionObserver);
    }

    // Grid observer
    if (gridRef.current) {
      const gridObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsGridVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      gridObserver.observe(gridRef.current);
      observers.push(gridObserver);
    }

    // CTA observer
    if (ctaRef.current) {
      const ctaObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsCtaVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      ctaObserver.observe(ctaRef.current);
      observers.push(ctaObserver);
    }

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleQuickView = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      openQuickView();
    }
  };

  const handleWishlist = (productId: string) => {
    // In a real app, this would update the wishlist state/API
    console.log('Added to wishlist:', productId);
  };

  const handleCloseQuickView = () => {
    closeQuickView();
    setSelectedProduct(null);
  };

  // Convert products to LayoutGrid cards format
  const createProductCards = (products: Product[]) => {
    // Array of unique high-quality rug images from Unsplash
    const rugImages = [
      '1586023492125-27b2c045efd7', // Persian-style rug
      '1560448204-e02f11c3d0e2', // Modern geometric rug
      '1558618666-fcd25c85cd64', // Traditional oriental rug
      '1567538096630-e0c55bd6374c'  // Contemporary textured rug
    ];

    return products.map((product, index) => {
      // Create varied grid layouts with uniform heights but different widths
      let className = "col-span-1";
      if (index === 0) className = "md:col-span-2";
      else if (index === 1 || index === 2) className = "col-span-1";
      else if (index === 3) className = "md:col-span-2";
      else className = "col-span-1";

      return {
        id: parseInt(product.id.split('-')[1]) || index + 1,
        className,
        thumbnail: `https://images.unsplash.com/photo-${rugImages[index] || rugImages[0]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
        content: (
          <div className="text-off-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-mint-green uppercase tracking-wide">
                {product.category.replace('-', ' ')}
              </span>
              {product.isNew && (
                <span className="px-3 py-1 bg-mint-green text-charcoal text-xs font-medium rounded-full">
                  New
                </span>
              )}
            </div>
            <h3 className="font-serif text-2xl md:text-4xl font-medium mb-3 leading-tight">
              {product.name}
            </h3>
            <p className="text-off-white/90 mb-4 text-base leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-mint-green">
                ${product.price.toLocaleString()}
              </span>
              <div className="flex space-x-2">
                {product.colors.slice(0, 3).map((color) => (
                  <div
                    key={color.id}
                    className="w-5 h-5 rounded-full border-2 border-off-white/50 shadow-sm"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            <div className="text-sm text-off-white/80 mb-4">
              <span className="font-medium">{product.dimensions}</span> • <span>{product.material}</span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleQuickView(product.id);
              }}
              className="inline-flex items-center px-4 py-2 bg-mint-green text-charcoal font-medium rounded-lg hover:bg-mint-green/90 transition-colors duration-200"
            >
              Quick View
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        )
      };
    });
  };



  const displayProducts = products.length > 0 ? products : productsData.products.filter(p => p.isBestseller).slice(0, 4);
  const cards = createProductCards(displayProducts);

  return (
    <section id="bestsellers" className="py-12 lg:py-16 bg-warm-beige/20">
      <Container>
        <div ref={sectionRef}>
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <SectionHeading
              title="Shop Bestsellers"
              subtitle="Discover our most loved handcrafted rugs, chosen by customers worldwide"
              className="mb-8 lg:mb-12"
            />
          </div>
        </div>
        
        {/* Animated Layout Grid */}
        <div ref={gridRef} className="w-full">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isGridVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <LayoutGrid cards={cards} />
          </div>
        </div>
        
        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-8">
          <div className={`transform transition-all duration-1000 delay-500 ${
            isCtaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="inline-flex items-center px-8 py-3 bg-charcoal text-off-white font-medium rounded-lg hover:bg-charcoal/90 transition-colors duration-200">
              View All Rugs
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      
      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </section>
  );
}