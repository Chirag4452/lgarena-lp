import { Link } from 'react-router-dom';

/**
 * Hero section component with full-width background and compelling CTAs
 * Features gradient overlay, operating hours card, and modern styling
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Replace this div with actual background image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='6%2c14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            backgroundColor: '#1f2937'
          }}
        >
          {/* Subtle pattern overlay to simulate sports facility */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/60 to-black/40"></div>
          
          {/* Sports facility visual placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-8xl md:text-9xl text-white">
              <span>🏀</span><span>🎾</span><span>🏊‍♂️</span>
              <span>⚽</span><span>💪</span><span>🏐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 via-red-700/80 to-gray-900/95 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>

      {/* Hero Content */}
      <div className="relative z-30 w-full">
        <div className="container-custom">
          <div className="text-center text-white space-y-8 max-w-5xl mx-auto">
            
            {/* Main Headlines */}
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white/90 mb-6">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                Premium Multi-Sport Complex
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Welcome to{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-100">
                  LG&T Play Arena
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                Where champions are made and dreams take flight. Experience world-class facilities 
                across basketball, tennis, swimming, soccer, fitness, and volleyball.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">6</div>
                <div className="text-red-200 text-sm font-medium">Sport Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">15+</div>
                <div className="text-red-200 text-sm font-medium">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">10K+</div>
                <div className="text-red-200 text-sm font-medium">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">24/7</div>
                <div className="text-red-200 text-sm font-medium">Support</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/facilities" 
                className="group relative bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="relative z-10">View Facilities</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/contact" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Hours Card */}
      <div className="absolute bottom-8 left-8 z-40 hidden md:block">
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 max-w-xs">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <h3 className="font-bold text-gray-800">Operating Hours</h3>
          </div>
          
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Mon - Fri:</span>
              <span>5:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Weekends:</span>
              <span>6:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Holidays:</span>
              <span>8:00 AM - 8:00 PM</span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-red-600">Open Now</span> • Closes 11:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-3xl z-20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl z-20"></div>
    </section>
  );
};

export default Hero;
