import { useState } from 'react';
import { facilities } from '../data/facilities.js';

/**
 * Comprehensive Facilities component with responsive grid and modal functionality
 * Features hover effects, detailed facility cards, and expandable modal views
 */
const Facilities = () => {
  const [selected_facility, setSelectedFacility] = useState(null);
  const [is_modal_open, setIsModalOpen] = useState(false);

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
   * Open facility modal with detailed information
   * @param {Object} facility - The facility object to display
   */
  const openModal = (facility) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  /**
   * Close the facility modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFacility(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  /**
   * Handle modal backdrop click to close
   * @param {Event} e - Click event
   */
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-red-500">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our world-class sports facilities designed for excellence. Each venue offers 
            professional-grade equipment and amenities to support your athletic journey.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility) => (
            <div 
              key={facility.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-[1.02]"
              onClick={() => openModal(facility)}
            >
              {/* Facility Image */}
              <div className="relative h-64 bg-gradient-to-br from-red-100 to-red-200 overflow-hidden">
                {/* Image placeholder with sport emoji */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {getSportEmoji(facility.sport)}
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                
                {/* Capacity badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Capacity: {facility.capacity}
                </div>

                {/* Price badge */}
                <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-white">
                  From ${facility.pricing.hourly}/hr
                </div>
              </div>

              {/* Facility Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{getSportEmoji(facility.sport)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                        {facility.name}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">{facility.sport}</p>
                    </div>
                  </div>
                  <div className="text-red-500 group-hover:translate-x-1 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {facility.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {facility.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                    {facility.features.length > 3 && (
                      <li className="text-red-500 font-medium text-xs">
                        +{facility.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>Hours: {facility.operating_hours}</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">Open</span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gray-100 group-hover:bg-red-500 text-gray-700 group-hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {is_modal_open && selected_facility && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="relative h-80 bg-gradient-to-br from-red-100 to-red-200">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Facility Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl opacity-20">
                  {getSportEmoji(selected_facility.sport)}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-3xl">{getSportEmoji(selected_facility.sport)}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selected_facility.name}</h2>
                    <p className="text-red-200 capitalize text-lg">{selected_facility.sport} Facility</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{selected_facility.capacity}</div>
                    <div className="text-red-200 text-sm">Capacity</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">${selected_facility.pricing.hourly}</div>
                    <div className="text-red-200 text-sm">Per Hour</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{selected_facility.features.length}</div>
                    <div className="text-red-200 text-sm">Features</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Facility</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selected_facility.description}
                </p>
              </div>

              {/* Facility Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Features & Amenities</h4>
                  <div className="space-y-2">
                    {selected_facility.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h4>
                  <div className="space-y-4">
                    {selected_facility.dimensions && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Dimensions</h5>
                        <p className="text-gray-600">{selected_facility.dimensions}</p>
                      </div>
                    )}
                    
                    {selected_facility.surface && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Surface Type</h5>
                        <p className="text-gray-600">{selected_facility.surface}</p>
                      </div>
                    )}

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Operating Hours</h5>
                      <p className="text-gray-600">{selected_facility.operating_hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment & Amenities */}
              {selected_facility.equipment && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Available Equipment</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selected_facility.equipment.map((item, index) => (
                      <div key={index} className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Pricing Options</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">${selected_facility.pricing.hourly}</div>
                    <div className="text-red-700 font-medium">Per Hour</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">${selected_facility.pricing.daily}</div>
                    <div className="text-red-700 font-medium">Daily Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">${selected_facility.pricing.monthly}</div>
                    <div className="text-red-700 font-medium">Monthly Pass</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200">
                  Book This Facility
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-lg transition-colors duration-200">
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
