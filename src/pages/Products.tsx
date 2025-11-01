
import { useState, useEffect } from 'react';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import Container from '@/components/ui/Container';
import { Product } from '@/components/home/ProductCard';
import { UnifiedProduct } from '@/components/products/ProductUtils';
import AllProductsView from '@/components/products/AllProductsView';

import productsData from '@/data/products.json';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const productList = productsData.products as Product[];
      setProducts(productList);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleProductSelect = (product: Product | UnifiedProduct) => {
    console.log('Selected product:', product);
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      <div className="pt-20">
        <div className="p-8">
          <Container>
            <AllProductsView onProductSelect={handleProductSelect} />
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;