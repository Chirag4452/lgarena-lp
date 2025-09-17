import { Link } from 'react-router-dom';

/**
 * Hero section component for the landing page
 * Features call-to-action buttons and key value propositions
 */
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="min-h-[80vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Premier Multi-Sport
                <span className="block text-primary-200">
                  Complex Experience
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-100 max-w-2xl">
                Discover world-class facilities for basketball, tennis, swimming, soccer, 
                fitness, and volleyball. Whether you're a beginner or professional athlete, 
                we have everything you need to excel in your sport.
              </p>

              {/* Key Features */}
              <div className="grid sm:grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-primary-200 text-sm">Sport Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-primary-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-primary-200 text-sm">Support Available</div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/facilities" className="btn-secondary">
                  Explore Facilities
                </Link>
                <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 border border-white/20 backdrop-blur-sm">
                  Schedule Tour
                </button>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Placeholder for hero image - you can replace with actual image */}
                <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {/* Sport icons placeholder */}
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏀</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🎾</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏊</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⚽</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">💪</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏐</span>
                      </div>
                    </div>
                    <p className="text-primary-200 text-sm">
                      All Sports Under One Roof
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-400/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="relative">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V60c0,30,30,60,60,60h1080c30,0,60-30,60-60V0z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
