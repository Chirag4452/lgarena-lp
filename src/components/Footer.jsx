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
                <div className=" flex items-center justify-center">
                <img 
                src="/LG-arena-logo.png" 
                alt="LG87 Play Arena" 
                className="h-20  w-auto transition-transform duration-200 group-hover:scale-105"
              />
                </div>
                
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Premier multi-sport complex offering world-class facilities for 
                athletes of all levels. Your fitness journey starts here.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-3">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/@lg87playarena/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.314h3.59l-.467 3.696h-3.123V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/lg87playarena/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.533 2.583 5.8 2.295 7.166 2.233 8.432 2.175 8.812 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.07-1.036.047-1.602.22-1.978.396-.497.242-.852.532-1.227.907-.375.375-.665.73-.907 1.227-.176.376-.349.942-.396 1.978-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.047 1.036.22 1.602.396 1.978.242.497.532.852.907 1.227.375.375.73.665 1.227.907.376.176.942.349 1.978.396 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.036-.047 1.602-.22 1.978-.396.497-.242.852-.532 1.227-.907.375-.375.665-.73.907-1.227.176-.376.349-.942.396-1.978.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.047-1.036-.22-1.602-.396-1.978-.242-.497-.532-.852-.907-1.227-.375-.375-.73-.665-1.227-.907-.376-.176-.942-.349-1.978-.396-1.248-.058-1.626-.07-4.796-.07zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.185a4.023 4.023 0 1 0 0-8.047 4.023 4.023 0 0 0 0 8.047zm6.406-11.845a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z"/>
                  </svg>
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
                  <h4 className="font-medium text-gray-200 mb-1">Name</h4>
                  <p className="text-gray-300">Sudha Lakshmisha</p>
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
                  <h4 className="font-medium text-gray-200 mb-1">Address</h4>
                  <p className="text-gray-300">
                    {contact_info.address.street}<br />
                    {contact_info.address.city}, {contact_info.address.state} {contact_info.address.zip}
                  </p>
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
