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
          <div className="hidden md:flex items-center space-x-8">
            {nav_items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-primary">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-secondary-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {nav_items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <button className="btn-primary w-full">
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
