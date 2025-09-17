import { contact_info } from '../data/facilities.js';

/**
 * ContactLocation component displays contact information and location details
 * Features contact form, map placeholder, and business information
 */
const ContactLocation = () => {
  /**
   * Handle contact form submission
   * @param {Event} e - Form submission event
   */
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log('Contact form submitted');
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact us today or visit our facility 
            to see what makes LG Arena the premier choice for athletes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-secondary-800 mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-secondary-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-2">
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="membership">Membership</option>
                  <option value="facility_rental">Facility Rental</option>
                  <option value="personal_training">Personal Training</option>
                  <option value="group_classes">Group Classes</option>
                  <option value="birthday_party">Birthday Party</option>
                  <option value="corporate_event">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-600 text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-800">Address</h4>
                    <p className="text-secondary-600">
                      {contact_info.address.street}<br />
                      {contact_info.address.city}, {contact_info.address.state} {contact_info.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-600 text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-800">Phone</h4>
                    <p className="text-secondary-600">{contact_info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-600 text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-800">Email</h4>
                    <p className="text-secondary-600">{contact_info.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="text-lg font-semibold text-secondary-800 mb-4">
                Operating Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Monday - Friday:</span>
                  <span className="font-medium text-secondary-800">{contact_info.operating_hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Saturday - Sunday:</span>
                  <span className="font-medium text-secondary-800">{contact_info.operating_hours.weekends}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Holidays:</span>
                  <span className="font-medium text-secondary-800">{contact_info.operating_hours.holidays}</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h4 className="text-lg font-semibold text-secondary-800 mb-4">
                Find Us
              </h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-secondary-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Map integration coming soon</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
