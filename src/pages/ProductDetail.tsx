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
      imageUrl: '/assets/images/products/AankhiJhyal.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-002',
      name: 'Attraction',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Attraction.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-003',
      name: 'Baasn',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/baasn.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-004',
      name: 'Bay Leaves',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/BayLeaves.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-005',
      name: 'Bubbles',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Bubbles.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-006',
      name: 'Burning Rope',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/BurningRope.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-007',
      name: 'Cells',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Cells.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-008',
      name: 'Childhood',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Childhood.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-010',
      name: 'Festival',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Festival.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-011',
      name: 'Fountain Water',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/FountainWater.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-012',
      name: 'Gurung',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Gurung.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-013',
      name: 'Holi',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Holi.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-014',
      name: 'Imagination',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Imagination.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },


    {
      id: 'rug-016',
      name: 'Jungle Tribes',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/JungleTribes.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-017',
      name: 'Lakhe Face',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/LakheFace.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-018',
      name: 'Majesty',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Majesty.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-019',
      name: 'Manaslu Circuit',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/ManasluCircut.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-020',
      name: 'Maze',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Maze.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-021',
      name: 'Mirror',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Mirror.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-023',
      name: 'Monkey Temple',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/MonkeyTemple.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-024',
      name: 'Morning Sun',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/MorningSun.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-025',
      name: 'Nagh Daha',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/NaghDaha.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-026',
      name: 'Namche Bazar',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/NamcheBazar.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-027',
      name: 'On Board',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/OnBoard.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-028',
      name: 'On The Road',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/OnTheRoad.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-029',
      name: 'Begnas Lake',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/BegnasLake.png',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-030',
      name: 'Path',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Path.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-031',
      name: 'Rain Forest',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/RainForest.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-032',
      name: 'Retro',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Retro.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-033',
      name: 'Sherpa Love',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/SherpaLove.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-034',
      name: 'Shreepanch',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Shreepanch.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-035',
      name: 'Shyala',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Shyala.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-036',
      name: 'Sweet16',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Sweet16.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-037',
      name: 'Terai Farm',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/TeraiFarm.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-038',
      name: 'Thoughts',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Thoughts.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-039',
      name: 'Tides',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Tides.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-040',
      name: 'Trek',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Trek.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-041',
      name: 'Tsum Valley Patan',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/TsumValleyPatan.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-042',
      name: 'Undefined Universe',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/UndefinedUniverse.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-043',
      name: 'Vines',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Vines.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-044',
      name: 'Water Brust',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/WaterBrust.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-045',
      name: 'Water Coin',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/WaterCoin.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-046',
      name: 'Weave',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Weave.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-047',
      name: 'Pari',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Pari.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-048',
      name: 'Chakati',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Chakati.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-049',
      name: 'Chino',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Chino.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },
    
    {
      id: 'rug-050',
      name: 'Kaath',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Kaath.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },
    
    {
      id: 'rug-051',
      name: 'Landmark',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Landmark.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },
    
    {
      id: 'rug-052',
      name: 'Paisa',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Paisa.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },
    
    {
      id: 'rug-053',
      name: 'Ping',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Ping.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },
    
    {
      id: 'rug-054',
      name: 'Purano Jhyal',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/PuranoJhyal.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },
    
    {
      id: 'rug-055',
      name: 'Smoke',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Smoke.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-056',
      name: 'Mandro',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Mandro.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-057',
      name: 'Tihar',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Tihar.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-058',
      name: 'The Wall',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/TheWall.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-059',
      name: 'Ring',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Ring.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-060',
      name: 'Lalitpur',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Lalitpur.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-061',
      name: 'Broken Mirror',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/BrokenMirror.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-062',
      name: 'Illusion',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Illusion.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-063',
      name: 'Beehive',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Beehive.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-064',
      name: 'Kunda',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Kunda.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },
    
     {
      id: 'rug-065',
      name: 'Budi Aunla',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/BudiAunla.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-066',
      name: 'Sukool',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Sukool.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-067',
      name: 'Water Lilies',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/WaterLilies.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-068',
      name: 'Birendra Taal',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/BirendraTaal.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

     {
      id: 'rug-069',
      name: 'Echo',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Echo.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    
     {
      id: 'rug-070',
      name: 'Kapaal',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Kapaal.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    
     {
      id: 'rug-071',
      name: 'Phulchoki',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Phulchoki.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
    },

    {
      id: 'rug-072',
      name: 'Thaali',
      material: 'Hand-knotted Wool',
      imageUrl: '/assets/images/products/Thaali.jpg',
      features: [
        'Hand-knotted by master artisans',
        'Premium yarn construction',
        'Traditional Persian design',
        'Fade-resistant colors',
        'Durable and long-lasting',
        'Easy to maintain'
      ],
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
            <span>Color Customizer</span>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>

        {/* Product Detail View Component */}
        <ProductDetailView
          product={product}
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
