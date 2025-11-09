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
      id: 'rug-001',
      name: 'Aankhi Jhyal',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/AankhiJhyal.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-002',
      name: 'Attraction',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Attraction.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-003',
      name: 'Bamboos',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/bamboos.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-004',
      name: 'Bay Leaves',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/BayLeaves.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-005',
      name: 'Bubbles',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Bubbles.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-006',
      name: 'Burning Rope',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/BurningRope.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-007',
      name: 'Cells',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Cells.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-008',
      name: 'Childhood',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Childhood.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-009',
      name: 'Farm House',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/FarmHouse.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

     {
      id: 'rug-010',
      name: 'Festival',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Festival.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-011',
      name: 'Fountain Water',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/FountainWater.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-012',
      name: 'Gurung',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Gurung.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-013',
      name: 'Holi',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Holi.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-014',
      name: 'Imagination',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Imagination.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-015',
      name: 'Jungle Safari',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/JungleSafari.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-016',
      name: 'Jungle Tribes',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/JungleTribes.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-017',
      name: 'Lakhe Face',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/LakheFace.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-018',
      name: 'Majesty',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Majesty.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-019',
      name: 'Manaslu Circuit',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/ManasluCircut.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-020',
      name: 'Maze',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Maze.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-021',
      name: 'Mirror',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Mirror.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-022',
      name: 'Modern Fern',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/ModernFern.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-023',
      name: 'Monkey Temple',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/MonkeyTemple.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-024',
      name: 'Morning Sun',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/MorningSun.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-025',
      name: 'Nagh Daha',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/NaghDaha.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-026',
      name: 'Namche Bazar',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/NamcheBazar.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-027',
      name: 'On Board',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/OnBoard.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-028',
      name: 'On The Road',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/OnTheRoad.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-029',
      name: 'Paint',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Paint.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-030',
      name: 'Path',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Path.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-031',
      name: 'Rain Forest',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/RainForest.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-032',
      name: 'Retro',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Retro.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-033',
      name: 'Sherpa Love',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/SherpaLove.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-034',
      name: 'Shreepanch',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Shreepanch.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-035',
      name: 'Shyala',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Shyala.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-036',
      name: 'Sweet16',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Sweet16.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-037',
      name: 'Terai Farm',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/TeraiFarm.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-038',
      name: 'Thoughts',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Thoughts.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-039',
      name: 'Tides',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Tides.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-040',
      name: 'Trek',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Trek.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-041',
      name: 'Tsum Valley Patan',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/TsumValleyPatan.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-042',
      name: 'Undefined Universe',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/UndefinedUniverse.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-043',
      name: 'Vines',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Vines.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-044',
      name: 'Water Brust',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/WaterBrust.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-045',
      name: 'Water Coin',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/WaterCoin.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },

    {
      id: 'rug-046',
      name: 'Weave',
      material: 'Hand-knotted Wool',
      size: '9\'x12\'',
      price: '$2,899',
      style: 'Traditional Persian',
      imageUrl: '/assets/images/products/Weave.jpg',
      description: 'Experience the timeless elegance of our Majestic Persian Masterpiece. This exquisite hand-knotted wool rug showcases centuries-old weaving traditions with intricate patterns and rich colors that will transform any living space into a sophisticated sanctuary. Each knot is carefully tied by master craftsmen using premium wool, ensuring remarkable durability and lasting beauty. The traditional Persian design features elaborate medallions, floral motifs, and symmetries that evoke a sense of heritage and artistry. Perfect for formal living rooms, dining areas, or expansive bedrooms, this rug provides both visual depth and luxurious comfort underfoot.',
      features: [
        'Hand-knotted by master artisans',
        'Premium wool construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
      specifications: {
        'Dimensions': '9\' x 12\' (108" x 144")',
        'Material': 'Hand-knotted Wool',
        'Pile Height': '0.5 inches',
        'Knot Count': '400 knots per square inch',
        'Origin': 'Traditional Persian Style',
        'Care Instructions': 'Professional cleaning recommended',
        'Warranty': '10 years against manufacturing defects'
      }
    },
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
