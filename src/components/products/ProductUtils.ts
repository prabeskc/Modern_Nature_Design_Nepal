import { Category } from './ProductTypes';
import { Product } from '@/components/home/ProductCard';

// Unified Product Interface
export interface UnifiedProduct {
  id: string;
  name: string;
  category?: string;
  subcategoryId?: string;
  material: string;
  size: string;
  price: string;
  imageUrl: string;
  // Category-specific fields
  comfort?: string;
  style?: string;
  durability?: string;
  weatherResistance?: string;
  artisan?: string;
}

// Products are now managed locally in each category component
// This keeps the shared configuration and types

// Subcategory descriptions mapping
export const subcategoryDescriptions: Record<string, string> = {
  // Living Room subcategories
  'traditional-persian': 'Discover the timeless elegance of authentic Persian designs. Hand-knotted masterpieces featuring intricate patterns and rich colors that have adorned homes for centuries.',
  'modern-contemporary': 'Embrace contemporary style with clean lines and bold designs. Perfect for modern living spaces seeking sophistication and artistic flair.',
  'vintage-distressed': 'Add character with carefully aged rugs that tell a story. Vintage-inspired designs with distressed finishes for that perfectly imperfect charm.',
  'geometric-pattern': 'Make a statement with bold geometric designs. Sharp lines and striking patterns that create visual interest and modern appeal.',
  'solid-color-area': 'Simplicity meets elegance in our solid color collection. Versatile foundation pieces that complement any décor style.',
  
  // Bedroom subcategories
  'soft-shag': 'Sink your feet into luxurious comfort with our ultra-soft shag rugs. Perfect for creating a cozy, cloud-like feeling in your bedroom sanctuary.',
  'luxury-silk': 'Experience unparalleled luxury with our pure silk collection. Lustrous, smooth textures that add glamour and sophistication to your private retreat.',
  'cozy-wool': 'Embrace natural warmth with our premium wool rugs. Soft, breathable, and naturally stain-resistant for year-round comfort.',
  'minimalist-flat': 'Clean, modern aesthetics meet practical functionality. Low-profile flat weaves perfect for contemporary bedroom designs.',
  'plush-memory': 'Revolutionary comfort technology meets bedroom luxury. Memory foam backing provides unmatched support and cushioning.',
  
  // Dining Room subcategories
  'formal-oriental': 'Elevate your dining experience with sophisticated Oriental designs. Traditional patterns that create an atmosphere of refined elegance.',
  'easy-clean': 'Practical luxury for busy households. Stain-resistant materials that maintain beauty while handling everyday dining room challenges.',
  'natural-fiber': 'Sustainable elegance from nature\'s finest materials. Eco-friendly options that bring organic beauty to your dining space.',
  'stain-resistant': 'Advanced protection meets timeless style. Cutting-edge treatments that repel spills while maintaining luxurious appearance.',
  'classic-bordered': 'Traditional craftsmanship with distinctive border designs. Timeless patterns that frame your dining area with classic sophistication.',
  
  // Outdoor subcategories
  'weather-resistant': 'Built to withstand the elements while maintaining beauty. UV-resistant materials perfect for year-round outdoor enjoyment.',
  'patio-deck': 'Transform your outdoor living space with durable, stylish designs. Perfect for patios, decks, and covered outdoor areas.',
  'poolside': 'Chlorine-resistant luxury for pool areas. Quick-drying materials that maintain color and comfort in wet environments.',
  'garden-path': 'Guide guests through your garden with beautiful, weather-resistant runners. Durable designs that complement natural landscapes.',
  'all-season': 'Versatile outdoor rugs designed for changing weather conditions. Multi-season durability with year-round style.',
  
  // Specialty subcategories
  'handwoven-artisan': 'Celebrate traditional craftsmanship with museum-quality handwoven pieces. Each rug is a unique work of art created by master artisans.',
  'custom-size': 'Perfect fit for any space with our custom sizing service. Tailored dimensions without compromising on quality or design.',
  'eco-friendly': 'Sustainable luxury from recycled and renewable materials. Beautiful designs that reflect your commitment to environmental responsibility.',
  'antique-collection': 'Rare vintage pieces with authentic patina and history. Carefully curated antique rugs that bring timeless character to any space.',
  'designer-collaboration': 'Exclusive limited editions from renowned designers. Cutting-edge artistry meets traditional craftsmanship in these collector pieces.'
};

