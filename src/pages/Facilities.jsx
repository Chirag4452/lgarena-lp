import { useState } from 'react';
import { facilities } from '../data/facilities.js';

/**
 * Facilities page component that displays detailed information about all sports facilities
 * Features filtering, detailed facility cards, and booking options
 */
const Facilities = () => {
  const [selected_sport, setSelectedSport] = useState('all');
  
  // Get unique sport types for filter options
  const sport_types = ['all', ...new Set(facilities.map(facility => facility.sport))];
  
  /**
   * Filter facilities based on selected sport type
   */
  const filtered_facilities = selected_sport === 'all' 
    ? facilities 
    : facilities.filter(facility => facility.sport === selected_sport);

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

  /**
   * Format sport name for display
   * @param {string} sport - The sport type
   * @returns {string} Formatted sport name
   */
  const formatSportName = (sport) => {
    if (sport === 'all') return 'All Sports';
    return sport.charAt(0).toUpperCase() + sport.slice(1);
  };

  return (
    <main className="py-8">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-800 mb-4">
            Our Facilities
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Explore our world-class sports facilities designed to meet the needs of 
            athletes at every level. From recreational activities to professional training, 
            we have everything you need to excel in your chosen sport.
          </p>
        </div>

        {/* Sport Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-secondary-800 mb-4">Filter by Sport:</h2>
          <div className="flex flex-wrap gap-3">
            {sport_types.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selected_sport === sport
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'
                }`}
              >
                {sport !== 'all' && (
                  <span className="mr-2">{getSportEmoji(sport)}</span>
                )}
                {formatSportName(sport)}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filtered_facilities.map((facility) => (
            <div 
              key={facility.id}
              id={facility.sport}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Facility Header */}
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 text-center">
                <div className="text-6xl mb-4">{getSportEmoji(facility.sport)}</div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                  {facility.name}
                </h3>
                <p className="text-secondary-600">
                  {facility.description}
                </p>
              </div>

              {/* Facility Details */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-800 mb-3">Features & Amenities:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-secondary-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Amenities */}
                {facility.amenities && facility.amenities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-800 mb-3">Additional Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {facility.amenities.map((amenity, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-secondary-600 text-sm rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing and Info Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-secondary-800 mb-2">Pricing</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Hourly:</span>
                        <span className="font-medium">₹{facility.pricing.hourly}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Daily:</span>
                        <span className="font-medium">₹{facility.pricing.daily}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly:</span>
                        <span className="font-medium">₹{facility.pricing.monthly}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-secondary-800 mb-2">Information</h4>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-secondary-600">Capacity:</span>
                        <span className="font-medium ml-1">{facility.capacity} people</span>
                      </div>
                      <div>
                        <span className="text-secondary-600">Hours:</span>
                        <div className="font-medium text-xs mt-1">{facility.operating_hours}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="btn-primary flex-1">
                    Book Now
                  </button>
                  <button className="btn-secondary flex-1">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-secondary-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-600 mb-6">
            Contact us today to learn more about our facilities, membership options, 
            or to schedule a personal tour of our complex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contact Us Today
            </button>
            <button className="btn-secondary">
              View Membership Plans
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Facilities;
