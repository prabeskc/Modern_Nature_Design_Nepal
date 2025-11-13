// Export all product category components
export { default as LivingRoomRugs } from './LivingRoomRugs';
// export { default as BedroomRugs } from './BedroomRugs';
export { default as DiningRoomRugs } from './DiningRoomRugs';
export { default as OutdoorRugs } from './OutdoorRugs';
export { default as SpecialtyRugs } from './SpecialtyRugs';

// Export shared components
export { default as ProductSidebar } from './ProductSidebar';
export { default as ProductGrid } from './ProductGrid';
export { default as ProductHeader } from './ProductHeader';
export { default as ProductLoadingSkeleton } from './ProductLoadingSkeleton';
export { default as ProductCard } from './ProductCard';
export { default as CategoryLayout } from './CategoryLayout';

// Export product detail components from productdetails folder
export * from './productsdetails';

// Export component prop types
export type { LivingRoomRugsProps } from './LivingRoomRugs';
// export type { BedroomRugsProps } from './BedroomRugs';
export type { DiningRoomRugsProps } from './DiningRoomRugs';
export type { OutdoorRugsProps } from './OutdoorRugs';
export type { SpecialtyRugsProps } from './SpecialtyRugs';
export type { ProductCardProps } from './ProductCard';
export type { CategoryLayoutProps } from './CategoryLayout';

// Product detail types are exported from productdetails folder

// Export shared types
export type { ProductSidebarProps, ProductGridProps, ProductHeaderProps } from './ProductTypes';
export type { Category, Subcategory } from './ProductTypes';

// Export utilities and data
export { categories, getSelectedCategoryName, subcategoryDescriptions } from './ProductUtils';
export type { UnifiedProduct } from './ProductUtils';