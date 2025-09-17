import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Main navigation header component with responsive design
 * Features LG&T Play Arena branding, mobile hamburger menu, and prominent phone display
 */
const Header = () => {
  const [is_mobile_menu_open, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items configuration
  const nav_items = [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Contact information
  const phone_number = '(555) 123-SPORT';

  /**
   * Check if the current path matches the nav item path
   * @param {string} path - The navigation item path
   * @returns {boolean} Whether the path is currently active
   */
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  /**
   * Toggle mobile menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!is_mobile_menu_open);
  };

  /**
   * Close mobile menu when a nav item is clicked
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Handle smooth scrolling for internal links
   */
  const handleSmoothScroll = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    closeMobileMenu();
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo - LG&T Play Arena */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center">
              {/* Logo Icon Placeholder */}
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <span className="text-white font-bold text-lg">LG&T</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-800">
                  <span className="text-red-500">PLAY</span>{' '}
                  <span className="text-gray-900">ARENA</span>
                </div>
                <div className="text-xs text-gray-500 font-medium">Multi-Sport Complex</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {nav_items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleSmoothScroll(e, item.path)}
                  className={`font-medium text-sm tracking-wide transition-all duration-200 hover:scale-105 ${
                    isActivePath(item.path)
                      ? 'text-red-600 border-b-2 border-red-600 pb-1'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <a 
                href={`tel:${phone_number}`}
                className="font-semibold text-sm hover:text-red-600 transition-colors duration-200"
              >
                {phone_number}
              </a>
            </div>

            {/* CTA Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {/* Phone Number */}
            <a 
              href={`tel:${phone_number}`}
              className="text-red-500 font-semibold text-sm hover:text-red-600 transition-colors duration-200"
            >
              {phone_number}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Phone Number */}
            <a 
              href={`tel:${phone_number}`}
              className="text-red-500 text-sm font-semibold"
            >
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline">Call</span>
              </div>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-red-500 focus:outline-none focus:text-red-500 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6 fill-current transform transition-transform duration-200" viewBox="0 0 24 24">
                {is_mobile_menu_open ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {is_mobile_menu_open && (
          <div className="md:hidden mobile-menu-enter">
            <div className="bg-white border-t border-gray-200 shadow-lg">
              {/* Mobile Navigation Links */}
              <div className="px-4 py-4 space-y-3">
                {nav_items.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleSmoothScroll(e, item.path)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`block px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 min-h-[52px] flex items-center animate-slide-up ${
                      isActivePath(item.path)
                        ? 'text-red-600 bg-red-50 border-l-4 border-red-500 shadow-sm'
                        : 'text-gray-700 active:text-red-600 active:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="px-4 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-medium text-gray-600">Contact Us</span>
                  <a 
                    href={`tel:${phone_number}`}
                    className="text-red-500 font-semibold text-base active:text-red-600 transition-colors duration-200 min-h-[44px] flex items-center px-3 py-2 rounded-lg"
                  >
                    {phone_number}
                  </a>
                </div>
                
                {/* Mobile CTA Button */}
                <button 
                  onClick={closeMobileMenu}
                  className="w-full bg-red-500 active:bg-red-600 text-white font-semibold py-4 px-4 rounded-lg transition-colors duration-200 shadow-md min-h-[48px] text-base"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
