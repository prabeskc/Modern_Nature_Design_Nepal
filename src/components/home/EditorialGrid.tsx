import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from './Container';
import SectionHeading from './SectionHeading';

interface Editorial {
  id: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

interface EditorialCardProps {
  editorial: Editorial;
  size?: 'small' | 'medium' | 'large';
}

function EditorialCard({ editorial, size = 'medium' }: EditorialCardProps) {
  const sizeClasses = {
    small: 'row-span-1',
    medium: 'row-span-2',
    large: 'row-span-3'
  };

  const handleClick = () => {
    if (editorial.link.startsWith('#')) {
      const element = document.getElementById(editorial.link.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`group cursor-pointer ${sizeClasses[size]}`} onClick={handleClick}>
      <div className="relative h-full bg-off-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={editorial.image}
            alt={editorial.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
        </div>
        
        <div className="p-6">
          <span className="inline-block text-sm font-medium text-mint-green mb-2 uppercase tracking-wide">
            {editorial.eyebrow}
          </span>
          <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-mint-green transition-colors duration-200">
            {editorial.title}
          </h3>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            {editorial.excerpt}
          </p>
          <div className="flex items-center text-mint-green font-medium group-hover:text-charcoal transition-colors duration-200">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
        
        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-mint-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>
    </div>
  );
}

export default function EditorialGrid() {
  const [editorials, setEditorials] = useState<Editorial[]>([]);

  useEffect(() => {
    // Load editorial data
    fetch('/src/data/editorial.json')
      .then(response => response.json())
      .then(data => setEditorials(data.editorial))
      .catch(error => console.error('Error loading editorial data:', error));
  }, []);

  // Define sizes for masonry effect
  const cardSizes: ('small' | 'medium' | 'large')[] = ['large', 'medium', 'small', 'medium', 'large', 'small'];

  return (
    <section id="editorial" className="py-16 lg:py-24 bg-warm-beige/30">
      <Container>
        <SectionHeading
          title="Heritage meets modern"
          subtitle="Discover the stories behind our handcrafted rugs and the artisans who create them"
          className="mb-12 lg:mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {editorials.slice(0, 6).map((editorial, index) => (
            <EditorialCard
              key={editorial.id}
              editorial={editorial}
              size={cardSizes[index] || 'medium'}
            />
          ))}
        </div>
        
        {editorials.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {/* Skeleton loading cards */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={cardSizes[index] === 'large' ? 'row-span-3' : cardSizes[index] === 'medium' ? 'row-span-2' : 'row-span-1'}>
                <div className="h-full bg-gray-200 rounded-lg animate-pulse">
                  <div className="h-48 bg-gray-300 rounded-t-lg" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-1/3" />
                    <div className="h-6 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-full" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}