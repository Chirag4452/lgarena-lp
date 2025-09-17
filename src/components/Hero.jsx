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

      {/* Gradient Overlays removed per request */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>

      {/* Hero Content */}
      <div className="relative z-30 w-full">
        <div className="container-custom">
          <div className="text-center text-white space-y-8 max-w-5xl mx-auto">
            
            {/* Main Headlines */}
            <div className="space-y-4">
              
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Welcome to{' '}
                <span className="block text-white">
                  LG87 Play Arena
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
              <Link 
                to="/facilities" 
                className="group relative bg-red-500 active:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg min-h-[52px] w-full sm:w-auto flex items-center justify-center text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">View Facilities</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/contact" 
                className="group bg-white/10 active:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 active:border-white/50 transition-all duration-300 min-h-[52px] w-full sm:w-auto flex items-center justify-center text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      


      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-3xl z-20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl z-20"></div>
    </section>
  );
};

export default Hero;
