import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes';

// AOS imports for animations
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {

  useEffect(() => {
    // Initialize AOS (Animation on Scroll)
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Whether animation should happen only once while scrolling
      disable: window.innerWidth < 768 // Disable AOS on mobile screens
    });

    // Refresh AOS on resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
