import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Container from '../ui/Container.tsx';

import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';

interface DesignCard {
  id: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  materials: string;
  dimensions: string;
  price: string;
}

const latestDesigns: DesignCard[] = [
  {
    id: 'design-1',
    title: 'Himalayan Texture',
    description: 'Rich, tactile weaves inspired by mountain landscapes',
    image: 'assets/images/home/latestdesigns/1.jpg',
    detailedDescription: 'Our Himalayan Texture collection draws inspiration from the majestic mountain ranges of Nepal. Each rug features rich, tactile weaves that capture the essence of rugged landscapes and serene valleys. Hand-crafted by master artisans using traditional techniques passed down through generations.',
    materials: 'Premium Tibetan wool, Natural silk highlights',
    dimensions: '8\'x10\', 9\'x12\', 10\'x14\'',
    price: 'Starting from $2,400'
  },
  {
    id: 'design-2',
    title: 'Artisan Knots',
    description: 'Intricate hand-knotted patterns with contemporary appeal',
    image: 'assets/images/home/latestdesigns/2.jpg',
    detailedDescription: 'The Artisan Knots series showcases the pinnacle of Nepalese craftsmanship. Each piece features intricate hand-knotted patterns that blend traditional motifs with contemporary design sensibilities. The result is a timeless piece that complements modern interiors while honoring ancient traditions.',
    materials: 'Hand-spun wool, Bamboo silk accents',
    dimensions: '6\'x9\', 8\'x10\', 9\'x12\'',
    price: 'Starting from $1,800'
  },
  {
    id: 'design-3',
    title: 'Modern Heritage',
    description: 'Traditional techniques reimagined for today\'s interiors',
    image: 'assets/images/home/latestdesigns/3.jpg',
    detailedDescription: 'Modern Heritage represents the evolution of traditional rug-making for contemporary living spaces. These pieces maintain the soul of classical Nepalese designs while incorporating modern color palettes and simplified patterns that speak to today\'s aesthetic preferences.',
    materials: 'Organic wool, Natural dyes, Cotton foundation',
    dimensions: '5\'x8\', 8\'x10\', 9\'x12\'',
    price: 'Starting from $1,600'
  },
  {
    id: 'design-4',
    title: 'Zen Minimalism',
    description: 'Clean lines and subtle textures for modern spaces',
    image: 'assets/images/home/latestdesigns/4.jpg',
    detailedDescription: 'Zen Minimalism embodies the philosophy of \'less is more\'. These rugs feature clean lines, subtle textures, and a restrained color palette that creates a sense of calm and balance in any space. Perfect for contemporary homes seeking tranquility.',
    materials: 'Fine wool, Linen blend, Natural fibers',
    dimensions: '6\'x9\', 8\'x11\', 10\'x14\'',
    price: 'Starting from $2,200'
  },
  {
    id: 'design-5',
    title: 'Cultural Fusion',
    description: 'East meets West in harmonious design',
    image: 'assets/images/home/latestdesigns/5.jpg',
    detailedDescription: 'Cultural Fusion celebrates the meeting of Eastern and Western design philosophies. These rugs incorporate traditional Nepalese motifs with contemporary Western aesthetics, creating pieces that are both globally inspired and locally crafted.',
    materials: 'Highland wool, Silk details, Eco-friendly dyes',
    dimensions: '7\'x10\', 8\'x12\', 9\'x13\'',
    price: 'Starting from $2,800'
  }
];

interface CarouselCardProps {
  design: DesignCard;
  onClick: () => void;
  isVisible?: boolean;
  index?: number;
}

