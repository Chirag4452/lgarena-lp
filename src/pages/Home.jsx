import Hero from '../components/Hero.jsx';
import FacilitiesShowcase from '../components/FacilitiesShowcase.jsx';

/**
 * Home page component that combines hero section and facilities showcase
 * This is the main landing page for the multi-sport complex website
 */
const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Facilities Preview */}
      <FacilitiesShowcase />
      
      {/* Additional Home Content can be added here */}
      {/* For example: Testimonials, News, Events, etc. */}
    </main>
  );
};

export default Home;
