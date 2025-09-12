import { useState, useEffect } from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';

interface HomeFeature {
  id: string;
  title: string;
  label: string;
  image: string;
  category: string;
}

interface FeatureTileProps {
  feature: HomeFeature;
  onHover: (label: string) => void;
}

function FeatureTile({ feature, onHover }: FeatureTileProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(feature.label);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // Scroll to bestsellers section with category filter
    const element = document.getElementById('bestsellers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-warm-beige shadow-md hover:shadow-xl transition-all duration-300">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="font-serif text-2xl font-medium text-white mb-2 group-hover:text-mint-green transition-colors duration-200">
            {feature.title}
          </h3>
          
          {/* Label chip - appears on hover */}
          <div className={`inline-flex items-center px-4 py-2 bg-mint-green text-charcoal rounded-full font-medium text-sm transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {feature.label}
          </div>
        </div>
        
        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-mint-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>
    </div>
  );
}

export default function DiscoverHome() {
  const [features, setFeatures] = useState<HomeFeature[]>([]);
  const [hoveredLabel, setHoveredLabel] = useState<string>('');

  useEffect(() => {
    // Load home features data
    fetch('/src/data/home-features.json')
      .then(response => response.json())
      .then(data => setFeatures(data.features))
      .catch(error => console.error('Error loading home features data:', error));
  }, []);

  const handleTileHover = (label: string) => {
    setHoveredLabel(label);
  };

  // Default features if data doesn't load
  const defaultFeatures: HomeFeature[] = [
    {
      id: 'feat-001',
      title: 'Living Room',
      label: 'Area Rugs',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'living-room'
    },
    {
      id: 'feat-002',
      title: 'Bathroom',
      label: 'Bath Mats',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'bathroom'
    },
    {
      id: 'feat-003',
      title: 'Hallway',
      label: 'Runner Rugs',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'hallway'
    }
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section id="discover" className="py-16 lg:py-24 bg-off-white">
      <Container>
        <SectionHeading
          title="Discover Home"
          subtitle="Find the perfect rug for every space in your home"
          className="mb-12 lg:mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.slice(0, 3).map((feature) => (
            <FeatureTile
              key={feature.id}
              feature={feature}
              onHover={handleTileHover}
            />
          ))}
        </div>
        
        {/* Hover feedback */}
        {hoveredLabel && (
          <div className="text-center mt-8">
            <p className="text-lg text-charcoal/70">
              Explore our <span className="font-medium text-mint-green">{hoveredLabel}</span> collection
            </p>
          </div>
        )}
        
        {/* Loading skeletons */}
        {features.length === 0 && displayFeatures === defaultFeatures && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg animate-pulse">
                <div className="w-full h-full bg-gray-300 rounded-lg" />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}