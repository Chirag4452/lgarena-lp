import { useState } from 'react';

/**
 * Mobile Demo Page - Showcases mobile optimizations and touch-friendly design
 * Demonstrates all mobile improvements including buttons, forms, navigation, and responsive elements
 */
const MobileDemo = () => {
  const [form_data, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [show_menu, setShowMenu] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! Check how the mobile keyboard interacted with inputs.');
  };

  const toggleMenu = () => {
    setShowMenu(!show_menu);
  };

  return (
    <main className="pt-20 min-h-screen bg-neutral-50 no-scrollbar-x">
      <div className="container-custom section-padding">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-h1 text-neutral-900 mb-6">
            📱 Mobile <span className="text-primary-500">Optimization</span> Demo
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            This page demonstrates all mobile optimizations: touch-friendly buttons, 
            mobile-first forms, responsive navigation, and horizontal scroll prevention.
          </p>
          
          {/* Screen Size Indicator */}
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-sm">
            <span className="mobile-only text-primary-600 font-semibold">📱 Mobile View</span>
            <span className="mobile-hidden text-primary-600 font-semibold">🖥️ Desktop View</span>
          </div>
        </div>

        {/* Touch-Friendly Buttons Test */}
        <section className="mb-16">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h3">✅ Touch-Friendly Buttons (44px+ minimum)</h2>
              <p className="text-neutral-600">All buttons meet Apple's 44px minimum touch target guideline</p>
            </div>
            <div className="card-body space-y-6">
              
              {/* Button Sizes */}
              <div>
                <h3 className="text-h5 mb-4">Button Sizes (All Touch-Friendly)</h3>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <button className="btn-xs btn-primary">Extra Small (40px+)</button>
                    <button className="btn-sm btn-primary">Small (44px+)</button>
                    <button className="btn-md btn-primary">Medium (44px+)</button>
                    <button className="btn-lg btn-primary">Large (48px+)</button>
                    <button className="btn-xl btn-primary">Extra Large (52px+)</button>
                  </div>
                </div>
              </div>

              {/* Button Variants */}
              <div>
                <h3 className="text-h5 mb-4">Button Variants</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button className="btn-primary">Primary Button</button>
                  <button className="btn-secondary">Secondary Button</button>
                  <button className="btn-outline">Outline Button</button>
                  <button className="btn-ghost">Ghost Button</button>
                  <button className="btn-success">Success Button</button>
                  <button className="btn-warning">Warning Button</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Form Optimization */}
        <section className="mb-16">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h3">📝 Mobile-Optimized Forms</h2>
              <p className="text-neutral-600">
                16px font size prevents iOS zoom, 44px+ inputs, proper keyboard types
              </p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label className="form-label">Name (Text Input - 48px height on mobile)</label>
                  <input
                    type="text"
                    name="name"
                    value={form_data.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                  <div className="form-help">Notice: No zoom on iOS due to 16px font size</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email (Email Keyboard on Mobile)</label>
                  <input
                    type="email"
                    name="email"
                    value={form_data.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your@email.com"
                  />
                  <div className="form-help">Mobile shows email keyboard with @ and .com</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone (Number Pad on Mobile)</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                  <div className="form-help">Mobile shows number pad for easy dialing</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message (100px minimum height on mobile)</label>
                  <textarea
                    name="message"
                    value={form_data.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="4"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Facility Interest</label>
                  <select className="form-select">
                    <option>Select a facility...</option>
                    <option>Basketball Courts</option>
                    <option>Tennis Complex</option>
                    <option>Swimming Pool</option>
                    <option>Soccer Fields</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox" id="terms" />
                  <label htmlFor="terms" className="text-neutral-700">
                    I agree to the terms (24px touch targets on mobile)
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Form (Full Width on Mobile)
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Mobile Navigation Demo */}
        <section className="mb-16">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h3">🧭 Mobile Navigation</h2>
              <p className="text-neutral-600">Smooth animations, touch-friendly targets</p>
            </div>
            <div className="card-body">
              <button 
                onClick={toggleMenu}
                className="btn-primary mb-4 w-full"
              >
                {show_menu ? 'Hide Demo Menu' : 'Show Demo Menu'} 
              </button>
              
              {show_menu && (
                <div className="mobile-menu-enter bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="p-4 space-y-3">
                    <a href="#" className="block px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 min-h-[52px] flex items-center animate-slide-up text-neutral-700 active:text-red-600 active:bg-neutral-100">
                      Home
                    </a>
                    <a href="#" className="block px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 min-h-[52px] flex items-center animate-slide-up text-neutral-700 active:text-red-600 active:bg-neutral-100" style={{animationDelay: '50ms'}}>
                      Facilities
                    </a>
                    <a href="#" className="block px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 min-h-[52px] flex items-center animate-slide-up text-neutral-700 active:text-red-600 active:bg-neutral-100" style={{animationDelay: '100ms'}}>
                      About
                    </a>
                    <a href="#" className="block px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 min-h-[52px] flex items-center animate-slide-up text-neutral-700 active:text-red-600 active:bg-neutral-100" style={{animationDelay: '150ms'}}>
                      Contact
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Responsive Images */}
        <section className="mb-16">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h3">🖼️ Responsive Images</h2>
              <p className="text-neutral-600">Properly sized images that prevent horizontal scroll</p>
            </div>
            <div className="card-body space-y-6">
              
              <div>
                <h3 className="text-h5 mb-3">Hero Image (16:9 aspect ratio)</h3>
                <div className="img-hero bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-600 text-2xl font-bold">
                  Hero Image Placeholder
                </div>
              </div>

              <div>
                <h3 className="text-h5 mb-3">Card Images (4:3 aspect ratio)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="img-card bg-gradient-to-br from-success-100 to-success-200 flex items-center justify-center text-success-600 font-semibold">
                    Card Image 1
                  </div>
                  <div className="img-card bg-gradient-to-br from-warning-100 to-warning-200 flex items-center justify-center text-warning-600 font-semibold">
                    Card Image 2
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-h5 mb-3">Avatar Images (1:1 aspect ratio)</h3>
                <div className="flex space-x-4">
                  <div className="w-16 h-16 img-avatar bg-gradient-to-br from-info-100 to-info-200 flex items-center justify-center text-info-600 font-bold">
                    A
                  </div>
                  <div className="w-16 h-16 img-avatar bg-gradient-to-br from-error-100 to-error-200 flex items-center justify-center text-error-600 font-bold">
                    B
                  </div>
                  <div className="w-16 h-16 img-avatar bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-600 font-bold">
                    C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Utilities */}
        <section className="mb-16">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h3">🛠️ Mobile Utility Classes</h2>
              <p className="text-neutral-600">Useful utilities for mobile-specific styling</p>
            </div>
            <div className="card-body space-y-4">
              
              <div className="alert-info">
                <strong>Touch Actions:</strong> <code>.touch-action-manipulation</code> improves tap responsiveness
              </div>

              <div className="alert-success mobile-only">
                <strong>Mobile Only:</strong> This alert only shows on mobile devices (using <code>.mobile-only</code>)
              </div>

              <div className="alert-warning mobile-hidden">
                <strong>Mobile Hidden:</strong> This alert is hidden on mobile devices (using <code>.mobile-hidden</code>)
              </div>

              <div className="alert-info">
                <strong>Safe Areas:</strong> Use <code>.safe-top</code>, <code>.safe-bottom</code> for devices with notches
              </div>

              <div className="alert-success">
                <strong>No Horizontal Scroll:</strong> <code>.no-scrollbar-x</code> prevents horizontal overflow
              </div>
            </div>
          </div>
        </section>

        {/* Performance Tips */}
        <section className="mb-16">
          <div className="card-gradient">
            <div className="card-body text-center">
              <h2 className="text-h3 text-primary-700 mb-4">🚀 Mobile Performance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold text-primary-700 mb-2">Touch Optimization</h3>
                  <p className="text-primary-600 text-sm">All buttons meet 44px minimum touch target</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-semibold text-primary-700 mb-2">Keyboard Friendly</h3>
                  <p className="text-primary-600 text-sm">16px font prevents zoom, proper input types</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-primary-700 mb-2">No Horizontal Scroll</h3>
                  <p className="text-primary-600 text-sm">All content properly constrained</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-neutral-200">
          <p className="text-neutral-600">
            🏟️ LG&T Play Arena Mobile Demo • Test on different devices for best experience
          </p>
        </div>
      </div>
    </main>
  );
};

export default MobileDemo;