// Category data
export const categories: Category[] = [
  {
    id: 'living-room',
    name: 'Living Room Rugs',
    subcategories: [
      { id: 'traditional-persian', name: 'Traditional Persian Rugs', parentId: 'living-room' },
      { id: 'modern-contemporary', name: 'Modern Contemporary Rugs', parentId: 'living-room' },
      { id: 'vintage-distressed', name: 'Vintage Distressed Rugs', parentId: 'living-room' },
      { id: 'geometric-pattern', name: 'Geometric Pattern Rugs', parentId: 'living-room' },
      { id: 'solid-color-area', name: 'Solid Color Area Rugs', parentId: 'living-room' }
    ]
  },
  {
    id: 'bedroom',
    name: 'Bedroom Rugs',
    subcategories: [
      { id: 'soft-shag', name: 'Soft Shag Rugs', parentId: 'bedroom' },
      { id: 'luxury-silk', name: 'Luxury Silk Rugs', parentId: 'bedroom' },
      { id: 'cozy-wool', name: 'Cozy Wool Rugs', parentId: 'bedroom' },
      { id: 'minimalist-flat', name: 'Minimalist Flat Weave', parentId: 'bedroom' },
      { id: 'plush-memory', name: 'Plush Memory Foam Rugs', parentId: 'bedroom' }
    ]
  },
  {
    id: 'dining-room',
    name: 'Dining Room Rugs',
    subcategories: [
      { id: 'formal-oriental', name: 'Formal Oriental Rugs', parentId: 'dining-room' },
      { id: 'easy-clean', name: 'Easy-Clean Synthetic Rugs', parentId: 'dining-room' },
      { id: 'natural-fiber', name: 'Natural Fiber Rugs', parentId: 'dining-room' },
      { id: 'stain-resistant', name: 'Stain-Resistant Rugs', parentId: 'dining-room' },
      { id: 'classic-bordered', name: 'Classic Bordered Rugs', parentId: 'dining-room' }
    ]
  },
  {
    id: 'outdoor',
    name: 'Outdoor Rugs',
    subcategories: [
      { id: 'weather-resistant', name: 'Weather-Resistant Rugs', parentId: 'outdoor' },
      { id: 'patio-deck', name: 'Patio & Deck Rugs', parentId: 'outdoor' },
      { id: 'poolside', name: 'Poolside Rugs', parentId: 'outdoor' },
      { id: 'garden-path', name: 'Garden Path Rugs', parentId: 'outdoor' },
      { id: 'all-season', name: 'All-Season Outdoor Rugs', parentId: 'outdoor' }
    ]
  },
  {
    id: 'specialty',
    name: 'Specialty Rugs',
    subcategories: [
      { id: 'handwoven-artisan', name: 'Handwoven Artisan Rugs', parentId: 'specialty' },
      { id: 'custom-size', name: 'Custom Size Rugs', parentId: 'specialty' },
      { id: 'eco-friendly', name: 'Eco-Friendly Rugs', parentId: 'specialty' },
      { id: 'antique-collection', name: 'Antique Collection Rugs', parentId: 'specialty' },
      { id: 'designer-collaboration', name: 'Designer Collaboration Rugs', parentId: 'specialty' }
    ]
  }
];



// Get selected category name
export const getSelectedCategoryName = (
  selectedCategory: string,
  selectedSubcategory: string,
  categories: Category[]
): string => {
  if (selectedSubcategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    const subcategory = category?.subcategories.find(sub => sub.id === selectedSubcategory);
    return subcategory?.name || 'Products';
  }
  if (selectedCategory === 'all') {
    return 'All Products';
  }
  return categories.find(cat => cat.id === selectedCategory)?.name || 'All Products';
};


