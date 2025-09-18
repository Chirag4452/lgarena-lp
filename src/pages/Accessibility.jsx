import { Link } from 'react-router-dom';

/**
 * Accessibility Statement page component
 * Provides information about accessibility features and commitment at LG87 Play Arena
 */
const Accessibility = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              We are committed to ensuring our facilities and services are accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
              
              {/* Our Commitment */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Our Commitment</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  LG87 Play Arena is committed to providing an inclusive environment where everyone can 
                  participate in sports and fitness activities regardless of their abilities. We strive 
                  to remove barriers and ensure equal access to our facilities and services.
                </p>
              </div>

              {/* Accessibility Features */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Accessibility Features</h2>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                  <li>Wheelchair accessible entrances and pathways</li>
                  <li>Accessible restroom facilities</li>
                  <li>Reserved parking spaces for people with disabilities</li>
                  <li>Clear signage and wayfinding throughout the facility</li>
                  <li>Accessible equipment and adaptive sports programs</li>
                  <li>Trained staff to assist with accessibility needs</li>
                </ul>
              </div>

              {/* Website Accessibility */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Website Accessibility</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  Our website is designed to be accessible and user-friendly for all visitors. We follow 
                  web accessibility guidelines and regularly review our digital content.
                </p>
              </div>

              {/* Contact for Assistance */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Need Assistance?</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  If you need assistance or have questions about accessibility at our facility, 
                  please contact us:
                </p>
                <div className="space-y-2 text-secondary-600">
                  <div><strong>Name:</strong> Sudha Lakshmisha</div>
                  <div><strong>Phone:</strong> +91 9739796255</div>
                  <div><strong>Email:</strong> lg87playarenadm@gmail.com</div>
                </div>
              </div>

              {/* Back to Home */}
              <div className="text-center pt-8 border-t border-gray-200">
                <Link 
                  to="/" 
                  className="btn-primary inline-flex items-center"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
