
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import Container from '@/components/ui/Container';
import { Product } from '@/components/home/ProductCard';
import { UnifiedProduct } from '@/components/products/ProductUtils';
import ProductSidebar from '@/components/products/ProductSidebar';
import ProductGrid from '@/components/products/ProductGrid';
import ProductHeader from '@/components/products/ProductHeader';
import { categories } from '@/components/products/ProductUtils';
import BedroomRugs from '@/components/products/BedroomRugs';
import LivingRoomRugs from '@/components/products/LivingRoomRugs';
import DiningRoomRugs from '@/components/products/DiningRoomRugs';
import OutdoorRugs from '@/components/products/OutdoorRugs';
import SpecialtyRugs from '@/components/products/SpecialtyRugs';
import AllProductsView from '@/components/products/AllProductsView';

import productsData from '@/data/products.json';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAllProducts, setShowAllProducts] = useState(true);

  // Scroll to top when component mounts or category/subcategory changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory, selectedSubcategory]);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const subcategoryParam = searchParams.get('subcategory');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setExpandedCategories(prev => 
        prev.includes(categoryParam) ? prev : [...prev, categoryParam]
      );
      setSelectedSubcategory(subcategoryParam || '');
      setShowAllProducts(false);
    } else {
      // Default to All Products view when no category is specified
      setSelectedCategory('');
      setSelectedSubcategory('');
      setExpandedCategories([]);
      setShowAllProducts(true);
    }
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const productList = productsData.products as Product[];
      setProducts(productList);
      setFilteredProducts(productList);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleProductSelect = (product: Product | UnifiedProduct) => {
    console.log('Selected product:', product);
  };

  const handleSubcategoryChange = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
  };

  const renderCategoryComponent = () => {
    const commonProps = {
      selectedSubcategory: selectedSubcategory || undefined,
      onSubcategoryChange: handleSubcategoryChange,
      onProductSelect: handleProductSelect
    };

    // If showing all products, import and display all products from all categories
    if (showAllProducts) {
      return <AllProductsView onProductSelect={handleProductSelect} />;
    }

    const components = {
      'living-room': <LivingRoomRugs {...commonProps} />,
      'bedroom': <BedroomRugs {...commonProps} />,
      'dining-room': <DiningRoomRugs {...commonProps} />,
      'outdoor': <OutdoorRugs {...commonProps} />,
      'specialty': <SpecialtyRugs {...commonProps} />
    };

    return components[selectedCategory as keyof typeof components] || (
      <>
        <ProductHeader
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          categories={categories}
          productCount={filteredProducts.length}
          isLoading={isLoading}
        />
        <ProductGrid products={filteredProducts} isLoading={isLoading} />
      </>
    );
  };



  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('');
    setShowAllProducts(false);
    // Clear URL parameters when selecting main category
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('category', categoryId);
    window.history.replaceState({}, '', `${window.location.pathname}?${newSearchParams}`);
  };

  const handleSubcategorySelect = (subcategoryId: string, parentId: string) => {
    setSelectedCategory(parentId);
    setSelectedSubcategory(subcategoryId);
    setShowAllProducts(false);
  };

  const handleAllProductsSelect = () => {
    setShowAllProducts(true);
    setSelectedCategory('');
    setSelectedSubcategory('');
    // Clear URL parameters when selecting All Products
    window.history.replaceState({}, '', window.location.pathname);
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      
      <div className="pt-20 flex">
        <ProductSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          expandedCategories={expandedCategories}
          onCategorySelect={handleCategorySelect}
          onSubcategorySelect={handleSubcategorySelect}
          onToggleCategory={toggleCategory}
          onAllProductsSelect={handleAllProductsSelect}
          showAllProducts={showAllProducts}
        />
        <div className="flex-1 p-8">
          <Container>{renderCategoryComponent()}</Container>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;