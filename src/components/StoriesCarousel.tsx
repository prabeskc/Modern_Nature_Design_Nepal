import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './Container';
import SectionHeading from './SectionHeading';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  publishedAt: string;
}

interface StoryCardProps {
  story: Story;
  variant?: 'default' | 'featured';
}

function StoryCard({ story, variant = 'default' }: StoryCardProps) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 group cursor-pointer">
      <div className="bg-off-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block text-sm font-medium text-mint-green uppercase tracking-wide">
              {story.category}
            </span>
            <span className="text-sm text-charcoal/60">
              {new Date(story.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          
          <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-mint-green transition-colors duration-200">
            {story.title}
          </h3>
          
          <p className="text-charcoal/70 leading-relaxed line-clamp-3">
            {story.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StoriesCarousel() {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    // Load stories data
    fetch('/src/data/stories.json')
      .then(response => response.json())
      .then(data => setStories(data.stories))
      .catch(error => console.error('Error loading stories data:', error));
  }, []);

  useEffect(() => {
    const updateScrollButtons = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => carousel.removeEventListener('scroll', updateScrollButtons);
    }
  }, [stories]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollToPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToPrevious = () => {
    if (carouselRef.current) {
      const cardWidth = 384 + 32; // w-96 + gap
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    if (carouselRef.current) {
      const cardWidth = 384 + 32; // w-96 + gap
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 384 + 32; // w-96 + gap
      carouselRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-warm-beige/20">
      <Container>
        <SectionHeading
          title="Stories From Our World"
          subtitle="Discover the people, places, and traditions that inspire our handcrafted rugs"
          className="mb-12 lg:mb-16"
        />
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <button
                onClick={scrollToPrevious}
                disabled={!canScrollLeft}
                className={`p-3 rounded-full transition-all duration-200 ${
                  canScrollLeft
                    ? 'bg-charcoal text-off-white hover:bg-charcoal/80'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Previous stories"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToNext}
                disabled={!canScrollRight}
                className={`p-3 rounded-full transition-all duration-200 ${
                  canScrollRight
                    ? 'bg-charcoal text-off-white hover:bg-charcoal/80'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Next stories"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {stories.slice(0, Math.ceil(stories.length / 2)).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index * 2)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    Math.floor(currentIndex / 2) === index ? 'bg-mint-green' : 'bg-charcoal/30'
                  }`}
                  aria-label={`Go to story group ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story) => (
              <div key={story.id} className="snap-start">
                <StoryCard story={story} />
              </div>
            ))}
            
            {/* Loading skeletons */}
            {stories.length === 0 && (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-gray-200 rounded-lg overflow-hidden animate-pulse h-full">
                    <div className="aspect-[4/3] bg-gray-300" />
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between">
                        <div className="h-4 bg-gray-300 rounded w-1/4" />
                        <div className="h-4 bg-gray-300 rounded w-1/4" />
                      </div>
                      <div className="h-6 bg-gray-300 rounded w-3/4" />
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-full" />
                        <div className="h-4 bg-gray-300 rounded w-2/3" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </section>
  );
}