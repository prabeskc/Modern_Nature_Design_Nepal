import { useState } from 'react';
import { DetailedProduct } from './ProductDetailView';

interface ProductTabsProps {
  product: DetailedProduct;
  className?: string;
}

const ProductTabs = ({ product, className = '' }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <></>
    // <div className={`py-12 border-t border-gray-200 ${className}`}>
    //   <div className="flex space-x-8 mb-8">
    //     {['description', 'specifications', 'reviews'].map((tab) => (
    //       <button
    //         key={tab}
    //         onClick={() => setActiveTab(tab)}
    //         className={`pb-2 border-b-2 transition-colors capitalize ${
    //           activeTab === tab
    //             ? 'border-mint-green text-charcoal font-medium'
    //             : 'border-transparent text-charcoal/60 hover:text-charcoal'
    //         }`}
    //       >
    //         {tab}
    //       </button>
    //     ))}
    //   </div>

    //   <div className="max-w-4xl">
    //     {activeTab === 'description' && (
    //       <div className="prose prose-lg max-w-none">
    //         <p className="text-charcoal/80 leading-relaxed">
    //           {product.description || 'No description available.'}
    //         </p>
    //       </div>
    //     )}

    //     {activeTab === 'specifications' && (
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {product.specifications && Object.keys(product.specifications).length > 0 ? (
    //           Object.entries(product.specifications).map(([key, value]) => (
    //             <div key={key} className="flex justify-between py-3 border-b border-gray-200">
    //               <span className="font-medium text-charcoal">{key}:</span>
    //               <span className="text-charcoal/80">{value}</span>
    //             </div>
    //           ))
    //         ) : (
    //           <p className="text-charcoal/60">No specifications available.</p>
    //         )}
    //       </div>
    //     )}

    //     {activeTab === 'reviews' && (
    //       <div className="space-y-6">
    //         <div className="text-center py-8">
    //           <p className="text-charcoal/60">Customer reviews coming soon!</p>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default ProductTabs;
export type { ProductTabsProps };