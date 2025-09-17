import ContactLocation from '../components/ContactLocation.jsx';

/**
 * Contact page component that displays contact form and location information
 * Uses the ContactLocation component and adds additional contact-specific content
 */
const Contact = () => {
  return (
    <main className="py-8">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We're here to help you with any questions about our facilities, memberships, 
            or services. Get in touch with us today and let's start your fitness journey together.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-semibold text-secondary-800 mb-2">Call Us</h3>
            <p className="text-sm text-secondary-600 mb-3">
              Speak directly with our team for immediate assistance
            </p>
            <a 
              href="tel:9739796255" 
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              +91-9739796255
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="font-semibold text-secondary-800 mb-2">Email Us</h3>
            <p className="text-sm text-secondary-600 mb-3">
              Send us your questions and we'll respond within 24 hours
            </p>
            <a 
              href="mailto:lg87playarenadm@gmail.com" 
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              lg87playarenadm@gmail.com
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-semibold text-secondary-800 mb-2">Schedule Tour</h3>
            <p className="text-sm text-secondary-600 mb-3">
              Book a personalized tour of our facilities
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Book Tour
            </button>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="font-semibold text-secondary-800 mb-2">Visit Us</h3>
            <p className="text-sm text-secondary-600 mb-3">
              Come see our facilities in person
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Get Directions
            </button>
          </div>
        </div>

        {/* Main Contact Section */}
        <ContactLocation />

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary-600">
              Quick answers to common questions about our facilities and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-800 mb-2">
                What are your membership options?
              </h3>
              <p className="text-secondary-600 text-sm">
                We offer flexible membership plans including monthly, quarterly, and annual options. 
                Each membership includes access to all facilities, group classes, and basic equipment rental.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-800 mb-2">
                Do you offer personal training?
              </h3>
              <p className="text-secondary-600 text-sm">
                Yes! Our certified personal trainers are available for one-on-one sessions, 
                small group training, and specialized sport coaching across all our facilities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-800 mb-2">
                Can I book facilities for private events?
              </h3>
              <p className="text-secondary-600 text-sm">
                Absolutely! Our facilities are available for private rentals, birthday parties, 
                corporate events, and tournaments. Contact us for special event pricing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-800 mb-2">
                What safety measures do you have in place?
              </h3>
              <p className="text-secondary-600 text-sm">
                We maintain the highest safety standards with certified lifeguards, first aid stations, 
                emergency equipment, and regular safety inspections of all facilities and equipment.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
};

export default Contact;
