import { Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Container from './Container';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set<string>());

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animation triggers
          const elements = ['brand', 'links', 'social', 'bottom'];
          elements.forEach((element, index) => {
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, element]));
            }, index * 150);
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    shop: {
      title: 'Shop',
      links: [
        { name: 'Bestsellers', action: () => scrollToSection('bestsellers') },
        { name: 'New Arrivals', action: () => scrollToSection('designs') }
      ]
    },
    about: {
      title: 'About',
      links: [
        { name: 'Our Story', action: () => scrollToSection('editorial') },
        { name: 'Craftsmanship', action: () => scrollToSection('process') }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Care Guide', action: () => {} },
        { name: 'Shipping', action: () => {} }
      ]
    }
  };

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/thenokocafe', label: 'Instagram' },
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' }
  ];

  return (
    <footer 
      ref={footerRef}
      id="footer" 
      className="bg-charcoal text-off-white relative overflow-hidden"
      style={{
        background: isVisible 
          ? 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 50%, #2c2c2c 100%)'
          : '#2c2c2c',
        transition: 'background 1.2s ease-out'
      }}
    >
      <Container>
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
            {/* Brand */}
            <div 
              className={`lg:col-span-2 transform transition-all duration-800 ease-out ${
                animatedElements.has('brand')
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                willChange: 'transform, opacity',
                transitionDelay: animatedElements.has('brand') ? '0ms' : '0ms'
              }}
            >
              <h2 className="font-serif text-xl font-medium text-off-white mb-3 hover:text-mint-green transition-colors duration-300">
                Modern Nature Design Nepal
              </h2>
              <p className="text-off-white/70 text-sm leading-relaxed mb-4 hover:text-off-white/90 transition-colors duration-300">
                Handcrafted rugs bridging traditional Nepalese artistry with contemporary design.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-off-white/70 text-sm hover:text-mint-green transition-all duration-300 group">
                  <MapPin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center text-off-white/70 text-sm hover:text-mint-green transition-all duration-300 group">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>hello@modernnaturedesignnepal.com</span>
                </div>
              </div>
            </div>
            
            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section], sectionIndex) => (
              <div 
                key={key}
                className={`transform transition-all duration-800 ease-out ${
                  animatedElements.has('links')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  willChange: 'transform, opacity',
                  transitionDelay: animatedElements.has('links') ? `${sectionIndex * 100}ms` : '0ms'
                }}
              >
                <h3 className="font-medium text-off-white mb-3 text-sm hover:text-mint-green transition-colors duration-300">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={link.action}
                        className="text-off-white/70 hover:text-mint-green hover:scale-105 transition-all duration-300 text-sm transform origin-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Social Links */}
            <div 
              className={`transform transition-all duration-800 ease-out ${
                animatedElements.has('social')
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                willChange: 'transform, opacity',
                transitionDelay: animatedElements.has('social') ? '300ms' : '0ms'
              }}
            >
              <h3 className="font-medium text-off-white mb-3 text-sm hover:text-mint-green transition-colors duration-300">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-off-white/10 hover:bg-mint-green/20 rounded-lg flex items-center justify-center text-off-white/70 hover:text-mint-green transition-all duration-300 hover:scale-110 hover:rotate-6 transform"
                    style={{
                      willChange: 'transform',
                      transitionDelay: `${index * 50}ms`
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div 
          className={`border-t border-off-white/20 py-6 transform transition-all duration-800 ease-out ${
            animatedElements.has('bottom')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
          style={{
            willChange: 'transform, opacity',
            transitionDelay: animatedElements.has('bottom') ? '450ms' : '0ms'
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-off-white/70 hover:text-mint-green hover:scale-105 transition-all duration-300 transform">
                Privacy Policy
              </button>
              <button className="text-off-white/70 hover:text-mint-green hover:scale-105 transition-all duration-300 transform">
                Terms of Service
              </button>
            </div>
            
            <p className="text-off-white/50 text-sm hover:text-off-white/70 transition-colors duration-300">
              © {new Date().getFullYear()} Modern Nature Design Nepal. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}