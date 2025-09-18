import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Facilities from './pages/Facilities.jsx';
import FacilitiesGrid from './pages/FacilitiesGrid.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import Accessibility from './pages/Accessibility.jsx';
import DesignSystem from './pages/DesignSystem.jsx';
import MobileDemo from './pages/MobileDemo.jsx';

/**
 * Main App component with routing structure
 * Features responsive layout with Header, main content area, and Footer
 * Uses React Router for client-side navigation between pages
 */
function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Global Navigation Header */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-grow">
        <Routes>
          {/* Home Page Route */}
          <Route 
            path="/" 
            element={<Home />} 
          />
          
          {/* Facilities Page Route */}
          <Route 
            path="/facilities" 
            element={<Facilities />} 
          />

          {/* Facilities Grid Page Route (New Component Showcase) */}
          <Route 
            path="/facilities-grid" 
            element={<FacilitiesGrid />} 
          />
          
          {/* About Page Route */}
          <Route 
            path="/about" 
            element={<About />} 
          />
          
          {/* Contact Page Route */}
          <Route 
            path="/contact" 
            element={<Contact />} 
          />

          {/* Enhanced Contact Page Route (New Component Showcase) */}
          <Route 
            path="/contact-page" 
            element={<ContactPage />} 
          />

          {/* Privacy Policy Route */}
          <Route 
            path="/privacy" 
            element={<PrivacyPolicy />} 
          />

          {/* Terms of Service Route */}
          <Route 
            path="/terms" 
            element={<TermsOfService />} 
          />

          {/* Accessibility Statement Route */}
          <Route 
            path="/accessibility" 
            element={<Accessibility />} 
          />

          {/* Design System Showcase Route */}
          <Route 
            path="/design-system" 
            element={<DesignSystem />} 
          />

          {/* Mobile Demo Route */}
          <Route 
            path="/mobile-demo" 
            element={<MobileDemo />} 
          />
          
          {/* Catch-all route for 404 Not Found */}
          <Route 
            path="*" 
            element={
              <div className="py-16">
                <div className="container-custom text-center">
                  <div className="text-6xl mb-4">🏟️</div>
                  <h1 className="text-4xl font-bold text-secondary-800 mb-4">
                    Page Not Found
                  </h1>
                  <p className="text-secondary-600 mb-8">
                    Sorry, the page you're looking for doesn't exist.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <a href="/" className="btn-primary">
                        Return Home
                      </a>
                    </div>
                    <div className="text-sm text-secondary-500">
                      Or try one of these pages:
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="/facilities" className="btn-secondary text-sm">
                        Our Facilities
                      </a>
                      <a href="/contact" className="btn-secondary text-sm">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
