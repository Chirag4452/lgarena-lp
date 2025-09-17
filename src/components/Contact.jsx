import { useState } from 'react';
import { contact_info } from '../data/facilities.js';

/**
 * Contact section component with two-column layout and comprehensive contact information
 * Features contact form, map embed, social media links, and business details
 */
const Contact = () => {
  const [form_data, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [is_submitting, setIsSubmitting] = useState(false);

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle contact form submission
   * @param {Event} e - Form submission event
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form submitted:', form_data);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  // Social media links
  const social_media_links = [
    {
      name: 'Facebook',
      icon: '📘',
      url: '#',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Instagram', 
      icon: '📷',
      url: '#',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: '#',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your game? Contact LG87 Play Arena today. Whether you're booking 
            a facility, joining our community, or just have questions, we're here to help.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-red-600">📍</span>
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {contact_info.address.street}<br />
                      {contact_info.address.city}, {contact_info.address.state} {contact_info.address.zip}<br />
                      {contact_info.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <a 
                      href={`tel:${contact_info.phone}`}
                      className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
                    >
                      {contact_info.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a 
                      href={`mailto:${contact_info.email}`}
                      className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
                    >
                      {contact_info.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Website</h4>
                    <a 
                      href={`https://${contact_info.website}`}
                      className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact_info.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600">⏰</span>
                </div>
                Operating Hours
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">{contact_info.operating_hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-gray-100">
                  <span className="font-medium text-gray-700">Saturday - Sunday</span>
                  <span className="text-gray-600">{contact_info.operating_hours.weekends}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-gray-100">
                  <span className="font-medium text-gray-700">Holidays</span>
                  <span className="text-gray-600">{contact_info.operating_hours.holidays}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-semibold text-green-800">Currently Open</span>
                  <span className="text-green-600 ml-2">• Closes at 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600">🌟</span>
                </div>
                Follow Us
              </h3>
              
              <p className="text-gray-600 mb-6">
                Stay connected with LG87 Play Arena for updates, events, and behind-the-scenes content.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {social_media_links.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-xl flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form & Map */}
          <div className="space-y-8">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600">💬</span>
                </div>
                Send Us a Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form_data.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form_data.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form_data.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form_data.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={is_submitting}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-200 transform hover:scale-[1.02] ${
                    is_submitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-500 hover:bg-red-600 hover:shadow-lg'
                  }`}
                >
                  {is_submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gray-100">
                {/* Google Maps Embed Placeholder */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253576489!2d144.95565131531895!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1562313591100!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LG87 Play Arena Location"
                  className="rounded-xl"
                ></iframe>
                
                {/* Overlay for custom styling (optional) */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                    <p className="text-sm font-semibold text-gray-800">📍 LG87 Play Arena</p>
                    <p className="text-xs text-gray-600">{contact_info.address.street}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who call LG87 Play Arena home. Book a tour today 
            and see why we're the premier choice for sports excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Schedule a Tour
            </button>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 border border-red-400 transform hover:scale-105">
              View Memberships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
