import { Link } from 'react-router-dom';
import { contact_info, facilities } from '../data/facilities.js';

/**
 * Footer component with site navigation, contact info, and social links
 * Responsive design with organized sections for easy navigation
 */
const Footer = () => {
  // Get current year for copyright
  const current_year = new Date().getFullYear();

  // Quick links for navigation
  const quick_links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/booking' }
  ];

  // Sport categories for quick facility access
  const sport_categories = facilities.map(facility => ({
    name: facility.name,
    path: `/facilities#${facility.sport}`
  }));

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="pt-12 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LG</span>
                </div>
                <span className="text-xl font-bold">Arena</span>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Premier multi-sport complex offering world-class facilities for 
                athletes of all levels. Your fitness journey starts here.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  🐦
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="YouTube"
                >
                  📺
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quick_links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Facilities</h3>
              <ul className="space-y-2">
                {sport_categories.map((facility) => (
                  <li key={facility.path}>
                    <Link
                      to={facility.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {facility.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Address</h4>
                  <p className="text-gray-300">
                    {contact_info.address.street}<br />
                    {contact_info.address.city}, {contact_info.address.state} {contact_info.address.zip}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Phone</h4>
                  <a 
                    href={`tel:${contact_info.phone}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {contact_info.phone}
                  </a>
                </div>

                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Email</h4>
                  <a 
                    href={`mailto:${contact_info.email}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {contact_info.email}
                  </a>
                </div>

                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Hours</h4>
                  <p className="text-gray-300">
                    Mon-Fri: {contact_info.operating_hours.weekdays}<br />
                    Weekends: {contact_info.operating_hours.weekends}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {current_year} {contact_info.name}. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/accessibility" 
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
