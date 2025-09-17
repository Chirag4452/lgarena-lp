/**
 * About page component for LG87 Play Arena
 * Showcases the company's story, mission, and values
 */
const About = () => {
  return (
    <main className="py-8">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-red-500">LG*& Play Arena</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for world-class sports and fitness experiences. 
            We're dedicated to providing exceptional facilities and services that inspire 
            athletic excellence in our community.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide world-class sports facilities and exceptional service that enables 
              athletes of all levels to pursue their passion, achieve their goals, and build 
              lasting memories in a safe and welcoming environment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading multi-sport complex that sets the standard for excellence, 
              innovation, and community engagement while fostering the next generation of 
              athletes and fitness enthusiasts.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2008, LG87 Play Arena began as a vision to create a comprehensive 
                sports facility that could serve athletes across multiple disciplines under one roof. 
                What started as a single basketball court has evolved into a state-of-the-art 
                multi-sport complex spanning over 150,000 square feet.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Over the years, we've continuously invested in upgrading our facilities, 
                incorporating the latest technology, and expanding our offerings to meet the 
                growing needs of our community. Today, we proudly serve over 10,000 members 
                and host hundreds of events annually.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence has earned us recognition as the region's premier 
                sports destination, trusted by professional teams, schools, and recreational 
                athletes alike.
              </p>
            </div>

            <div className="space-y-4">
              {/* Timeline Stats */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-4">Key Milestones</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600"><strong>2008:</strong> Founded with first basketball court</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600"><strong>2012:</strong> Added tennis and swimming facilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600"><strong>2016:</strong> Expanded to include soccer fields</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600"><strong>2020:</strong> Renovated fitness center</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600"><strong>2023:</strong> Added volleyball courts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                We strive for excellence in every aspect of our facilities and services.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-sm text-gray-600">
                Building strong connections and fostering a sense of belonging for all.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Safety</h3>
              <p className="text-sm text-gray-600">
                Maintaining the highest safety standards in all our facilities and programs.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                Continuously improving and adapting to meet evolving athletic needs.
              </p>
            </div>
          </div>
        </div>

        {/* Team & Leadership */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">John Smith</h3>
              <p className="text-red-500 font-medium mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-600">
                Former professional athlete with 15+ years in sports facility management.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Sarah Johnson</h3>
              <p className="text-red-500 font-medium mb-2">Operations Director</p>
              <p className="text-sm text-gray-600">
                Expert in facility operations with a passion for customer experience.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Mike Davis</h3>
              <p className="text-red-500 font-medium mb-2">Athletic Director</p>
              <p className="text-sm text-gray-600">
                Certified trainer and coach specializing in multi-sport development.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 text-red-100">
            Experience the difference at LG87 Play Arena. Whether you're a seasoned athlete 
            or just starting your fitness journey, we're here to support your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Schedule a Tour
            </button>
            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 border border-red-400">
              View Memberships
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
