import { useState } from 'react';

/**
 * Design System Showcase Page
 * Demonstrates all components, utilities, and design tokens in the LG&T Play Arena design system
 */
const DesignSystem = () => {
  const [is_dark_mode, setIsDarkMode] = useState(false);

  /**
   * Toggle dark mode
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!is_dark_mode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className={`pt-20 min-h-screen bg-neutral-50 ${is_dark_mode ? 'dark' : ''}`}>
      <div className="container-custom section-padding">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-h1 text-neutral-900 mb-6">
            LG&T Play Arena <span className="text-primary-500">Design System</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Comprehensive design system showcasing components, utilities, and design tokens 
            for building consistent and beautiful interfaces.
          </p>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="btn-outline btn-md"
          >
            {is_dark_mode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Color Palette</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Primary Colors */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h4">Primary Red</h3>
                <p className="text-neutral-600 text-sm">Energetic but professional</p>
              </div>
              <div className="card-body space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary-50">
                  <span className="text-sm font-medium">50</span>
                  <span className="text-xs text-neutral-500">#fef2f2</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary-500 text-white">
                  <span className="text-sm font-medium">500</span>
                  <span className="text-xs">#ef4444</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary-600 text-white">
                  <span className="text-sm font-medium">600</span>
                  <span className="text-xs">#dc2626</span>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h4">Neutral Gray</h3>
                <p className="text-neutral-600 text-sm">Professional balance</p>
              </div>
              <div className="card-body space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-100">
                  <span className="text-sm font-medium">100</span>
                  <span className="text-xs text-neutral-500">#f1f5f9</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-500 text-white">
                  <span className="text-sm font-medium">500</span>
                  <span className="text-xs">#64748b</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-800 text-white">
                  <span className="text-sm font-medium">800</span>
                  <span className="text-xs">#1e293b</span>
                </div>
              </div>
            </div>

            {/* Status Colors */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h4">Status Colors</h3>
                <p className="text-neutral-600 text-sm">Semantic feedback</p>
              </div>
              <div className="card-body space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-success-500 text-white">
                  <span className="text-sm font-medium">Success</span>
                  <span className="text-xs">#22c55e</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-warning-500 text-white">
                  <span className="text-sm font-medium">Warning</span>
                  <span className="text-xs">#f59e0b</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-error-500 text-white">
                  <span className="text-sm font-medium">Error</span>
                  <span className="text-xs">#ef4444</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Typography</h2>
          
          <div className="card mb-8">
            <div className="card-body">
              <h1 className="text-h1 mb-4">Heading 1 - Main Page Titles</h1>
              <h2 className="text-h2 mb-4">Heading 2 - Section Headings</h2>
              <h3 className="text-h3 mb-4">Heading 3 - Subsection Titles</h3>
              <h4 className="text-h4 mb-4">Heading 4 - Component Titles</h4>
              <h5 className="text-h5 mb-4">Heading 5 - Small Headings</h5>
              <h6 className="text-h6 mb-6">Heading 6 - Micro Headings</h6>
              
              <p className="text-lg mb-4">
                Large body text - Perfect for introductory paragraphs and important content 
                that needs to stand out while maintaining excellent readability.
              </p>
              
              <p className="text-base mb-4">
                Base body text - The standard text size for most content. Provides optimal 
                readability across all devices and screen sizes with comfortable line spacing.
              </p>
              
              <p className="text-sm text-neutral-600">
                Small text - Used for captions, helper text, and secondary information 
                that supports the main content without competing for attention.
              </p>
            </div>
          </div>
        </section>

        {/* Button System */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Button System</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Button Variants */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h4">Button Variants</h3>
              </div>
              <div className="card-body space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-700 mb-3">Primary Actions</h4>
                  <button className="btn-primary mr-4 mb-2">Book Facility</button>
                  <button className="btn-primary btn-md mr-4 mb-2">Medium</button>
                  <button className="btn-primary btn-sm mb-2">Small</button>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-700 mb-3">Secondary Actions</h4>
                  <button className="btn-secondary mr-4 mb-2">Learn More</button>
                  <button className="btn-outline mr-4 mb-2">Outline</button>
                  <button className="btn-ghost mb-2">Ghost</button>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-neutral-700 mb-3">Status Buttons</h4>
                  <button className="btn-success mr-4 mb-2">Success</button>
                  <button className="btn-warning mr-4 mb-2">Warning</button>
                  <button className="btn-error mb-2">Error</button>
                </div>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h4">Button Sizes</h3>
              </div>
              <div className="card-body space-y-4">
                <button className="btn btn-xl btn-primary block w-full mb-3">Extra Large</button>
                <button className="btn btn-lg btn-primary block w-full mb-3">Large (Default)</button>
                <button className="btn btn-md btn-primary block w-full mb-3">Medium</button>
                <button className="btn btn-sm btn-primary block w-full mb-3">Small</button>
                <button className="btn btn-xs btn-primary block w-full">Extra Small</button>
              </div>
            </div>
          </div>
        </section>

        {/* Card System */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Card System</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Basic Card */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h5">Basic Card</h3>
                <p className="text-neutral-600 text-sm">Standard card layout</p>
              </div>
              <div className="card-body">
                <p className="text-neutral-600">
                  This is a basic card with header, body, and footer sections. 
                  Perfect for displaying structured content.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn-primary btn-sm">Action</button>
              </div>
            </div>

            {/* Hover Card */}
            <div className="card-hover">
              <div className="card-body">
                <h3 className="text-h5 mb-3">Hover Card</h3>
                <p className="text-neutral-600 mb-4">
                  Interactive card with hover effects. Perfect for clickable content.
                </p>
                <span className="badge-primary">Interactive</span>
              </div>
            </div>

            {/* Gradient Card */}
            <div className="card-gradient">
              <div className="card-body">
                <h3 className="text-h5 mb-3">Gradient Card</h3>
                <p className="text-neutral-700 mb-4">
                  Featured content card with gradient background for special emphasis.
                </p>
                <span className="badge bg-white text-primary-600">Featured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Components */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Form Components</h2>
          
          <div className="card max-w-2xl">
            <div className="card-header">
              <h3 className="text-h4">Sample Form</h3>
              <p className="text-neutral-600 text-sm">Showcase of form elements</p>
            </div>
            <div className="card-body">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input type="text" className="form-input" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input type="text" className="form-input" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="john@example.com" />
                  <div className="form-help">We'll never share your email address</div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Facility Interest</label>
                  <select className="form-select">
                    <option>Select a facility</option>
                    <option>Basketball Courts</option>
                    <option>Tennis Complex</option>
                    <option>Swimming Pool</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" rows="4" placeholder="Tell us about your needs..."></textarea>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox" id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm text-neutral-700">Subscribe to newsletter</label>
                </div>
                
                <button type="submit" className="btn-primary">Submit Form</button>
              </form>
            </div>
          </div>
        </section>

        {/* Utilities */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Utility Components</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Badges */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h4">Badges</h3>
              </div>
              <div className="card-body space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-700 mb-3">Status Badges</h4>
                  <div className="space-x-2 space-y-2">
                    <span className="badge-primary">Primary</span>
                    <span className="badge-success">Success</span>
                    <span className="badge-warning">Warning</span>
                    <span className="badge-error">Error</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-h4">Alerts</h3>
              </div>
              <div className="card-body space-y-3">
                <div className="alert-info">
                  <strong>Info:</strong> This is an informational message.
                </div>
                <div className="alert-success">
                  <strong>Success:</strong> Action completed successfully!
                </div>
                <div className="alert-warning">
                  <strong>Warning:</strong> Please review your input.
                </div>
                <div className="alert-error">
                  <strong>Error:</strong> Something went wrong.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Animations</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="card-body">
                <div className="w-16 h-16 bg-primary-500 rounded-xl mx-auto mb-4 animate-fade-in"></div>
                <h4 className="text-h6">Fade In</h4>
                <p className="text-xs text-neutral-600">animate-fade-in</p>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="card-body">
                <div className="w-16 h-16 bg-success-500 rounded-xl mx-auto mb-4 animate-slide-up"></div>
                <h4 className="text-h6">Slide Up</h4>
                <p className="text-xs text-neutral-600">animate-slide-up</p>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="card-body">
                <div className="w-16 h-16 bg-warning-500 rounded-xl mx-auto mb-4 animate-scale-in"></div>
                <h4 className="text-h6">Scale In</h4>
                <p className="text-xs text-neutral-600">animate-scale-in</p>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="card-body">
                <div className="w-16 h-16 bg-info-500 rounded-xl mx-auto mb-4 animate-pulse-slow"></div>
                <h4 className="text-h6">Pulse</h4>
                <p className="text-xs text-neutral-600">animate-pulse-slow</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing System */}
        <section className="mb-16">
          <h2 className="text-h2 text-neutral-800 mb-8">Spacing System</h2>
          
          <div className="card">
            <div className="card-header">
              <h3 className="text-h4">Spacing Scale</h3>
              <p className="text-neutral-600 text-sm">Design system spacing tokens</p>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                {[
                  { name: 'XS', value: '0.5rem', class: 'space-xs' },
                  { name: 'SM', value: '0.75rem', class: 'space-sm' },
                  { name: 'MD', value: '1rem', class: 'space-md' },
                  { name: 'LG', value: '1.5rem', class: 'space-lg' },
                  { name: 'XL', value: '2rem', class: 'space-xl' },
                  { name: '2XL', value: '3rem', class: 'space-2xl' },
                  { name: '3XL', value: '4rem', class: 'space-3xl' },
                ].map(space => (
                  <div key={space.name} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-mono">{space.name}</div>
                    <div className="w-24 text-xs text-neutral-500">{space.value}</div>
                    <div 
                      className="bg-primary-500 h-4"
                      style={{ width: space.value }}
                    ></div>
                    <div className="text-xs font-mono text-neutral-600">{space.class}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-neutral-200">
          <p className="text-neutral-600">
            LG&T Play Arena Design System • Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
};

export default DesignSystem;