function CarouselCard({ design, onClick, isVisible = true, index = 0 }: CarouselCardProps) {
  return (
    <div 
      className={`flex-shrink-0 w-72 sm:w-80 h-80 sm:h-96 cursor-pointer group transition-all duration-500 hover:scale-105 hover:z-20 relative transform will-change-transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${400 + (index * 100)}ms`,
        transform: 'translate3d(0, 0, 0)' // Hardware acceleration
      }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-off-white shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
        <div className="h-full overflow-hidden">
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
          <h3 className="font-serif text-lg sm:text-xl font-medium mb-2 group-hover:text-mint-green transition-colors duration-300">
            {design.title}
          </h3>
          <p className="text-off-white/90 leading-relaxed text-xs sm:text-sm line-clamp-2">
            {design.description}
          </p>
          <div className="mt-2 sm:mt-3 text-mint-green font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Click to explore →
          </div>
        </div>
        
        <div className="absolute inset-0 bg-mint-green/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle border on hover */}
        <div className="absolute inset-0 border-2 border-mint-green/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

function ExpandedCardModal({ design, isOpen, onClose }: { design: DesignCard | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !design) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-off-white rounded-2xl shadow-2xl hover:shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-charcoal hover:bg-mint-green hover:text-charcoal transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative h-64 md:h-full">
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </div>
          
          {/* Content Section */}
          <div className="p-8 overflow-y-auto">
            <h2 className="font-serif text-3xl font-medium text-charcoal mb-4">
              {design.title}
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-6 text-lg">
              {design.detailedDescription}
            </p>
            
            {/* Details */}
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-medium text-charcoal mb-2">Materials</h3>
                <p className="text-charcoal/70">{design.materials}</p>
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-2">Available Sizes</h3>
                <p className="text-charcoal/70">{design.dimensions}</p>
              </div>
              {/* <div>
                <h3 className="font-medium text-charcoal mb-2">Price</h3>
                <p className="text-mint-green font-medium text-lg">{design.price}</p>
              </div> */}
            </div>
            
            {/* Actions */}
            <div>
              <Link to="/products" className="flex-1 bg-charcoal text-off-white px-6 py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors duration-200">
                View Details
              </Link>
              {/* <button className="flex-1 border-2 border-mint-green text-mint-green px-6 py-3 rounded-lg font-medium hover:bg-mint-green hover:text-charcoal transition-colors duration-200">
                Contact Us
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LatestDesigns() {
  const [selectedDesign, setSelectedDesign] = useState<DesignCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  const animationRef = useRef<number>();

  // Triple designs for seamless infinite scroll
  const duplicatedDesigns = [...latestDesigns, ...latestDesigns, ...latestDesigns];

  // Intersection observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
   useEffect(() => {
     const carousel = carouselRef.current;
     if (!carousel || isPaused) return;

     const scroll = () => {
       scrollPosition.current += 0.8; // Smooth scrolling speed
       
       // Reset position when we've scrolled through one complete set
       const cardWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
       const singleSetWidth = cardWidth * latestDesigns.length;
       
       // Reset to the middle set when reaching the end of second set
       if (scrollPosition.current >= singleSetWidth * 2) {
         scrollPosition.current = singleSetWidth;
       }
       
       carousel.style.transform = `translateX(-${scrollPosition.current}px)`;
       animationRef.current = requestAnimationFrame(scroll);
     };

     // Start from the middle set to allow seamless backward looping if needed
     const cardWidth = 320 + 24;
     const singleSetWidth = cardWidth * latestDesigns.length;
     scrollPosition.current = singleSetWidth;
     
     animationRef.current = requestAnimationFrame(scroll);

     return () => {
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
     };
   }, [isPaused]);

  const handleCardClick = (design: DesignCard) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDesign(null), 300);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-off-white overflow-hidden">
        <Container>
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <SectionHeading
              title="Latest Designs"
              subtitle="Discover our newest creations, where traditional craftsmanship meets contemporary design"
            />
          </div>
        </Container>
        
        {/* Horizontal Scrolling Carousel */}
         <div className={`mt-16 relative transform transition-all duration-1000 delay-300 ${
           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
         }`}>
           <div 
             className="overflow-hidden cursor-grab active:cursor-grabbing"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
           >
             <div
               ref={carouselRef}
               className="flex gap-6 will-change-transform"
               style={{ 
                 width: 'fit-content',
                 transform: 'translateX(0px)'
               }}
             >
               {duplicatedDesigns.map((design, index) => {
                 const cardIndex = index % latestDesigns.length;
                 
                 return (
                   <CarouselCard
                     key={`${design.id}-${index}`}
                     design={design}
                     onClick={() => handleCardClick(design)}
                     isVisible={isVisible}
                     index={cardIndex}
                   />
                 );
               })}
             </div>
           </div>
           
           {/* Gradient overlays for smooth edges */}
           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-off-white via-off-white/80 to-transparent pointer-events-none z-10" />
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-off-white via-off-white/80 to-transparent pointer-events-none z-10" />
         </div>
        
        {/* Instructions */}
        <div className="text-center mt-8">
        </div>
      </section>

      {/* Expanded Card Modal */}
      <ExpandedCardModal
        design={selectedDesign}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}