import { Link } from 'react-router-dom';
import { facilities } from '../data/facilities.js';

/**
 * FacilitiesShowcase component displays a preview of all available facilities
 * Used on the home page to showcase the variety of sports available
 */
const FacilitiesShowcase = () => {
  // Get the first 6 facilities for showcase (should be all of them based on our data)
  const showcase_facilities = facilities.slice(0, 6);

  /**
   * Get sport emoji based on sport type
   * @param {string} sport - The sport type
   * @returns {string} The corresponding emoji
   */
  const getSportEmoji = (sport) => {
    const sport_emojis = {
      basketball: '🏀',
      tennis: '🎾', 
      swimming: '🏊‍♀️',
      soccer: '⚽',
      fitness: '💪',
      volleyball: '🏐'
    };
    return sport_emojis[sport] || '🏃‍♂️';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            World-Class Sports Facilities
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Experience the best in multi-sport entertainment with our state-of-the-art 
            facilities designed for athletes of all levels.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcase_facilities.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Facility Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <span className="text-6xl">{getSportEmoji(facility.sport)}</span>
              </div>

              {/* Facility Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                  {facility.name}
                </h3>
                
                <p className="text-secondary-600 mb-4 line-clamp-2">
                  {facility.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-secondary-700 text-sm">Key Features:</h4>
                  <ul className="text-sm text-secondary-600">
                    {facility.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {facility.features.length > 2 && (
                      <li className="text-primary-600 font-medium text-xs">
                        +{facility.features.length - 2} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing and Capacity */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <span className="text-secondary-500">From </span>
                    <span className="font-semibold text-primary-600">
                      ₹{facility.pricing.hourly}/hr
                    </span>
                  </div>
                  <div className="text-sm text-secondary-500">
                    Capacity: {facility.capacity}
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="text-xs text-secondary-500 mb-4">
                  <span className="font-medium">Hours:</span> {facility.operating_hours}
                </div>

                {/* Action Button */}
                <button className="w-full btn-primary text-sm py-2">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-secondary-600 mb-6">
            Ready to experience our premium facilities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/facilities" className="btn-primary">
              View All Facilities
            </Link>
            <Link to="/contact" className="btn-secondary">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesShowcase;
