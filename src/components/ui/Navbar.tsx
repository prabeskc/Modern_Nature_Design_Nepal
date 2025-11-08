import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '../ui/Container.tsx';
import { Link } from 'react-router-dom';


// CSS animations for enhanced navbar interactions
const navbarAnimations = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
  }
  
  @keyframes expandSearch {
    from {
      width: 2.5rem;
      opacity: 0.8;
    }
    to {
      width: 20rem;
      opacity: 1;
    }
  }
  
  @keyframes contractSearch {
    from {
      width: 20rem;
      opacity: 1;
    }
    to {
      width: 2.5rem;
      opacity: 0.8;
    }
  }
  
  .navbar-item {
    position: relative;
    will-change: transform, color;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .navbar-item::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #10b981, #059669);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
    border-radius: 1px;
  }
  
  .navbar-item:hover::before {
    width: 100%;
  }
  
  .navbar-item:hover {
    transform: translateY(-1px) scale(1.02);
  }
  
  .navbar-item.active::before {
    width: 100%;
    background: linear-gradient(90deg, #059669, #047857);
  }
  
  .logo-animation {
    will-change: transform;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .logo-animation:hover {
    transform: scale(1.05) translateY(-1px);
    text-shadow: 0 4px 8px rgba(16, 185, 129, 0.2);
  }
  
  .mega-menu-enter {
    animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 9999;
  }
  
  .mega-menu-exit {
    animation: slideUp 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  .search-expand {
    animation: expandSearch 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  .search-contract {
    animation: contractSearch 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  .search-dropdown {
    z-index: 9998;
  }
  
  .mobile-menu-item {
    will-change: transform;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .mobile-menu-item:hover {
    transform: translateX(8px) scale(1.02);
  }
  
  .search-button {
    will-change: transform, background-color;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .search-button:hover {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.3));
  }
  
  .chevron-animation {
    will-change: transform;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .menu-button {
    will-change: transform;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .menu-button:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.25));
  }
  
  @media (max-width: 1024px) {
    .mega-menu-enter {
      left: 1rem !important;
      right: 1rem !important;
      width: auto !important;
      max-width: none !important;
      transform: none !important;
    }
  }
  
  @media (max-width: 640px) {
    .mega-menu-enter {
      padding: 1rem !important;
    }
    
    .search-dropdown {
      left: 0 !important;
      right: 0 !important;
      width: auto !important;
      margin: 0.5rem !important;
    }
  }
`;

interface NavbarProps {
  className?: string;
}

const megaMenuItems = {
  shop: {
    title: 'Collections',
    sections: [
      {
        title: 'Living Room Rugs',
        items: [
          { name: 'Traditional Persian Rugs', id: 'traditional-persian' },
          { name: 'Modern Contemporary Rugs', id: 'modern-contemporary' },
          { name: 'Vintage Distressed Rugs', id: 'vintage-distressed' },
          { name: 'Geometric Pattern Rugs', id: 'geometric-pattern' },
          { name: 'Solid Color Area Rugs', id: 'solid-color-area' }
        ],
        categoryId: 'living-room'
      },
      {
        title: 'Bedroom Rugs',
        items: [
          { name: 'Soft Shag Rugs', id: 'soft-shag' },
          { name: 'Luxury Silk Rugs', id: 'luxury-silk' },
          { name: 'Cozy Wool Rugs', id: 'cozy-wool' },
          { name: 'Minimalist Flat Weave', id: 'minimalist-flat' },
          { name: 'Plush Memory Foam Rugs', id: 'plush-memory' }
        ],
        categoryId: 'bedroom'
      },
      {
        title: 'Dining Room Rugs',
        items: [
          { name: 'Formal Oriental Rugs', id: 'formal-oriental' },
          { name: 'Easy-Clean Synthetic Rugs', id: 'easy-clean' },
          { name: 'Natural Fiber Rugs', id: 'natural-fiber' },
          { name: 'Stain-Resistant Rugs', id: 'stain-resistant' },
          { name: 'Classic Bordered Rugs', id: 'classic-bordered' }
        ],
        categoryId: 'dining-room'
      },
      {
        title: 'Outdoor Rugs',
        items: [
          { name: 'Weather-Resistant Rugs', id: 'weather-resistant' },
          { name: 'Patio & Deck Rugs', id: 'patio-deck' },
          { name: 'Poolside Rugs', id: 'poolside' },
          { name: 'Garden Path Rugs', id: 'garden-path' },
          { name: 'All-Season Outdoor Rugs', id: 'all-season' }
        ],
        categoryId: 'outdoor'
      },
      {
        title: 'Specialty Rugs',
        items: [
          { name: 'Handwoven Artisan Rugs', id: 'handwoven-artisan' },
          { name: 'Custom Size Rugs', id: 'custom-size' },
          { name: 'Eco-Friendly Rugs', id: 'eco-friendly' },
          { name: 'Antique Collection Rugs', id: 'antique-collection' },
          { name: 'Designer Collaboration Rugs', id: 'designer-collaboration' }
        ],
        categoryId: 'specialty'
      }
    ]
  }
};

// Dummy search data
const searchData = [
  {
    id: 1,
    name: 'Himalayan Heritage',
    price: 1299,
    description: 'Hand-knotted wool rug with traditional Nepalese patterns'
  },
  {
    id: 2,
    name: 'Mountain Mist',
    price: 899,
    description: 'Soft gray tones inspired by morning fog in the mountains'
  },
  {
    id: 3,
    name: 'Sherpa Trail',
    price: 999,
    description: 'Geometric patterns inspired by mountain paths'
  },
  {
    id: 4,
    name: 'Kathmandu Nights',
    price: 1399,
    description: 'Sophisticated urban-inspired design with traditional roots'
  },
  {
    id: 5,
    name: 'Alpine Meadow',
    price: 1199,
    description: 'Fresh green hues reminiscent of high-altitude grasslands'
  },
  {
    id: 6,
    name: 'Everest Base',
    price: 1599,
    description: 'Bold patterns celebrating the world\'s highest peak'
  },
  {
    id: 7,
    name: 'Tibetan Sunrise',
    price: 1099,
    description: 'Warm colors capturing the first light over the plateau'
  },
  {
    id: 8,
    name: 'Monastery Calm',
    price: 799,
    description: 'Minimalist design inspired by peaceful temple spaces'
  },
  {
    id: 9,
    name: 'Yak Wool Classic',
    price: 1799,
    description: 'Premium yak wool with centuries-old weaving techniques'
  },
  {
    id: 10,
    name: 'Prayer Flag Colors',
    price: 949,
    description: 'Vibrant multi-colored design inspired by Tibetan prayer flags'
  }
];

export default function Navbar({ className = '' }: NavbarProps) {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<'left' | 'center' | 'right'>('center');
  const [dropdownVerticalPosition, setDropdownVerticalPosition] = useState<'bottom' | 'top'>('bottom');
  const [searchDropdownPosition, setSearchDropdownPosition] = useState<'left' | 'right'>('right');
  const [searchVerticalPosition, setSearchVerticalPosition] = useState<'bottom' | 'top'>('bottom');
  const [isHovering, setIsHovering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Inject CSS animations
  useEffect(() => {
    const styleId = 'navbar-animations';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = navbarAnimations;
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handleMegaMenuToggle = (menu: string) => {
    if (activeMegaMenu === menu) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menu);
      // Calculate dropdown position after state update
      setTimeout(() => calculateDropdownPosition(), 0);
    }
  };

  // Hover handlers for Products button
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovering(true);
    setActiveMegaMenu('shop');
    setTimeout(() => calculateDropdownPosition(), 0);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
      setActiveMegaMenu(null);
    }, 250);
  };

  // Click handler for navigation to products page
  const handleProductsClick = () => {
    // Clear any hover timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Close dropdown and navigate
    setActiveMegaMenu(null);
    setIsHovering(false);
  };

  const calculateDropdownPosition = () => {
    if (!dropdownRef.current || !megaMenuRef.current) return;

    const dropdown = dropdownRef.current;
    const megaMenu = megaMenuRef.current;
    const dropdownRect = dropdown.getBoundingClientRect();
    const megaMenuWidth = 1024; // max-w-5xl = 1024px
    const megaMenuHeight = 300; // Estimated dropdown height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 32; // Safe padding from viewport edges

    // Calculate horizontal position
    const leftSpace = dropdownRect.left;
    const rightSpace = viewportWidth - dropdownRect.right;
    const centerLeft = dropdownRect.left + dropdownRect.width / 2 - megaMenuWidth / 2;
    const centerRight = centerLeft + megaMenuWidth;

    // Determine optimal horizontal position
    if (centerLeft >= padding && centerRight <= viewportWidth - padding) {
      setDropdownPosition('center');
    } else if (leftSpace >= megaMenuWidth + padding) {
      setDropdownPosition('right');
    } else if (rightSpace >= megaMenuWidth + padding) {
      setDropdownPosition('left');
    } else {
      setDropdownPosition('center');
    }

    // Calculate vertical position
    const spaceBelow = viewportHeight - dropdownRect.bottom - 8; // 8px for mt-2
    const spaceAbove = dropdownRect.top - 8; // 8px for mb-2

    // Determine optimal vertical position
    if (spaceBelow >= megaMenuHeight + padding) {
      setDropdownVerticalPosition('bottom');
    } else if (spaceAbove >= megaMenuHeight + padding) {
      setDropdownVerticalPosition('top');
    } else {
      // Default to bottom with scroll if needed
      setDropdownVerticalPosition('bottom');
    }
  };

  const handleMegaMenuClose = () => {
    setActiveMegaMenu(null);
  };

  // Search filtering logic
  useEffect(() => {
    if (searchValue.trim()) {
      const filtered = searchData.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearchResults(true);
      // Calculate search dropdown position
      setTimeout(() => calculateSearchDropdownPosition(), 0);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchValue]);

  const calculateSearchDropdownPosition = () => {
    if (!searchRef.current) return;

    const searchContainer = searchRef.current;
    const searchRect = searchContainer.getBoundingClientRect();
    const dropdownWidth = 384; // w-96 = 384px
    const dropdownHeight = 384; // max-h-96 = 384px
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 16; // Safe padding from viewport edges

    // Calculate horizontal position
    const rightSpace = viewportWidth - searchRect.right;

    if (rightSpace >= dropdownWidth + padding) {
      setSearchDropdownPosition('right');
    } else {
      setSearchDropdownPosition('left');
    }

    // Calculate vertical position
    const spaceBelow = viewportHeight - searchRect.bottom - 8; // 8px for mt-2
    const spaceAbove = searchRect.top - 8; // 8px for mb-2

    if (spaceBelow >= dropdownHeight + padding) {
      setSearchVerticalPosition('bottom');
    } else if (spaceAbove >= dropdownHeight + padding) {
      setSearchVerticalPosition('top');
    } else {
      setSearchVerticalPosition('bottom');
    }
  };

  // Click outside to close dropdown and search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
        setShowSearchResults(false);
      }
    };

    const handleResize = () => {
      if (activeMegaMenu) {
        calculateDropdownPosition();
      }
      if (showSearchResults) {
        calculateSearchDropdownPosition();
      }
    };

    const handleScroll = () => {
      // Recalculate positions on scroll to handle viewport changes
      if (activeMegaMenu) {
        calculateDropdownPosition();
      }
      if (showSearchResults) {
        calculateSearchDropdownPosition();
      }
    };

    if (activeMegaMenu || isSearchExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      // Cleanup hover timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [activeMegaMenu, isSearchExpanded]);

  // Handle keyboard events for search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isSearchExpanded) {
        setIsSearchExpanded(false);
        setSearchValue('');
        setShowSearchResults(false);
      }
    };

    if (isSearchExpanded) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchExpanded]);

  // Auto-focus search input when expanded
  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  // Scroll event listener to collapse search bar
  useEffect(() => {
    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Debounce scroll events for performance
      scrollTimeoutRef.current = setTimeout(() => {
        // Collapse search bar if it's expanded when scrolling
        if (isSearchExpanded) {
          setIsSearchExpanded(false);
          setSearchValue('');
          setShowSearchResults(false);
        }
      }, 50); // 50ms debounce for responsive feel
    };

    // Add scroll event listener when search is expanded
    if (isSearchExpanded) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isSearchExpanded]);

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded) {
      setSearchValue('');
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log('Search for:', searchValue);
      // Handle search logic here
    }
  };

  const handleSearchResultClick = (item: typeof searchData[0]) => {
    console.log('Selected product:', item);
    setSearchValue('');
    setIsSearchExpanded(false);
    setShowSearchResults(false);
    // Here you could navigate to the product page or add to cart
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/20 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : 'bg-off-white'
      } ${className}`}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0 mr-8">
            <h1
              className="logo-animation font-serif text-xl lg:text-2xl font-medium text-charcoal drop-shadow-sm cursor-pointer"
              onClick={scrollToTop}
            >
              <Link to="/">
                <div className="flex items-center space-x-4">
                  <img
                    src="assets/images/navbar/MND_Logo.png"
                    alt="logo"
                    className="h-16 w-16"
                  />
                  <span className="text-xl font-semibold">
                    Modern Nature Design Nepal
                  </span>
                </div>
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <div
                ref={dropdownRef}
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/products"
                  onClick={handleProductsClick}
                  className={`navbar-item flex items-center space-x-1 text-charcoal drop-shadow-sm hover:bg-white/20 px-4 py-3 rounded-lg text-base ${activeMegaMenu === 'shop' ? 'active' : ''
                    }`}
                >
                  <span>Collections</span>
                  <ChevronDown className={`chevron-animation w-4 h-4 ${activeMegaMenu === 'shop' ? 'rotate-180' : ''
                    }`} />
                </Link>

                {/* Mega Menu */}
                {activeMegaMenu === 'shop' && (
                  <div
                    ref={megaMenuRef}
                    className={`mega-menu-enter absolute p-6 rounded-lg shadow-2xl border border-white/30 w-screen max-w-5xl z-[9999] ${dropdownVerticalPosition === 'top'
                      ? 'bottom-full mb-2'
                      : 'top-full mt-2'
                      } ${dropdownPosition === 'left'
                        ? 'left-0'
                        : dropdownPosition === 'right'
                          ? 'right-0'
                          : 'right-0 lg:left-1/2 lg:transform lg:-translate-x-1/2'
                      } ${dropdownPosition === 'center' && (window.innerWidth < 1024)
                        ? 'left-4 right-4 w-auto max-w-none'
                        : ''
                      } ${isScrolled ? 'bg-white/95 backdrop-blur-lg' : 'bg-off-white'
                      }`}
                    style={{
                      maxHeight: dropdownVerticalPosition === 'top'
                        ? `${Math.min(400, window.innerHeight - 120)}px`
                        : `${Math.min(400, window.innerHeight - (dropdownRef.current?.getBoundingClientRect().bottom || 0) - 40)}px`,
                      overflowY: 'auto'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {megaMenuItems.shop.sections.map((section) => (
                        <div key={section.title}>
                          <Link
                            to={`/products?category=${section.categoryId}`}
                            onClick={handleMegaMenuClose}
                            className="block mb-3"
                          >
                            <h3 className="font-medium text-charcoal drop-shadow-sm text-base leading-5 hover:text-mint-green transition-colors duration-200">
                              {section.title}
                            </h3>
                          </Link>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.id}>
                                <Link
                                  to={`/products?category=${section.categoryId}&subcategory=${item.id}`}
                                  onClick={handleMegaMenuClose}
                                  className="navbar-item text-charcoal/70 hover:bg-white/30 hover:text-charcoal px-3 py-2 rounded text-sm block leading-6 transition-all duration-200"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => scrollToSection('about')}
                onMouseEnter={() => setActiveNavItem('about')}
                onMouseLeave={() => setActiveNavItem(null)}
                className={`navbar-item text-charcoal drop-shadow-sm hover:bg-white/20 px-4 py-3 rounded-lg text-base ${activeNavItem === 'about' ? 'active' : ''
                  }`}
              >About</Link>
              <Link
                to="/services"
                onClick={() => scrollToSection('services')}
                onMouseEnter={() => setActiveNavItem('services')}
                onMouseLeave={() => setActiveNavItem(null)}
                className={`navbar-item text-charcoal drop-shadow-sm hover:bg-white/20 px-4 py-3 rounded-lg text-base ${activeNavItem === 'services' ? 'active' : ''
                  }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                onMouseEnter={() => setActiveNavItem('contact')}
                onMouseLeave={() => setActiveNavItem(null)}
                className={`navbar-item text-charcoal drop-shadow-sm hover:bg-white/20 px-4 py-3 rounded-lg text-base ${activeNavItem === 'contact' ? 'active' : ''
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* Animated Search Bar - Far Right */}
            <div
              ref={searchRef}
              className="relative flex items-center ml-4"
            >
              <div className={`flex items-center transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-80' : 'w-10'
                }`}>
                <button
                  onClick={handleSearchToggle}
                  className={`search-button flex-shrink-0 p-2 text-charcoal drop-shadow-sm rounded-full z-10 ${isScrolled ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/20'
                    }`}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                <form
                  onSubmit={handleSearchSubmit}
                  className={`absolute left-0 top-0 h-full transition-all duration-300 ease-in-out ${isSearchExpanded
                    ? 'w-full opacity-100 pointer-events-auto'
                    : 'w-10 opacity-0 pointer-events-none'
                    }`}
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search products..."
                    className={`w-full h-full pl-12 pr-4 py-2 rounded-full border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-mint-green/50 focus:border-mint-green ${isScrolled
                      ? 'bg-white/20 backdrop-blur-lg border-white/20 text-charcoal placeholder-charcoal/50'
                      : 'bg-white/80 border-white/30 text-charcoal placeholder-charcoal/60'
                      }`}
                  />
                </form>
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div
                  ref={searchResultsRef}
                  className={`search-dropdown absolute w-96 shadow-2xl border border-white/30 rounded-lg overflow-y-auto z-[9998] ${searchVerticalPosition === 'top'
                    ? 'bottom-full mb-2'
                    : 'top-full mt-2'
                    } ${searchDropdownPosition === 'left' ? 'left-0' : 'right-0'
                    } ${window.innerWidth < 400
                      ? 'left-0 right-0 w-auto'
                      : ''
                    } ${isScrolled ? 'bg-white/95 backdrop-blur-lg' : 'bg-off-white'
                    }`}
                  style={{
                    maxHeight: searchVerticalPosition === 'top'
                      ? `${Math.min(384, window.innerHeight - 120)}px`
                      : `${Math.min(384, window.innerHeight - (searchRef.current?.getBoundingClientRect().bottom || 0) - 40)}px`,
                    minWidth: window.innerWidth < 400 ? 'auto' : '384px'
                  }}
                >
                  <div className="p-2">
                    {searchResults.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSearchResultClick(item)}
                        className="w-full text-left p-3 hover:bg-white/30 rounded-lg transition-all duration-200 border-b border-white/20 last:border-b-0"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-charcoal text-sm">{item.name}</h4>
                            <p className="text-charcoal/70 text-xs mt-1 line-clamp-2">{item.description}</p>
                          </div>
                          <div className="ml-3 flex-shrink-0">
                            <span className="text-mint-green font-medium text-sm">${item.price}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {searchResults.length === 0 && searchValue.trim() && (
                    <div className="p-4 text-center text-charcoal/70 text-sm">
                      No products found for "{searchValue}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="menu-button lg:hidden p-3 text-charcoal drop-shadow-sm rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t border-white/30 ${isScrolled ? 'bg-white/95 backdrop-blur-lg' : 'bg-off-white'
          }`}>
          <Container>
            <div className="py-4 space-y-4">
              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-item block w-full text-left text-charcoal drop-shadow-sm hover:bg-white/30 px-4 py-3 rounded-lg text-base"
              >
                Products
              </Link>

              {/* Product Categories for Mobile */}
              <div className="ml-4 space-y-2">
                {megaMenuItems.shop.sections.map((section) => (
                  <Link
                    key={section.categoryId}
                    to={`/products?category=${section.categoryId}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-item block text-charcoal/80 drop-shadow-sm hover:bg-white/30 px-3 py-2 rounded-lg text-sm"
                  >
                    {section.title}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-item block w-full text-left text-charcoal drop-shadow-sm hover:bg-white/30 px-4 py-3 rounded-lg text-base"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-item block w-full text-left text-charcoal drop-shadow-sm hover:bg-white/30 px-4 py-3 rounded-lg text-base"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-item block w-full text-left text-charcoal drop-shadow-sm hover:bg-white/30 px-4 py-3 rounded-lg text-base"
              >
                Contact
              </Link>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}