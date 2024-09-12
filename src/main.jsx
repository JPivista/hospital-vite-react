import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

import "react-multi-carousel/lib/styles.css";

import 'swiper/swiper-bundle.css';

import 'aos/dist/aos.css';  // Import AOS CSS
import AOS from 'aos';      // Import AOS JavaScript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Initialize AOS
AOS.init({
  duration: 1000,  // Animation duration
});