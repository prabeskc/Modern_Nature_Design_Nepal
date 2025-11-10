import { Truck, Shield, RotateCcw } from 'lucide-react';

interface ProductTrustBadgesProps {
  className?: string;
}

const ProductTrustBadges = ({ className = '' }: ProductTrustBadgesProps) => {
  return (
    <></>
    // <div className={`grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 ${className}`}>
    //   <div className="text-center">
    //     <Truck className="w-6 h-6 text-mint-green mx-auto mb-2" />
    //     <p className="text-xs text-charcoal/60">Free Shipping</p>
    //   </div>
    //   <div className="text-center">
    //     <Shield className="w-6 h-6 text-mint-green mx-auto mb-2" />
    //     <p className="text-xs text-charcoal/60">10 Year Warranty</p>
    //   </div>
    //   <div className="text-center">
    //     <RotateCcw className="w-6 h-6 text-mint-green mx-auto mb-2" />
    //     <p className="text-xs text-charcoal/60">30 Day Returns</p>
    //   </div>
    // </div>
  );
};

export default ProductTrustBadges;
export type { ProductTrustBadgesProps };