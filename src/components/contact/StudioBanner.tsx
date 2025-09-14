import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/Container.tsx';


export default function StudioBanner() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="studio" 
      className="py-16 lg:py-24 bg-gradient-to-br from-sage-green/10 to-mint-green/10"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Studio Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Nature Design Nepal Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
            </div>
            
            {/* Embossed Logo Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`bg-mint-green/90 backdrop-blur-sm px-8 py-6 rounded-lg transform group-hover:scale-105 transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? '200ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <h3 className={`font-serif text-2xl lg:text-3xl font-medium text-charcoal text-center transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2'
                }`}
                style={{
                  transitionDelay: isVisible ? '400ms' : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                  Modern Nature
                  <br />
                  <span className={`text-lg transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2'
                  }`}
                  style={{
                    transitionDelay: isVisible ? '600ms' : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}>Design Nepal</span>
                </h3>
              </div>
            </div>
          </div>
          
          {/* Visit Us Card */}
          <div className={`bg-off-white rounded-lg p-8 lg:p-12 shadow-lg transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 translate-x-0 shadow-xl' 
              : 'opacity-0 translate-x-8 shadow-lg'
          }`}
          style={{
            transitionDelay: isVisible ? '300ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            <div className="mb-6">
              <span className={`inline-block text-sm font-medium text-mint-green uppercase tracking-wide mb-2 transition-all duration-600 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-3'
              }`}
              style={{
                transitionDelay: isVisible ? '500ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}>
                Our Studio
              </span>
              <h2 className={`font-serif text-3xl lg:text-4xl font-medium text-charcoal mb-6 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? '600ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}>
                Visit Us
              </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className={`text-charcoal/70 leading-relaxed transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-3'
              }`}
              style={{
                transitionDelay: isVisible ? '700ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}>
                Experience our handcrafted rugs in person at our showroom in the heart of Kathmandu. 
                Meet our artisans, learn about our processes, and discover the perfect rug for your space.
              </p>
              
              <div className="space-y-4">
                <div className={`transition-all duration-600 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-3'
                }`}
                style={{
                  transitionDelay: isVisible ? '800ms' : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                  <h4 className="font-medium text-charcoal mb-2">Showroom Hours</h4>
                  <p className="text-charcoal/70">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
                
                <div className={`transition-all duration-600 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-3'
                }`}
                style={{
                  transitionDelay: isVisible ? '900ms' : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                  <h4 className="font-medium text-charcoal mb-2">Location</h4>
                  <p className="text-charcoal/70">
                    Thamel District, Kathmandu<br />
                    Nepal
                  </p>
                </div>
                
                <div className={`transition-all duration-600 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-3'
                }`}
                style={{
                  transitionDelay: isVisible ? '1000ms' : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                  <h4 className="font-medium text-charcoal mb-2">Contact</h4>
                  <p className="text-charcoal/70">
                    +977-1-4123456<br />
                    hello@modernnaturedesignnepal.com
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('footer')}
              className={`bg-mint-green text-charcoal px-8 py-4 rounded-lg font-medium hover:bg-mint-green/90 transition-all duration-600 w-full sm:w-auto ${
                isVisible 
                  ? 'opacity-100 translate-y-0 shadow-md hover:shadow-lg' 
                  : 'opacity-0 translate-y-4 shadow-sm'
              }`}
              style={{
                transitionDelay: isVisible ? '1100ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              Find a showroom
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}