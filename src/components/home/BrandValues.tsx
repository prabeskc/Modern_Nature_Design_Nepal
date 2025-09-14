import { useState, useEffect, useRef } from 'react';
import { Heart, Leaf, Award } from 'lucide-react';
import Container from '../ui/Container.tsx';


interface ValueIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueIcon({ icon, title, description, isVisible, index }: ValueIconProps & { isVisible: boolean; index: number }) {
  return (
    <div className={`text-center group transform transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`} style={{ transitionDelay: `${index * 200}ms` }}>
      <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-charcoal">
          {icon}
        </div>
      </div>
      
      <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-mint-green transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-charcoal/70 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function BrandValues() {
  const [isVisible, setIsVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isDecorativeVisible, setIsDecorativeVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const decorativeRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Handcrafted',
      description: 'Every rug is meticulously hand-knotted by skilled artisans using traditional techniques passed down through generations.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Responsible Sourcing',
      description: 'We partner with local communities and use sustainable materials, ensuring our practices benefit both people and planet.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Artisanal Care',
      description: 'From design to delivery, each rug receives individual attention and quality control that reflects our commitment to excellence.'
    }
  ];

  useEffect(() => {
    const observers = [];

    // Section heading observer
    if (sectionRef.current) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      sectionObserver.observe(sectionRef.current);
      observers.push(sectionObserver);
    }

    // Grid observer
    if (gridRef.current) {
      const gridObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsGridVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      gridObserver.observe(gridRef.current);
      observers.push(gridObserver);
    }

    // Decorative elements observer
    if (decorativeRef.current) {
      const decorativeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsDecorativeVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      decorativeObserver.observe(decorativeRef.current);
      observers.push(decorativeObserver);
    }

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="values" className="py-16 lg:py-20 bg-charcoal">
      <Container>
        <div ref={sectionRef} className="text-center mb-12 lg:mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-off-white mb-4">
              The Rug Company World
            </h2>
            <p className="text-off-white/70 text-lg max-w-2xl mx-auto">
              Our commitment to quality, sustainability, and craftsmanship defines everything we do
            </p>
          </div>
        </div>
        
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
              <ValueIcon
                icon={value.icon}
                title={value.title}
                description={value.description}
                isVisible={isGridVisible}
                index={index}
              />
            </div>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div ref={decorativeRef} className="flex justify-center mt-16">
          <div className={`flex space-x-2 transform transition-all duration-1000 delay-700 ${
            isDecorativeVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-mint-green rounded-full opacity-50"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </Container>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          
          .animate-pulse-slow {
            animation: pulse 2s infinite;
          }
        `
      }} />
    </section>
  );
}