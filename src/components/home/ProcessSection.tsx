import { useEffect, useRef, useState } from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';

interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Design & Planning',
    description: 'Our artisans begin with traditional patterns, adapting ancient motifs for contemporary spaces while preserving cultural authenticity.',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Material Selection',
    description: 'We source the finest wool, silk, and natural fibers from local suppliers, ensuring sustainability and supporting local communities.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Hand-Knotting',
    description: 'Master weavers employ centuries-old techniques, hand-knotting each rug with precision and care that machines cannot replicate.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Quality Finishing',
    description: 'Each completed rug undergoes meticulous inspection and finishing touches, ensuring it meets our exacting standards before reaching your home.',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

interface ProcessStepCardProps {
  step: ProcessStep;
  isVisible: boolean;
  index: number;
}

function ProcessStepCard({ step, isVisible, index }: ProcessStepCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24 ${
      isEven ? '' : 'md:grid-flow-col-dense'
    }`}>
      {/* Image */}
      <div className={`relative ${isEven ? '' : 'md:col-start-2'}`}>
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className={`${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : `${
            isEven ? '-translate-x-8' : 'translate-x-8'
          } opacity-0`
        }`}>
          {/* Step Number */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center mr-4">
              <span className="text-charcoal font-bold text-lg">{step.number}</span>
            </div>
            <div className="h-px bg-mint-green flex-1" />
          </div>
          
          <h3 className="font-serif text-2xl lg:text-3xl font-medium text-charcoal mb-4">
            {step.title}
          </h3>
          
          <p className="text-charcoal/70 leading-relaxed text-lg">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<Set<string>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => new Set([...prev, processSteps[index].id]));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="process" className="py-16 lg:py-24 bg-off-white">
      <Container>
        <SectionHeading
          title="How Our Rugs Are Created"
          subtitle="Discover the meticulous craftsmanship and time-honored techniques behind every handcrafted rug"
          className="mb-16 lg:mb-24"
        />
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-mint-green/30 transform -translate-x-1/2" />
          
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              ref={el => stepRefs.current[index] = el}
            >
              <ProcessStepCard
                step={step}
                isVisible={visibleSteps.has(step.id)}
                index={index}
              />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`transform transition-all duration-1000 ${
            visibleSteps.size >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
              Each rug represents months of dedicated craftsmanship, carrying forward traditions that have been passed down through generations of Nepalese artisans.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('bestsellers');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-charcoal text-off-white px-8 py-4 rounded-lg font-medium hover:bg-charcoal/90 transition-colors duration-200"
            >
              Explore Our Collection
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}